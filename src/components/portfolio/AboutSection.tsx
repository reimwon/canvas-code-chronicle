import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AboutSection = () => {
  const traits = [
    { label: "Creative", color: "bg-primary text-primary-foreground" },
    { label: "Analytical", color: "bg-accent text-accent-foreground" }, 
    { label: "Curious", color: "bg-secondary text-secondary-foreground" }
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
                A passionate and dedicated Computer Science student from Binus University with a strong enthusiasm for technology and continuous learning. I am resilient, hard-working, and diligent, always striving to improve my skills and broaden my knowledge. With a solid foundation in analytical thinking and communication, I uphold integrity and contribute innovative ideas to solve real-world challenges. My goal is to grow into a well-rounded professional who bridges the gap between creativity and practical implementation in the tech industry.
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