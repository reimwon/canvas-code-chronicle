import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Calendar, BookOpen } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      school: "Tech University",
      degree: "Bachelor of Science in Computer Science",
      period: "2022 - 2026",
      status: "In Progress",
      gpa: "3.8/4.0"
    },
    {
      school: "Springfield High School", 
      degree: "High School Diploma",
      period: "2018 - 2022",
      status: "Completed",
      gpa: "4.0/4.0"
    }
  ];

  const courses = [
    "Data Structures & Algorithms",
    "Object-Oriented Programming", 
    "Database Management Systems",
    "Artificial Intelligence",
    "Blockchain Technology",
    "Software Engineering",
    "Computer Networks",
    "Web Development"
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <Card className="shadow-card bg-gradient-card border border-primary/10 transform rotate-1 hover:rotate-0 transition-transform duration-300">
          <CardHeader className="bg-secondary text-secondary-foreground rounded-t-lg">
            <CardTitle className="text-2xl font-bold flex items-center gap-2">
              📋 Education
              <GraduationCap className="h-6 w-6" />
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="space-y-8">
              {/* Education Timeline */}
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="relative pl-8 border-l-4 border-primary/20">
                    <div className="absolute -left-2 top-2 w-4 h-4 bg-primary rounded-full"></div>
                    <div className="bg-white p-4 rounded-lg shadow-sticky border-l-4 border-accent">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-xl font-bold text-primary">{edu.school}</h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {edu.period}
                        </div>
                      </div>
                      <p className="text-lg font-medium text-foreground mb-2">{edu.degree}</p>
                      <div className="flex gap-4 text-sm">
                        <span className={`px-3 py-1 rounded-full ${edu.status === 'Completed' ? 'bg-success text-success-foreground' : 'bg-accent text-accent-foreground'}`}>
                          {edu.status}
                        </span>
                        <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full font-medium">
                          GPA: {edu.gpa}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Notable Courses */}
              <div className="pt-6 border-t border-primary/10">
                <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Notable Courses
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {courses.map((course, index) => (
                    <div 
                      key={index}
                      className="bg-primary/5 border-l-4 border-success p-3 rounded-lg hover:bg-primary/10 transition-colors"
                    >
                      <span className="font-medium text-foreground">{course}</span>
                    </div>
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

export default EducationSection;