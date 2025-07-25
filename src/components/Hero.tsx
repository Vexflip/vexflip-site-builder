import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-hugo.jpg";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-hero min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Build Lightning-Fast 
                <span className="bg-gradient-primary bg-clip-text text-transparent"> Hugo Websites</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Create blazing-fast static websites with Hugo in minutes, not hours. 
                Vexflip's powerful platform handles the complexity so you can focus on content.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Start Building Free
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>Deploy in seconds</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>99.9% uptime</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>Global CDN</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-3xl"></div>
            <img 
              src={heroImage} 
              alt="Hugo website building interface" 
              className="relative z-10 rounded-2xl shadow-elegant w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;