import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileIcon } from "lucide-react";

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          {/* Image Column */}
          <motion.div 
            variants={fadeIn} 
            className="lg:col-span-5 flex justify-center lg:justify-start"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-border">
              <div className="absolute inset-0">
                <img 
                  src="/aboutimage.jpg" 
                  alt="About Raman Patra"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background/90 to-transparent" />
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div 
            variants={fadeIn}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-2">
              <Badge variant="outline" className="text-primary border-primary/20 bg-primary/10">About Me</Badge>
              <h2 className="text-3xl md:text-4xl font-heading font-bold">Crafting digital experiences with passion and precision</h2>
            </div>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a passionate full-stack developer with 5+ years of experience building robust web and mobile applications. My journey in technology started with a fascination for solving complex problems and has evolved into creating elegant, user-centered digital experiences.
              </p>
              <p>
                With expertise spanning frontend frameworks like React, backend technologies including Node.js, and cloud platforms such as AWS, I bring a holistic approach to every project. My focus is always on writing clean, maintainable code that delivers exceptional user experiences.
              </p>
              <p>
                Beyond coding, I'm an advocate for accessibility and inclusive design. I believe technology should empower everyone, and I strive to implement these principles in every project I undertake.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap gap-3">
              <Button size="lg" className="rounded-full">View Resume <FileIcon className="ml-2 h-4 w-4" /></Button>
              <Button size="lg" variant="outline" className="rounded-full" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
