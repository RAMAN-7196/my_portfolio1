import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle 
} from "@/components/ui/index";
import { 
  ExternalLink, 
  Github,
  ArrowRight,
  Layers,
  Globe
} from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  const projects = [
    {
      id: 1,
      title: "Airbnb Clone",
      description: "A full-stack Airbnb clone built with the MERN stack, featuring property listings, bookings, user authentication, and real-time messaging.",
      image: "/airbnb.jpg",
      tags: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
      demoUrl: "https://airbnb-clone.example.com",
      githubUrl: "https://github.com/RAMAN-7196/airbnb-clone",
      icon: Globe
    },
    {
      id: 2,
      title: "Zerodha Clone",
      description: "A responsive Zerodha trading platform clone with real-time market data, portfolio tracking, and order management system.",
      image: "/zerodha.jpg",
      tags: ["React", "TypeScript", "WebSocket", "Redux", "Chart.js"],
      demoUrl: "https://zerodha-clone.example.com",
      githubUrl: "https://github.com/RAMAN-7196/zerodha-clone",
      icon: Layers
    }
  ];

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex items-center justify-center">
            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/10">
              My Projects
            </Badge>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-center">Featured Work</h2>
          <p className="text-muted-foreground text-center">
            A selection of projects that showcase my technical skills and problem-solving abilities.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              variants={itemVariants}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="card-hover"
            >
              <Card className="h-full overflow-hidden border border-border/50 bg-card/50">
                <CardHeader className="p-0">
                  <AspectRatio ratio={16 / 9}>
                    <div className="relative w-full h-full">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <Badge className="bg-background/70 backdrop-blur-sm text-foreground border-0">
                          <project.icon className="mr-1 h-3 w-3" />
                          {project.title}
                        </Badge>
                      </div>
                    </div>
                  </AspectRatio>
                </CardHeader>
                <CardContent className="p-6 space-y-3">
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary" className="font-normal">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noreferrer">
                      <Github className="mr-1 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.demoUrl} target="_blank" rel="noreferrer">
                      <ExternalLink className="mr-1 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="rounded-full">
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
