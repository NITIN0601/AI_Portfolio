import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Linkedin, Github, ExternalLink, Phone, MapPin, Calendar } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "your.email@example.com",
    description: "Best way to reach me for opportunities",
    action: "mailto:your.email@example.com",
    primary: true
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "/in/yourprofile",
    description: "Professional network and updates",
    action: "https://linkedin.com/in/yourprofile",
    primary: true
  },
  {
    icon: Github,
    title: "GitHub",
    value: "@yourusername",
    description: "Code repositories and projects",
    action: "https://github.com/yourusername",
    primary: false
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+1 (555) 123-4567",
    description: "Available for calls by appointment",
    action: "tel:+15551234567",
    primary: false
  }
];

const availability = [
  "Open to senior ML/AI engineering roles",
  "Available for consulting projects",
  "Interested in research collaborations",
  "Speaking opportunities and conferences"
];

const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-secondary" id="contact">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready for new challenges in senior ML/AI engineering roles. Let's discuss how we can drive innovation together.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Contact Methods */}
            <Card className="group hover:shadow-glow transition-all duration-500">
              <CardHeader>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                  Get In Touch
                </CardTitle>
                <CardDescription className="text-base">
                  Multiple ways to connect for opportunities and collaborations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <div 
                      key={index} 
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-accent/50 transition-colors group/item"
                    >
                      <div className="p-2 bg-gradient-primary rounded-lg">
                        <method.icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-foreground">{method.title}</h4>
                          {method.primary && (
                            <Badge variant="certification" className="text-xs">
                              Primary
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-primary font-mono">{method.value}</p>
                        <p className="text-xs text-muted-foreground">{method.description}</p>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="opacity-0 group-hover/item:opacity-100 transition-opacity"
                        onClick={() => window.open(method.action, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Availability */}
            <Card className="group hover:shadow-glow transition-all duration-500">
              <CardHeader>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors flex items-center gap-2">
                  <Calendar className="w-6 h-6" />
                  Current Availability
                </CardTitle>
                <CardDescription className="text-base">
                  Actively seeking new opportunities and collaborations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <Badge variant="certification">Available Now</Badge>
                  </div>
                  
                  <div className="space-y-3">
                    {availability.map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-4 mt-6 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-4">
                      <strong>Preferred Locations:</strong> Remote, Global, or major tech hubs
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Notice Period:</strong> Flexible based on opportunity
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Call to Action */}
          <Card className="bg-gradient-primary text-primary-foreground border-0 shadow-glow">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Make an Impact
              </h3>
              <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
                With 5+ years of experience building production ML systems and a proven track record 
                at organizations like the UN and Fortune 500 companies, I'm ready to drive your AI initiatives forward.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="group"
                  onClick={() => window.open('mailto:your.email@example.com', '_blank')}
                >
                  <Mail className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Start a Conversation
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  Download Resume
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;