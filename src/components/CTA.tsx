import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-primary">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-primary-foreground">
            Ready to Build Your Next Hugo Site?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 leading-relaxed">
            Join thousands of developers and creators who trust Vexflip to power their static sites. 
            Start building today with our free plan.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-white/10 border-white/20 text-white hover:bg-white/20">
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-white/5 border-white/20 text-white hover:bg-white/10">
              Schedule Demo
            </Button>
          </div>
          
          <p className="text-sm text-primary-foreground/60 mt-6">
            No credit card required • Free plan available forever
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;