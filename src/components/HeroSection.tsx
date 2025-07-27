import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Linkedin, Github, Download, ExternalLink } from "lucide-react";
import profilePlaceholder from "@/assets/profile-placeholder.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background/10 to-background/30" />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <img
              src={profilePlaceholder}
              alt="Professional headshot"
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-primary-foreground shadow-glow"
            />
            <Badge variant="professional" className="mb-4">
              Available for Senior ML/AI Engineering Roles
            </Badge>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 tracking-tight">
            Machine Learning
            <span className="block text-primary-glow">Engineer & AI Specialist</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Currently driving AI innovation at the <strong>United Nations</strong>. 
            5+ years experience building scalable ML systems, from cybersecurity at Fortune 500 
            companies to cutting-edge research in academia.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Badge variant="certification">Microsoft Azure AI Engineer</Badge>
            <Badge variant="certification">Azure Data Scientist</Badge>
            <Badge variant="certification">MS in AI (Machine Learning)</Badge>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="group">
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Download Resume
            </Button>
            <Button variant="professional" size="lg" className="group">
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
          </div>
          
          <div className="flex justify-center gap-6 mt-8">
            <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-primary-glow hover:bg-primary-foreground/20">
              <Linkedin className="w-6 h-6" />
            </Button>
            <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-primary-glow hover:bg-primary-foreground/20">
              <Github className="w-6 h-6" />
            </Button>
            <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-primary-glow hover:bg-primary-foreground/20">
              <ExternalLink className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary-glow/20 rounded-full animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary-foreground/10 rounded-full animate-pulse delay-500" />
    </section>
  );
};

export default HeroSection;