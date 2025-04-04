import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CodeIcon, 
  Palette,
  Settings
} from "lucide-react";

const Skills = () => {
  const skills = [
    {
      title: "Full Stack Development",
      icon: CodeIcon,
      color: "text-blue-500",
      description: "Building scalable web applications with modern technologies including MERN stack (MongoDB, Express.js, React, Node.js).",
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "TypeScript", "Next.js"]
    },
    {
      title: "UI/UX Design",
      icon: Palette,
      color: "text-purple-500",
      description: "Creating intuitive and visually appealing user interfaces with a focus on user experience and modern design principles.",
      technologies: ["Figma", "Responsive Design", "User Research", "Wireframing", "Prototyping", "Design Systems"]
    },
    {
      title: "DevOps",
      icon: Settings,
      color: "text-green-500",
      description: "Implementing CI/CD pipelines and managing cloud infrastructure to ensure smooth deployment and scalability.",
      technologies: ["Docker", "Git", "AWS", "CI/CD", "Kubernetes", "Infrastructure as Code"]
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
    hidden: { 
      opacity: 0,
      y: 20
    },
    show: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="outline" className="text-primary border-primary/20 bg-primary/10">
            My Skills
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold font-heading">Technical Expertise</h2>
          <p className="text-muted-foreground">
            I specialize in full-stack development, UI/UX design, and DevOps, focusing on creating efficient and user-friendly solutions.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div key={index} variants={itemVariants} className="card-hover">
              <Card className="h-full border border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${skill.color} bg-accent`}>
                      <skill.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-medium">{skill.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{skill.description}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {skill.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="font-normal">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
