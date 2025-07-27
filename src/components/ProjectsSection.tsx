import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Github, Plus } from "lucide-react";

const enterpriseProjects = [
  {
    id: 1,
    title: "UN Climate Data Analytics Platform",
    description: "Large-scale climate data processing and prediction system using advanced ML models to analyze global climate patterns and trends.",
    technologies: ["Python", "TensorFlow", "Apache Spark", "Azure ML", "Docker"],
    status: "In Production",
    organization: "United Nations",
    year: "2024"
  },
  {
    id: 2,
    title: "Best Buy Customer Intelligence System",
    description: "Real-time customer behavior analysis and recommendation engine processing millions of transactions daily.",
    technologies: ["Spark", "Kafka", "MLflow", "Azure", "Redis"],
    status: "Deployed",
    organization: "Best Buy",
    year: "2023"
  },
  {
    id: 3,
    title: "NortonLifeLock Threat Detection AI",
    description: "Advanced cybersecurity threat detection system using deep learning to identify and prevent malicious activities.",
    technologies: ["PyTorch", "Elasticsearch", "Kubernetes", "AWS", "Grafana"],
    status: "Production",
    organization: "NortonLifeLock",
    year: "2020-2021"
  }
];

const personalProjects = [
  {
    id: 1,
    title: "Multi-Modal AI Assistant",
    description: "Advanced AI assistant capable of processing text, voice, and visual inputs with natural language understanding.",
    technologies: ["OpenAI GPT", "Whisper", "CLIP", "FastAPI", "React"],
    status: "Development",
    github: "https://github.com/placeholder",
    demo: "https://demo.placeholder.com",
    year: "2024"
  },
  {
    id: 2,
    title: "Distributed ML Training Framework",
    description: "Custom framework for distributed machine learning training across multiple cloud providers with automatic scaling.",
    technologies: ["Ray", "Kubernetes", "PyTorch", "Terraform", "Prometheus"],
    status: "Open Source",
    github: "https://github.com/placeholder",
    year: "2023"
  }
];

const ProjectsSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore my portfolio of enterprise-scale AI/ML solutions and innovative personal projects
            that demonstrate expertise in cutting-edge technologies.
          </p>
        </div>

        <Tabs defaultValue="enterprise" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="enterprise" className="text-sm font-medium">
              Enterprise Projects
            </TabsTrigger>
            <TabsTrigger value="personal" className="text-sm font-medium">
              Personal Projects
            </TabsTrigger>
          </TabsList>

          <TabsContent value="enterprise" className="space-y-8">
            <Carousel className="w-full max-w-6xl mx-auto">
              <CarouselContent>
                {enterpriseProjects.map((project) => (
                  <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/3">
                    <Card className="h-full group hover:shadow-glow transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <Badge variant="outline" className="mb-2">
                            {project.organization}
                          </Badge>
                          <span className="text-sm text-muted-foreground">{project.year}</span>
                        </div>
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="line-clamp-3">
                          {project.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 4).map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                          {project.technologies.length > 4 && (
                            <Badge variant="secondary" className="text-xs">
                              +{project.technologies.length - 4} more
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center justify-between">
                          <Badge 
                            variant={project.status === "In Production" || project.status === "Production" ? "default" : "secondary"}
                            className="text-xs"
                          >
                            {project.status}
                          </Badge>
                          <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                            View Details
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full border-dashed border-2 flex items-center justify-center min-h-[300px] group hover:border-primary transition-colors">
                    <div className="text-center space-y-4">
                      <Plus className="w-12 h-12 mx-auto text-muted-foreground group-hover:text-primary transition-colors" />
                      <div>
                        <h3 className="font-semibold mb-2">Add Enterprise Project</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Showcase your latest enterprise work
                        </p>
                        <Button variant="outline" size="sm">
                          Add Project
                        </Button>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </TabsContent>

          <TabsContent value="personal" className="space-y-8">
            <Carousel className="w-full max-w-6xl mx-auto">
              <CarouselContent>
                {personalProjects.map((project) => (
                  <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/3">
                    <Card className="h-full group hover:shadow-glow transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <Badge variant="outline" className="mb-2">
                            Personal
                          </Badge>
                          <span className="text-sm text-muted-foreground">{project.year}</span>
                        </div>
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="line-clamp-3">
                          {project.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 4).map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                          {project.technologies.length > 4 && (
                            <Badge variant="secondary" className="text-xs">
                              +{project.technologies.length - 4} more
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center justify-between">
                          <Badge 
                            variant={project.status === "Open Source" ? "default" : "secondary"}
                            className="text-xs"
                          >
                            {project.status}
                          </Badge>
                          <div className="flex gap-2">
                            {project.github && (
                              <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                                <Github className="w-4 h-4" />
                              </Button>
                            )}
                            {project.demo && (
                              <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                                <ExternalLink className="w-4 h-4" />
                              </Button>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full border-dashed border-2 flex items-center justify-center min-h-[300px] group hover:border-primary transition-colors">
                    <div className="text-center space-y-4">
                      <Plus className="w-12 h-12 mx-auto text-muted-foreground group-hover:text-primary transition-colors" />
                      <div>
                        <h3 className="font-semibold mb-2">Add Personal Project</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Share your innovative side projects
                        </p>
                        <Button variant="outline" size="sm">
                          Add Project
                        </Button>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProjectsSection;