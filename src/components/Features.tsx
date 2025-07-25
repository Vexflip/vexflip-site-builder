import { Card } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: "⚡",
      title: "Lightning Fast",
      description: "Hugo generates static sites in milliseconds. Your visitors get instant page loads and perfect SEO scores."
    },
    {
      icon: "🎨",
      title: "Beautiful Themes",
      description: "Choose from hundreds of professionally designed themes or create your own with our intuitive theme builder."
    },
    {
      icon: "🔧",
      title: "Developer Friendly",
      description: "Full Git integration, CI/CD workflows, and all the developer tools you need for professional sites."
    },
    {
      icon: "📱",
      title: "Mobile First",
      description: "Every site is automatically optimized for mobile devices with responsive design out of the box."
    },
    {
      icon: "🌍",
      title: "Global CDN",
      description: "Your sites are deployed globally with edge caching for the fastest possible load times worldwide."
    },
    {
      icon: "🔒",
      title: "Secure by Default",
      description: "Static sites have zero attack surface. Built-in SSL, security headers, and best practices included."
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Why Choose <span className="bg-gradient-primary bg-clip-text text-transparent">Vexflip</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to build, deploy, and scale modern Hugo websites with confidence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 bg-gradient-card border-border hover:shadow-glow transition-smooth group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-smooth">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;