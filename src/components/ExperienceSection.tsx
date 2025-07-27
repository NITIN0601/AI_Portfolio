import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Machine Learning/AI Engineer",
    company: "United Nations",
    location: "Global",
    period: "Mar 2024–Present",
    type: "Current Role",
    description: "Leading AI initiatives and machine learning solutions for global humanitarian and development programs.",
    highlights: [
      "Developing AI-powered analytics for sustainable development goals",
      "Implementing ML models for predictive analysis in humanitarian crises",
      "Collaborating with international teams on data-driven policy recommendations"
    ],
    technologies: ["Python", "TensorFlow", "Azure ML", "Docker", "Kubernetes"]
  },
  {
    title: "Data Scientist / AI Engineer",
    company: "Best Buy",
    location: "Minneapolis, MN",
    period: "Aug 2023–Feb 2024",
    type: "Previous",
    description: "Built recommendation systems and customer analytics platforms for one of the largest consumer electronics retailers.",
    highlights: [
      "Developed personalized recommendation engines improving conversion by 15%",
      "Implemented real-time customer behavior analysis systems",
      "Optimized supply chain forecasting models using advanced ML techniques"
    ],
    technologies: ["Python", "Spark", "AWS", "MLflow", "PostgreSQL"]
  },
  {
    title: "Graduate Teaching Assistant - ML/AI",
    company: "University of North Texas",
    location: "Denton, TX",
    period: "Aug 2021–May 2023",
    type: "Academic",
    description: "Teaching and research assistant for advanced machine learning and AI courses while pursuing MS in AI.",
    highlights: [
      "Mentored 100+ students in machine learning fundamentals and advanced topics",
      "Conducted research in deep learning and neural network optimization",
      "Published research on distributed machine learning systems"
    ],
    technologies: ["Python", "PyTorch", "Research", "Academia", "Mentoring"]
  },
  {
    title: "Data Scientist",
    company: "NortonLifeLock",
    location: "Tempe, AZ",
    period: "Nov 2019–Jul 2021",
    type: "Previous",
    description: "Developed machine learning models for cybersecurity threat detection and user behavior analysis.",
    highlights: [
      "Built ML models detecting malware with 98% accuracy",
      "Implemented real-time threat intelligence systems",
      "Reduced false positive rates by 30% through advanced feature engineering"
    ],
    technologies: ["Python", "Scikit-learn", "Apache Kafka", "Elasticsearch", "Security"]
  },
  {
    title: "Associate Data Scientist",
    company: "Symantec",
    location: "Mountain View, CA",
    period: "Jul 2018–Nov 2019",
    type: "Previous",
    description: "Entry-level data scientist focusing on cybersecurity analytics and threat detection algorithms.",
    highlights: [
      "Developed anomaly detection systems for enterprise security",
      "Analyzed large-scale security datasets for pattern recognition",
      "Contributed to next-generation endpoint protection algorithms"
    ],
    technologies: ["Python", "R", "SQL", "Hadoop", "Cybersecurity"]
  }
];

const ExperienceSection = () => {
  return (
    <section className="py-20 bg-background" id="experience">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            5+ years building production ML systems across cybersecurity, retail, academia, and international development
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="group hover:shadow-glow transition-all duration-500">
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl text-foreground group-hover:text-primary transition-colors">
                        {exp.title}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-2 text-lg mt-2">
                        <Building className="w-5 h-5 text-primary" />
                        {exp.company}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col lg:items-end gap-2">
                      <Badge 
                        variant={exp.type === "Current Role" ? "certification" : "professional"}
                        className="w-fit"
                      >
                        {exp.type}
                      </Badge>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="professional" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;