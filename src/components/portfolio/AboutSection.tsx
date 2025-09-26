import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AboutSection = () => {
  const traits = [
    { label: "Creative", color: "bg-primary text-primary-foreground" },
    { label: "Analytical", color: "bg-accent text-accent-foreground" }, 
    { label: "Curious", color: "bg-secondary text-secondary-foreground" },
    { label: "Problem Solver", color: "bg-success text-success-foreground" }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="shadow-card bg-gradient-card border border-primary/10 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
          <CardHeader className="bg-primary text-primary-foreground rounded-t-lg">
            <CardTitle className="text-2xl font-bold flex items-center gap-2">
              📓 About Me
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-foreground">
                I'm a passionate Computer Science student with a deep love for technology and innovation. 
                My journey in tech began with curiosity about how things work, and has evolved into a 
                dedicated pursuit of software engineering excellence. I thrive on solving complex problems 
                and creating solutions that make a real impact.
              </p>
              
              <p className="text-lg leading-relaxed text-foreground">
                Currently pursuing my degree in Computer Science, I'm exploring areas like artificial 
                intelligence, blockchain technology, and full-stack web development. My goal is to 
                become a versatile software engineer who can bridge the gap between innovative ideas 
                and practical implementations.
              </p>
              
              <div className="pt-4">
                <h3 className="text-xl font-semibold text-primary mb-4">My Traits</h3>
                <div className="flex flex-wrap gap-3">
                  {traits.map((trait, index) => (
                    <Badge 
                      key={index}
                      className={`${trait.color} px-4 py-2 text-sm font-medium shadow-sticky transform hover:scale-105 transition-transform`}
                    >
                      {trait.label}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;