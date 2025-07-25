import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">V</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Vexflip
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-foreground hover:text-accent transition-smooth">
              Features
            </a>
            <a href="#pricing" className="text-foreground hover:text-accent transition-smooth">
              Pricing
            </a>
            <a href="#about" className="text-foreground hover:text-accent transition-smooth">
              About
            </a>
            <Button variant="outline" size="sm">
              Sign In
            </Button>
            <Button variant="cta" size="sm">
              Get Started
            </Button>
          </div>
          
          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;