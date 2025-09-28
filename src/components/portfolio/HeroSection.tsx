import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* ID Card Style Profile */}
        <Card className="inline-block p-8 bg-gradient-card shadow-card border-2 border-primary/10 mb-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative">
              <div className="w-48 h-48 rounded-2xl overflow-hidden shadow-sticky border-4 border-secondary">
                <img 
                  src={profilePhoto} 
                  alt="Profile Photo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-2 -right-2 bg-secondary px-3 py-1 rounded-full text-sm font-bold text-secondary-foreground shadow-sticky">
                CS Student
              </div>
            </div>
            
            <div className="text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Rameyza Alya Mardya Izzati Prayitno
              </h1>
              
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="flex items-center gap-2 bg-muted px-3 py-2 rounded-lg">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="text-sm">rameyza.prayitno@binus.ac.id</span>
                </div>
                <div className="flex items-center gap-2 bg-muted px-3 py-2 rounded-lg">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="text-sm">+62 82114050787</span>
                </div>
              </div>
              
              <div className="flex gap-3">
                <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </Button>
                <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </Button>
              </div>
            </div>
          </div>
        </Card>
        
        {/* Start Button */}
        <Button 
          onClick={scrollToAbout}
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold shadow-sticky"
        >
          Start
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;