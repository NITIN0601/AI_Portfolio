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
import { useState, useEffect } from "react";

const enterpriseProjects = [
  {
    id: 1,
    title: "UN Climate Data Analytics Platform",
    description: "Large-scale climate data processing and prediction system using advanced ML models to analyze global climate patterns and trends.",
    technologies: ["Python", "TensorFlow", "Apache Spark", "Azure ML", "Docker"],
    status: "In Production",
    organization: "United Nations",
    year: "2024",
    github: "https://github.com/placeholder/un-climate-analytics",
    demo: "https://demo.placeholder.com/un-climate"
  },
  {
    id: 2,
    title: "Best Buy Customer Intelligence System",
    description: "Real-time customer behavior analysis and recommendation engine processing millions of transactions daily.",
    technologies: ["Spark", "Kafka", "MLflow", "Azure", "Redis"],
    status: "Deployed",
    organization: "Best Buy",
    year: "2023",
    github: "https://github.com/placeholder/bestbuy-intelligence",
    demo: "https://demo.placeholder.com/bestbuy-intelligence"
  },
  {
    id: 3,
    title: "NortonLifeLock Threat Detection AI",
    description: "Advanced cybersecurity threat detection system using deep learning to identify and prevent malicious activities.",
    technologies: ["PyTorch", "Elasticsearch", "Kubernetes", "AWS", "Grafana"],
    status: "Production",
    organization: "NortonLifeLock",
    year: "2020-2021",
    github: "https://github.com/placeholder/norton-threat-detection",
    demo: "https://demo.placeholder.com/norton-threat"
  }
];

const personalProjects = [
  {
    id: 1,
    title: "Multi-Modal AI Assistant",
    description: "Advanced AI assistant capable of processing text, voice, and visual inputs with natural language understanding.",
    technologies: ["OpenAI GPT", "Whisper", "CLIP", "FastAPI", "React"],
    status: "Development",
    github: "https://github.com/placeholder/multimodal-ai-assistant",
    demo: "https://demo.placeholder.com/multimodal-ai",
    year: "2024"
  },
  {
    id: 2,
    title: "Distributed ML Training Framework",
    description: "Custom framework for distributed machine learning training across multiple cloud providers with automatic scaling.",
    technologies: ["Ray", "Kubernetes", "PyTorch", "Terraform", "Prometheus"],
    status: "Open Source",
    github: "https://github.com/placeholder/distributed-ml-framework",
    demo: "https://demo.placeholder.com/distributed-ml",
    year: "2023"
  }
];

