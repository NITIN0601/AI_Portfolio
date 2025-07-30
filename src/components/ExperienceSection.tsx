import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Machine Learning/AI Engineer",
    company: "United Nations",
    location: "New York, NY, USA",
    locationType: "Hybrid",
    period: "Mar 2024 – Present",
    type: "Current Role",
    description: "Built and deployed enterprise AI solutions across multiple UN departments, including RAG chatbots that improved response accuracy by 38% and document processing systems that reduced manual workload by 65%. Led initiatives leveraging Azure OpenAI, Microsoft Copilot Studio, and LangChain to implement multi-agent systems, MLOps pipelines, and cross-agency AI governance frameworks.",
    highlights: [
      "Architected enterprise RAG chatbot for UN leadership using Microsoft Copilot Studio and Azure OpenAI, improving response accuracy by 38% over previous Bot Framework implementation",
      "Engineered multi-agent AI system with LangChain workflows and Azure AI Search integration, achieving 12% improvement in search accuracy and enabling automated document classification at 92% accuracy",
      "Led AI proof-of-concept initiative leveraging Databricks, HuggingFace, CrewAI, and LangChain to develop 3 GenAI document processing prototypes, reducing executive review time by 23%",
      "Designed multi-cloud ML inference pipeline using Azure Functions, Kubernetes, and MLflow orchestration, ensuring 99.2% uptime SLA for production AI workloads",
      "Implemented automated document classification system with Microsoft Graph API, categorizing content across four security tiers and cutting manual processing time by 65%",
      "Built comprehensive MLOps/AIOps monitoring platform using Azure Monitor, MLflow, and Grafana dashboards, reducing incident response time by 31% in production environments",
      "Led cross-agency RAG migration from AWS to Azure in DESA-Accenture collaboration, improving inference latency by 27%, reducing cloud costs by 54%, while maintaining SLA compliance",
      "Analyzed 33 enterprise AI use cases for AIOps integration, creating 8 reusable architecture templates and tiered intake workflows that accelerated approval cycles by 45%"
    ],
    "technologies": ["Python", "LangChain", "LangGraph", "CrewAI", "AutoGen","Azure AI Studio", "Microsoft Copilot Studio", "Azure OpenAI", "Azure Cognitive Search","Azure Cognitive Services", "Azure Functions", 
      "Azure ML", "Azure Monitor","Azure Kubernetes Service (AKS)", "Cosmos DB", "Redis Cache", "Microsoft Graph API","Microsoft Purview", "Application Registration", "Azure AD", "Microsoft Teams","MLflow", "Grafana", 
      "Databricks", "HuggingFace", "Ollama", "ChromaDB","GitHub Actions", "Docker", "Kubernetes", "Prometheus", "Scikit-learn","Pandas", "NumPy", "JSON", "Jupyter", "YAML", "Bash", "REST APIs", "OAuth 2.0"]
  },
  {
    title: "Data Scientist / AI Engineer",
    company: "Best Buy",
    location: "Minneapolis, MN, USA",
    locationType: "Remote",
    period: "Aug 2023 – Feb 2024",
    type: "Previous",
    description: "Led development of advanced data science and AI solutions to enhance customer experience and operational efficiency for one of the largest consumer electronics retailers",
    highlights: [
      "Built an ensemble forecasting system with XGBoost and Prophet that handled sparse data across 1,200+ stores, cutting forecast error (MAPE) by 28%",
      "Worked on a 15-person team to develop a recommendation engine using matrix factorization, including solutions for new users, which boosted click-through rates by 9% in A/B tests",
      "Rewrote our ETL pipeline to process data in real-time instead of batch jobs using AWS Lambda, fixing memory issues and dropping refresh time from 6 hours to 45 minutes",
      "Set up an MLOps platform using MLflow with containerized deployments, allowing us to push model updates without downtime and speed up releases by 35%",
      "Improved feature engineering workflows using PySpark with drift monitoring, boosting model accuracy by 12% and cutting training time by 40% across 6 models in production"
    ],
    technologies: ["Python", "PySpark", "scikit-learn", "XGBoost", "Prophet", "AWS Lambda", "S3", "EC2", "MLflow", "Docker", "PostgreSQL", "Power BI", "OCR (Tesseract)", "Transformer-based LLMs (GPT-4, BERT)"]
  },
  {
    title: "Graduate Teaching Assistant - ML/AI",
    company: "University of North Texas",
    location: "Denton, TX, USA",
    locationType: "Onsite",
    period: "Aug 2021 – May 2023",
    type: "Academic",
    description: "Teaching and research assistant for advanced machine learning and AI courses while pursuing MS in AI.",
    highlights: [
      "Designed LLM curriculum elucidating multi‑headed attention, transformers, and contrastive pre‑training, boosting conceptual exam scores by 85%.",
      "Leveraged game‑oriented teaching techniques to reinforce prompt engineering and mitigate hallucination risk, reducing unsafe prompting instances by 73%.",
      "Led the AWS Deep Racer program, applying ML techniques to enhance performance by 30% through competitive simulation training.",
      "Developed Jupyter‑based labs and assignments exploring GPT‑style model fine‑tuning, improving student project completion rate by 40%.",
      "Hosted weekly office hours and code clinics, providing tailored mentorship that lifted average student evaluations by 20%.",
      "Assisted faculty research investigating bias mitigation in transformer models, co‑authored a paper submitted to NeurIPS workshop."
    ],
    technologies: ["Python", "PyTorch", "Jupyter Notebooks", "Transformer-based LLMs", "AWS Deep Racer", "Prompt Engineering", "Research", "Academic Mentoring"]
  },
  {
    title: "Data Scientist",
    company: "NortonLifeLock",
    location: "Chennai, TN, India",
    locationType: "Hybrid",
    period: "Nov 2019 – Jul 2021",
    type: "Previous",
    description: "Developed machine learning models for cybersecurity threat detection and user behavior analysis.",
    highlights: [
      "Automated batch processing for product updates, targeted logic to notify users of critical patches and forced updates, improving update rates by 45%.",
      "Pioneered automation utilizing Python, ML and NLP that optimized data pipelines and CI/CD integration, reducing manual labor and errors by 78%.",
      "Developed and implemented automated Slack/Teams notifications for new builds posted in Akamai Server, reducing response time by 45%.",
      "Built anomaly‑detection models identifying unusual login and network activity, catching potential threats with 92% accuracy.",
      "Integrated streaming Kafka pipelines with Elasticsearch for real‑time behavior monitoring, decreasing alert latency by 50%.",
      "Optimized model lifecycle management through MLflow tracking and versioning, reducing deployment roll‑out time by 35%."
    ],
    technologies: ["Python", "Scikit‑learn", "NLP", "Apache Kafka", "Elasticsearch", "MLflow", "Docker", "CI/CD", "Security Analytics"]
  },
  {
    title: "Associate Data Scientist",
    company: "Symantec",
    location: "Chennai, TN, India",
    locationType: "Onsite",
    period: "Jul 2018 – Nov 2019",
    type: "Previous",
    description: "Entry‑level data scientist focusing on cybersecurity analytics and threat detection algorithms.",
    highlights: [
      "Automated ingestion of over 4 GB of diverse datasets including CSV, JSON, and Parquet by creating Hive data pipelines, improving efficiency by 60%.",
      "Developed automation test suite mapping feature requirements to B2B use cases for product releases, reducing manual scripting effort by 100 hours.",
      "Implemented OCR to scrape text data from client product info to identify product details and status, then updated dashboard to reflect latest user metrics, improving data accuracy by 35%.",
      "Constructed behavioral clustering pipelines to segment user activity, improving targeted threat analysis efficiency by 28%.",
      "Collaborated with cross‑functional teams to deploy Hadoop‑based ETL jobs and Hive views, accelerating data query performance by 40%.",
      "Migrated legacy scripts into automated Airflow DAGs, saving 120 hours/year in manual data orchestration."
    ],
    technologies: ["Python", "R", "SQL", "Hadoop", "Hive", "Airflow", "OCR", "Behavioral Clustering", "Cybersecurity Analytics"]
  }
];

const ExperienceSection = () => {
  return (
    <section className="py-20 bg-background" id="experience">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
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
