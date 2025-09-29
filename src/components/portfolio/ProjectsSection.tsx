import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "VKellogg's Shop",
      description:
        "A website themed around Kellogg's cereal products designed to provide comprehensive information about the brand's history, products, and cereal-based recipes. It combines branding elements, product promotion, and consumer education into a single platform.",
      github: "https://github.com/reimwon/project-hci",
      highlight: "🥣",
    },
    {
      title: "Festigo",
      description:
        "A centralized platform where users can easily search, discover, and get details about various events, ranging from music concerts, cultural festivals, and art exhibitions to educational seminars.",
      github: "https://github.com/reimwon/festigo-web-app",
      highlight: "🎪",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Projects & Experience
          </h2>
          <p className="text-lg text-muted-foreground">
            Some of my favorite projects and technical achievements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
                <p className="text-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tombol dengan link */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
