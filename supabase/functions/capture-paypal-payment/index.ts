import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const { orderId } = await req.json();
    console.log('Capturing PayPal payment for order:', orderId);

    const PAYPAL_CLIENT_ID = Deno.env.get('PAYPAL_CLIENT_ID');
    const PAYPAL_CLIENT_SECRET = Deno.env.get('PAYPAL_CLIENT_SECRET');

    if (!PAYPAL_CLIENT_ID || !PAYPAL_CLIENT_SECRET) {
      console.error('PayPal credentials not configured');
      return new Response(
        JSON.stringify({ error: 'PayPal not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Get PayPal access token
    const authResponse = await fetch('https://api-m.paypal.com/v1/oauth2/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${btoa(`${PAYPAL_CLIENT_ID}:${PAYPAL_CLIENT_SECRET}`)}`,
      },
      body: 'grant_type=client_credentials',
    });

    if (!authResponse.ok) {
      const errorText = await authResponse.text();
      console.error('PayPal auth error:', errorText);
      return new Response(
        JSON.stringify({ error: 'PayPal authentication failed' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const { access_token } = await authResponse.json();

    // Capture the order
    const captureResponse = await fetch(`https://api-m.paypal.com/v2/checkout/orders/${orderId}/capture`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${access_token}`,
      },
    });

    if (!captureResponse.ok) {
      const errorText = await captureResponse.text();
      console.error('PayPal capture error:', errorText);
      return new Response(
        JSON.stringify({ error: 'Failed to capture PayPal payment' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const captureData = await captureResponse.json();
    console.log('PayPal payment captured successfully:', captureData.id);

    // Extract payment details
    const payerId = captureData.payer.payer_id;
    const amount = captureData.purchase_units[0].payments.captures[0].amount.value;
    const currency = captureData.purchase_units[0].payments.captures[0].amount.currency_code;

    // Get user ID from custom_id set during order creation
    const userId = captureData.purchase_units[0].custom_id;

    if (!userId) {
      console.error('No user ID found in PayPal order');
      return new Response(
        JSON.stringify({ error: 'User ID not found in order' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('Processing payment for user:', userId);

    if (userId) {
      // Record payment in payment_history
      const { error: paymentError } = await supabaseClient
        .from('payment_history')
        .insert({
          user_id: userId,
          amount: parseFloat(amount),
          currency: currency,
          paypal_order_id: orderId,
          status: 'completed',
        });

      if (paymentError) {
        console.error('Error recording payment:', paymentError);
      } else {
        console.log('Payment recorded successfully');
      }

      // Update or create subscription
      const { error: subscriptionError } = await supabaseClient
        .from('subscriptions')
        .upsert({
          user_id: userId,
          paypal_subscription_id: orderId,
          status: 'active',
          current_period_start: new Date().toISOString(),
          current_period_end: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
        });

      if (subscriptionError) {
        console.error('Error updating subscription:', subscriptionError);
      } else {
        console.log('Subscription updated successfully');
      }
    }

    return new Response(
      JSON.stringify({ success: true, captureData }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error in capture-paypal-payment:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
