const Stats = () => {
  const stats = [
    {
      number: "50K+",
      label: "Websites Built",
      description: "Successful Hugo sites deployed"
    },
    {
      number: "99.9%",
      label: "Uptime",
      description: "Guaranteed service availability"
    },
    {
      number: "< 100ms",
      label: "Load Time",
      description: "Average page load speed"
    },
    {
      number: "24/7",
      label: "Support",
      description: "Expert help when you need it"
    }
  ];

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Why Developers Choose Vexflip
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of developers building the fastest websites on the internet.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-smooth">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;