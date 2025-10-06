import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const pricingTiers = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    description: "Perfect for trying out the platform",
    features: [
      "10k credits/month",
      "Text-to-Speech",
      "Speech-to-Text",
      "Studio access (limited)",
      "Conversational AI trial",
      "API access (low concurrency)",
      "Basic onboarding"
    ],
    cta: "Start Free",
    popular: false
  },
  {
    name: "Starter",
    price: "$5",
    period: "/month",
    description: "For individual creators and small projects",
    features: [
      "30k credits/month",
      "Commercial license",
      "Instant voice cloning",
      "Dubbing Studio",
      "20 Studio projects",
      "Music use for social/ads",
      "Email support"
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Creator",
    price: "$11",
    period: "/month",
    description: "For professional content creators",
    features: [
      "100k credits/month",
      "Professional voice cloning",
      "Usage-based billing",
      "Higher-quality audio (192 kbps)",
      "Unlimited Studio projects",
      "Advanced export options",
      "Priority email support"
    ],
    cta: "Get Started",
    popular: true
  },
  {
    name: "Pro",
    price: "$99",
    period: "/month",
    description: "For power users and studios",
    features: [
      "500k credits/month",
      "44.1kHz PCM API output",
      "Higher concurrency",
      "Advanced audio processing",
      "Webhook integrations",
      "Team collaboration (3 seats)",
      "Priority support"
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Scale",
    price: "$330",
    period: "/month",
    description: "For growing teams and agencies",
    features: [
      "2M credits/month + 3 seats",
      "Multi-seat workspace",
      "Team admin controls",
      "Elevated concurrency",
      "Custom integrations",
      "Dedicated account manager",
      "SLA guarantee"
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Business",
    price: "$1,320",
    period: "/month",
    description: "For large organizations",
    features: [
      "11M credits/month + 5 seats",
      "Low-latency TTS pricing",
      "3 professional voice clones",
      "Dedicated support SLA",
      "Custom features",
      "Advanced analytics",
      "Premium onboarding"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Simple, transparent pricing
          </h1>
          <p className="text-xl text-muted-foreground">
            Choose the perfect plan for your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <Card
              key={tier.name}
              className={`relative flex flex-col p-8 ${
                tier.popular
                  ? "border-2 border-primary shadow-lg"
                  : "border-border/50"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-primary px-4 py-1 text-sm font-medium text-primary-foreground">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="mb-2 text-2xl font-bold">{tier.name}</h3>
                <p className="text-sm text-muted-foreground">{tier.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold">{tier.price}</span>
                <span className="text-muted-foreground">{tier.period}</span>
              </div>

              <ul className="mb-8 flex-1 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className="w-full"
                variant={tier.popular ? "default" : "outline"}
              >
                <Link to="/auth">{tier.cta}</Link>
              </Button>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="mb-4 text-2xl font-bold">Need something custom?</h3>
          <p className="mb-6 text-muted-foreground">
            Contact our sales team for Enterprise plans with custom credits, seats, SSO, HIPAA BAA, and dedicated support.
          </p>
          <Button variant="outline" size="lg">
            Contact Sales
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
