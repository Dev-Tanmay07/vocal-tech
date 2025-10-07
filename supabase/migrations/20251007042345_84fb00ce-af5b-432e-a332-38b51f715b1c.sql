-- Add explicit DELETE policies to prevent data tampering
CREATE POLICY "Prevent deletion of payment history"
ON public.payment_history
FOR DELETE
USING (false);

CREATE POLICY "Prevent deletion of subscriptions"
ON public.subscriptions
FOR DELETE
USING (false);

-- Add UPDATE policy for payment_history to make it immutable
CREATE POLICY "Prevent updates to payment history"
ON public.payment_history
FOR UPDATE
USING (false);