const ProjectsSection = () => {
  const [enterpriseCurrentSlide, setEnterpriseCurrentSlide] = useState(0);
  const [personalCurrentSlide, setPersonalCurrentSlide] = useState(0);
  const [enterpriseApi, setEnterpriseApi] = useState(null);
  const [personalApi, setPersonalApi] = useState(null);

  useEffect(() => {
    if (!enterpriseApi) return;

    const onSelect = () => {
      setEnterpriseCurrentSlide(enterpriseApi.selectedScrollSnap());
    };

    enterpriseApi.on("select", onSelect);
    return () => enterpriseApi.off("select", onSelect);
  }, [enterpriseApi]);

  useEffect(() => {
    if (!personalApi) return;

    const onSelect = () => {
      setPersonalCurrentSlide(personalApi.selectedScrollSnap());
    };

    personalApi.on("select", onSelect);
    return () => personalApi.off("select", onSelect);
  }, [personalApi]);

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
            <Card className="relative p-6 shadow-glow">
              <Carousel className="w-full max-w-5xl mx-auto" setApi={setEnterpriseApi}>
                <CarouselContent>
                  {enterpriseProjects.map((project) => (
                    <CarouselItem key={project.id} className="md:basis-[45%] lg:basis-[30%] px-2">
                      <Card className="h-full group hover:shadow-glow transition-all duration-300">
                        <CardHeader>
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <Badge variant="outline" className="mb-2">
                                {project.organization}
                              </Badge>
                              <Badge variant="outline" className="mb-2">
                                {project.year}
                              </Badge>
                            </div>
                            <div className="flex gap-2">
                              {project.github && (
                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                  <Github className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                                </a>
                              )}
                              {project.demo && (
                                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                                </a>
                              )}
                            </div>
                          </div>
                          <CardTitle className="text-xl font-bold mb-2">
                            {project.title}
                          </CardTitle>
                          <CardDescription className="mb-2">
                            {project.description}
                          </CardDescription>
                          <div className="flex flex-wrap gap-2 mb-2">
                            {project.technologies.map((tech, idx) => (
                              <Badge key={idx} variant="professional" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <div className="flex justify-center mt-4">
                            <Badge 
                              className="text-xs font-semibold px-3 py-1 bg-gradient-primary text-primary-foreground shadow-sm"
                            >
                              {project.status}
                            </Badge>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                  {/* Add Project Card for Enterprise */}
                  <CarouselItem className="md:basis-[45%] lg:basis-[30%] px-2">
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
              </Carousel>
              {/* Pagination Dots for Enterprise */}
              <div className="flex justify-center gap-2 mt-6">
                {[...Array(enterpriseProjects.length + 1)].map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === enterpriseCurrentSlide ? 'bg-primary' : 'bg-muted hover:bg-muted-foreground'
                    }`}
                    onClick={() => enterpriseApi?.scrollTo(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              <div className="pointer-events-none absolute left-0 top-0 h-full w-12 z-20" style={{background: 'linear-gradient(to right, var(--background) 70%, transparent)'}} />
              <div className="pointer-events-none absolute right-0 top-0 h-full w-12 z-20" style={{background: 'linear-gradient(to left, var(--background) 70%, transparent)'}} />
            </Card>
          </TabsContent>

          <TabsContent value="personal" className="space-y-8">
            <Card className="relative p-6 shadow-glow">
              <Carousel className="w-full max-w-5xl mx-auto" setApi={setPersonalApi}>
                <CarouselContent>
                  {personalProjects.map((project) => (
                    <CarouselItem key={project.id} className="md:basis-[45%] lg:basis-[30%] px-2">
                      <Card className="h-full group hover:shadow-glow transition-all duration-300">
                        <CardHeader>
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <Badge variant="outline" className="mb-2">
                                {project.year}
                              </Badge>
                            </div>
                            <div className="flex gap-2">
                              {project.github && (
                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                  <Github className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                                </a>
                              )}
                              {project.demo && (
                                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                                </a>
                              )}
                            </div>
                          </div>
                          <CardTitle className="text-xl font-bold mb-2">
                            {project.title}
                          </CardTitle>
                          <CardDescription className="mb-2">
                            {project.description}
                          </CardDescription>
                          <div className="flex flex-wrap gap-2 mb-2">
                            {project.technologies.map((tech, idx) => (
                              <Badge key={idx} variant="professional" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <div className="flex justify-center mt-4">
                            <Badge 
                              className="text-xs font-semibold px-3 py-1 bg-gradient-primary text-primary-foreground shadow-sm"
                            >
                              {project.status}
                            </Badge>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                  {/* Add Project Card for Personal */}
                  <CarouselItem className="md:basis-[45%] lg:basis-[30%] px-2">
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
              </Carousel>
              {/* Pagination Dots for Personal */}
              <div className="flex justify-center gap-2 mt-6">
                {[...Array(personalProjects.length + 1)].map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === personalCurrentSlide ? 'bg-primary' : 'bg-muted hover:bg-muted-foreground'
                    }`}
                    onClick={() => personalApi?.scrollTo(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              <div className="pointer-events-none absolute left-0 top-0 h-full w-12 z-20" style={{background: 'linear-gradient(to right, var(--background) 70%, transparent)'}} />
              <div className="pointer-events-none absolute right-0 top-0 h-full w-12 z-20" style={{background: 'linear-gradient(to left, var(--background) 70%, transparent)'}} />
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProjectsSection;