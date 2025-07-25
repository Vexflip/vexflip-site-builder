const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">V</span>
              </div>
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Vexflip
              </span>
            </div>
            <p className="text-muted-foreground">
              The fastest way to build and deploy Hugo websites.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-accent transition-smooth">Features</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">Pricing</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">Templates</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">Documentation</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-accent transition-smooth">About</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">Blog</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">Careers</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-accent transition-smooth">Help Center</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">Community</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">Status</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">Privacy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Vexflip. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-accent transition-smooth">
              Twitter
            </a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-smooth">
              GitHub
            </a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-smooth">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;