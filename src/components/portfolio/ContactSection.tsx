import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <Card className="inline-block p-8 bg-secondary shadow-sticky transform -rotate-2 hover:rotate-0 transition-transform duration-300 border-4 border-secondary/20">
          <div className="space-y-6">
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              {/* Email */}
              <a 
                href="mailto:rameyza.prayitno@binus.ac.id"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-hover"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Send Email
                </Button>
              </a>

              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/rameyza-alya-03450b1a4/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Linkedin className="h-5 w-5 mr-2" />
                  LinkedIn
                </Button>
              </a>

              {/* GitHub */}
              <a 
                href="https://github.com/reimwon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Github className="h-5 w-5 mr-2" />
                  GitHub
                </Button>
              </a>
            </div>
          </div>
        </Card>
        
        <div className="mt-12 text-center">
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
