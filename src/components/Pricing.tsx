import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for personal projects and learning",
      features: [
        "5 Hugo sites",
        "Basic themes",
        "Community support",
        "1GB bandwidth",
        "Custom domains"
      ],
      cta: "Get Started",
      variant: "outline" as const,
      popular: false
    },
    {
      name: "Pro",
      price: "$19",
      period: "/month",
      description: "For professionals and growing businesses",
      features: [
        "Unlimited Hugo sites",
        "Premium themes",
        "Priority support",
        "100GB bandwidth",
        "Advanced analytics",
        "Team collaboration",
        "Custom integrations"
      ],
      cta: "Start Pro Trial",
      variant: "hero" as const,
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations with special needs",
      features: [
        "Everything in Pro",
        "Dedicated support",
        "SLA guarantee",
        "Unlimited bandwidth",
        "White-label solution",
        "Advanced security",
        "Custom integrations"
      ],
      cta: "Contact Sales",
      variant: "outline" as const,
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your needs. Upgrade or downgrade at any time.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`p-8 bg-gradient-card border-border relative ${
                plan.popular ? 'shadow-glow scale-105' : 'hover:shadow-glow'
              } transition-smooth`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-primary px-4 py-2 rounded-full text-sm font-semibold text-primary-foreground">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button variant={plan.variant} className="w-full" size="lg">
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;