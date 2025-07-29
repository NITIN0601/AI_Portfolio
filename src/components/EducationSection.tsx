import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const education = [
  {
    degree: "Master of Science in Artificial Intelligence",
    specialization: "Machine Learning",
    institution: "University of North Texas",
    location: "Denton, TX, USA",
    period: "Aug:2021 – May:2023",
    type: "Graduate",
    description: "Advanced coursework in machine learning algorithms, deep learning, neural networks, and AI systems design.",
    highlights: [
      "Thesis: Distributed Machine Learning Systems for Large-Scale Data Processing",
      "Graduate Teaching Assistant for ML/AI courses",
      "Research in neural network optimization and distributed computing",
      "Published research on scalable machine learning architectures"
    ],
    coursework: [
      "Machine Learning",
      "Deep Learning", 
      "Feature Engineering",
      "Fundamentals of Artificial Intelligence",
      "Natural Language Processing",
      "Big Data, Data Science",
      "Software Development for AI",
      "Data Visualization",
      "Software Engineering",
      "Empirical Analysis",
      "AI for Wearables",

    ],
    gpa: "3.92/4.0",
    cgpa: "9.8/10"
  },
  {
    degree: "Bachelor of Engineering in Computer Science and Engineering",
    specialization: "Computer Science and Engineering",
    institution: "RMD Engineering College",
    location: "Chennai, TN, India",
    period: "July:2014 – May:2018",
    type: "Undergraduate",
    description: "Comprehensive foundation in computer science principles, software engineering, and programming fundamentals.",
    highlights: [
      "Graduated Magna Cum Laude with First Class Honors",
      "Led student tech club and organized coding competitions",
      "Completed capstone project on machine learning applications",
      "Internship at tech startup developing web applications"
    ],
    coursework: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Software Engineering",
      "Operating Systems",
      "Computer Networks",
      "Web Technologies",
      "Object-Oriented Programming",
      "Mathematics for Computing",

      "Programming and Data Structures I & II",
      "Design and Analysis of Algorithms",
      "Database Management Systems",
      "Distributed Systems",
      "Software Engineering",
      "Information Retrieval",
      "Internet Programming",
      "Compiler Design",
      "Theory of Computation"
    ],
    gpa: "3.06/4.0",
    cgpa: "7.65/10"
  }
];

const achievements = [
  {
    title: "Dean's List",
    description: "Multiple semesters recognition for academic excellence",
    icon: Award
  },
  {
    title: "Research Publication",
    description: "Peer-reviewed paper on distributed ML systems",
    icon: Award
  },
  {
    title: "Teaching Excellence",
    description: "Outstanding TA award for student mentorship",
    icon: Award
  }
];

const EducationSection = () => {
  return (
    <section className="py-20 bg-background" id="education">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent"> 
            Education & Academic Background
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Strong academic foundation in AI/ML with advanced research experience and teaching credentials
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {/* Education Timeline */}
          <div className="space-y-12 mb-16">
            {education.map((edu, index) => (
              <Card key={index} className="group hover:shadow-glow transition-all duration-500">
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-gradient-primary rounded-lg">
                          <GraduationCap className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <Badge variant={edu.type === "Graduate" ? "certification" : "professional"}>
                          {edu.type}
                        </Badge>
                      </div>
                      <CardTitle className="text-2xl text-foreground group-hover:text-primary transition-colors mb-2">
                        {edu.degree}
                      </CardTitle>
                      <CardDescription className="text-lg mb-2">
                        <strong>Specialization:</strong> {edu.specialization}
                      </CardDescription>
                      <CardDescription className="text-lg font-semibold text-primary mb-3">
                        {edu.institution}
                      </CardDescription>
                    </div>
                      <div className="flex flex-col lg:items-end gap-2 mt-2">
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span>{edu.location}</span>
                        </div>
                        <Badge variant="professional" className="w-fit">
                          GPA: {edu.gpa}
                        </Badge>
                        <Badge variant="professional" className="w-fit">
                          GPA: {edu.cgpa}
                        </Badge>
                      </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {edu.description}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {edu.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <div className="w-2 h-2 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Key Coursework:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
                        <ul className="space-y-1">
                          {edu.coursework.slice(0, Math.ceil(edu.coursework.length / 2)).map((course, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground px-2 py-1 rounded hover:bg-accent/50 transition-colors">
                              {course}
                            </li>
                          ))}
                        </ul>
                        <ul className="space-y-1">
                          {edu.coursework.slice(Math.ceil(edu.coursework.length / 2)).map((course, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground px-2 py-1 rounded hover:bg-accent/50 transition-colors">
                              {course}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Academic Achievements */}
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
              Academic Achievements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="group hover:shadow-glow transition-all duration-500 text-center">
                  <CardContent className="pt-6">
                    <div className="p-3 bg-gradient-primary rounded-lg w-fit mx-auto mb-4">
                      <achievement.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {achievement.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;