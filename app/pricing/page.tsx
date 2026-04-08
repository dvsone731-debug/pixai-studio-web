"use client";

import Link from "next/link";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "Forever",
    description: "Perfect for trying out",
    features: [
      "5 creations per day",
      "All 6 creation modes",
      "Standard quality",
      "Public sharing",
      "Community gallery",
      "Basic support",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$4.99",
    period: "/month",
    description: "For serious creators",
    features: [
      "50 creations per day",
      "All 6 creation modes",
      "HD quality (1080p)",
      "Public sharing",
      "Priority support",
      "Custom music library",
      "Advanced filters",
      "Batch processing",
    ],
    cta: "Subscribe Now",
    highlighted: true,
  },
  {
    name: "Premium",
    price: "$9.99",
    period: "/month",
    description: "For professionals",
    features: [
      "Unlimited creations",
      "All 6 creation modes",
      "4K quality",
      "Public sharing",
      "24/7 priority support",
      "Custom music library",
      "Advanced filters",
      "Batch processing",
      "API access",
      "White-label options",
    ],
    cta: "Subscribe Now",
    highlighted: false,
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-dark pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Link href="/" className="text-primary hover:text-accent transition mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-5xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-muted">
            Choose the plan that fits your creative needs
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 border transition ${
                plan.highlighted
                  ? "border-primary bg-gradient-to-b from-primary/20 to-surface scale-105"
                  : "border-surface bg-surface hover:border-primary"
              }`}
            >
              {plan.highlighted && (
                <div className="mb-4 inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-muted text-sm mb-6">{plan.description}</p>

              <div className="mb-6">
                <span className="text-5xl font-bold">{plan.price}</span>
                <span className="text-muted ml-2">{plan.period}</span>
              </div>

              <button
                className={`w-full py-3 rounded-lg font-semibold transition mb-8 ${
                  plan.highlighted
                    ? "bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg hover:shadow-primary/50"
                    : "bg-primary/20 text-primary hover:bg-primary/30"
                }`}
              >
                {plan.cta}
              </button>

              <div className="space-y-4">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-muted">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Can I cancel anytime?",
                a: "Yes, you can cancel your subscription at any time. No questions asked.",
              },
              {
                q: "Is there a free trial?",
                a: "Yes! Our Free plan gives you 5 creations per day forever. No credit card required.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit cards, PayPal, and Apple Pay.",
              },
              {
                q: "Can I upgrade or downgrade anytime?",
                a: "Yes, you can change your plan at any time. Changes take effect immediately.",
              },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-surface rounded-lg border border-surface/50">
                <h4 className="font-bold mb-2">{item.q}</h4>
                <p className="text-muted">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
