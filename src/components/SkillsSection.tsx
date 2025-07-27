import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Code, Database, Cloud, Shield, TrendingUp } from "lucide-react";

const skillCategories = [
  {
    title: "Machine Learning & AI",
    icon: Brain,
    skills: [
      "Deep Learning (TensorFlow, PyTorch)",
      "Computer Vision & NLP",
      "Reinforcement Learning",
      "MLOps & Model Deployment",
      "Feature Engineering",
      "Hyperparameter Optimization",
      "Transfer Learning",
      "Ensemble Methods"
    ],
    level: "Expert"
  },
  {
    title: "Programming & Development",
    icon: Code,
    skills: [
      "Python (Advanced)",
      "R (Proficient)",
      "SQL (Advanced)",
      "JavaScript/TypeScript",
      "C++ (Intermediate)",
      "Git & Version Control",
      "Docker & Containerization",
      "Kubernetes"
    ],
    level: "Expert"
  },
  {
    title: "Data Engineering & Storage",
    icon: Database,
    skills: [
      "Apache Spark",
      "Apache Kafka",
      "Hadoop Ecosystem",
      "PostgreSQL, MongoDB",
      "Data Pipeline Design",
      "ETL/ELT Processes",
      "Data Warehousing",
      "Real-time Processing"
    ],
    level: "Advanced"
  },
  {
    title: "Cloud Platforms & Tools",
    icon: Cloud,
    skills: [
      "Microsoft Azure (Certified)",
      "AWS Services",
      "Azure ML Studio",
      "MLflow & Experiment Tracking",
      "CI/CD Pipelines",
      "Infrastructure as Code",
      "Serverless Computing",
      "Auto-scaling Solutions"
    ],
    level: "Advanced"
  },
  {
    title: "Cybersecurity & Analytics",
    icon: Shield,
    skills: [
      "Threat Detection Algorithms",
      "Anomaly Detection",
      "Security Data Analysis",
      "Malware Classification",
      "Behavioral Analytics",
      "Risk Assessment Models",
      "Compliance Monitoring",
      "Incident Response Analytics"
    ],
    level: "Advanced"
  },
  {
    title: "Business & Analytics",
    icon: TrendingUp,
    skills: [
      "Recommendation Systems",
      "Customer Analytics",
      "A/B Testing & Experimentation",
      "Statistical Analysis",
      "Predictive Modeling",
      "Business Intelligence",
      "KPI Development",
      "Stakeholder Communication"
    ],
    level: "Advanced"
  }
];

const certifications = [
  {
    name: "Microsoft Certified: Azure AI Engineer",
    code: "AI-102",
    issuer: "Microsoft",
    description: "Designing and implementing AI solutions using Azure Cognitive Services"
  },
  {
    name: "Microsoft Certified: Azure Data Scientist",
    code: "DP-100",
    issuer: "Microsoft", 
    description: "Implementing and running machine learning workloads on Azure"
  },
  {
    name: "Microsoft Certified: Azure Fundamentals",
    code: "AZ-900",
    issuer: "Microsoft",
    description: "Foundational knowledge of cloud services and Azure fundamentals"
  }
];

const SkillsSection = () => {
  return (
    <section className="py-20 bg-secondary/30" id="skills">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Technical Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive skill set spanning machine learning, cloud platforms, and enterprise-scale system design
          </p>
        </div>
        
        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
          {skillCategories.map((category, index) => (
            <Card key={index} className="group hover:shadow-glow transition-all duration-500 h-full">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-gradient-primary rounded-lg">
                    <category.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {category.title}
                    </CardTitle>
                    <Badge variant="professional" className="mt-1">
                      {category.level}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="grid grid-cols-1 gap-2">
                  {category.skills.map((skill, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center gap-2 p-2 rounded hover:bg-accent/50 transition-colors"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Certifications */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-foreground mb-8">
            Professional Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="group hover:shadow-glow transition-all duration-500">
                <CardHeader className="text-center">
                  <Badge variant="certification" className="mx-auto mb-2 w-fit">
                    {cert.code}
                  </Badge>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {cert.name}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground font-medium">
                    {cert.issuer}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">
                    {cert.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;