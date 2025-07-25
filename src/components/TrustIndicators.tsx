const TrustIndicators = () => {
  const companies = [
    { name: "Acme Corp", logo: "🏢" },
    { name: "TechFlow", logo: "🚀" },
    { name: "DataVault", logo: "🔒" },
    { name: "CloudSync", logo: "☁️" },
    { name: "DevTools", logo: "⚡" },
    { name: "WebForge", logo: "🔨" }
  ];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-muted-foreground font-medium">
            Trusted by leading companies worldwide
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
          {companies.map((company, index) => (
            <div key={index} className="flex items-center space-x-3 text-muted-foreground hover:text-foreground transition-smooth">
              <span className="text-2xl">{company.logo}</span>
              <span className="font-semibold text-lg">{company.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;