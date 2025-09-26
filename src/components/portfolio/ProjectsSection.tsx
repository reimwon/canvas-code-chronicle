import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Code } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Blockchain for Healthcare Data Security",
      description: "Developed a secure blockchain-based system for healthcare data management, ensuring patient privacy and data integrity through smart contracts and cryptographic hashing.",
      tech: ["Solidity", "Web3.js", "React", "Node.js", "MongoDB"],
      github: "#",
      highlight: "🏥"
    },
    {
      title: "AI Chatbot with NLP",
      description: "Built an intelligent chatbot using natural language processing and machine learning algorithms, capable of understanding context and providing personalized responses.",
      tech: ["Python", "TensorFlow", "NLTK", "Flask", "React"],
      github: "#",
      highlight: "🤖"
    },
    {
      title: "E-commerce Web Application",
      description: "Full-stack e-commerce platform with user authentication, payment processing, inventory management, and real-time order tracking features.",
      tech: ["React", "Node.js", "Express", "PostgreSQL", "Stripe API"],
      github: "#",
      highlight: "🛒"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Projects & Experience</h2>
          <p className="text-lg text-muted-foreground">Some of my favorite projects and technical achievements</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="shadow-card hover:shadow-hover bg-gradient-card border border-primary/10 transform hover:-translate-y-2 transition-all duration-300 group"
            >
              <CardHeader className="bg-primary text-primary-foreground rounded-t-lg relative">
                <div className="absolute -top-2 -right-2 text-3xl bg-secondary rounded-full p-2 shadow-sticky">
                  {project.highlight}
                </div>
                <CardTitle className="text-lg font-bold pr-12">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-primary mb-2 flex items-center gap-2">
                      <Code className="h-4 w-4" />
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex}
                          variant="outline"
                          className="text-xs border-primary/20 hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;