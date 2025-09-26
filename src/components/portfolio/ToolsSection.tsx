import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Globe, Palette, Terminal, GitBranch } from "lucide-react";

const ToolsSection = () => {
  const tools = [
    { name: "VS Code", icon: Code, color: "text-primary" },
    { name: "Git", icon: GitBranch, color: "text-accent" },
    { name: "Docker", icon: Database, color: "text-primary" },
    { name: "Figma", icon: Palette, color: "text-success" },
    { name: "Jupyter", icon: Terminal, color: "text-accent" },
    { name: "React", icon: Globe, color: "text-primary" }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <Card className="shadow-card bg-gradient-card border border-primary/10">
          <CardHeader className="bg-accent text-accent-foreground rounded-t-lg">
            <CardTitle className="text-2xl font-bold flex items-center gap-2">
              🔧 Software & Tools
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {tools.map((tool, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sticky hover:shadow-hover transform hover:scale-105 transition-all duration-300 border border-primary/10"
                >
                  <tool.icon className={`h-12 w-12 mb-3 ${tool.color}`} />
                  <span className="font-medium text-foreground text-center">{tool.name}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                <h4 className="font-semibold text-primary mb-2">Programming Languages</h4>
                <p className="text-sm text-muted-foreground">Python, JavaScript, Java, C++, SQL, Solidity</p>
              </div>
              <div className="bg-success/5 p-4 rounded-lg border-l-4 border-success">
                <h4 className="font-semibold text-success mb-2">Frameworks & Libraries</h4>
                <p className="text-sm text-muted-foreground">React, Node.js, Express, TensorFlow, Flask</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ToolsSection;