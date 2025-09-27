import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Globe, Palette, Terminal, GitBranch } from "lucide-react";

const ToolsSection = () => {
  const tools = [
    { name: "VS Code", icon: Code, color: "text-primary" },
    { name: "Figma", icon: Palette, color: "text-accent" },
    { name: "Git", icon: GitBranch, color: "text-success" },
    { name: "Excel", icon: Database, color: "text-primary" }
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
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ToolsSection;