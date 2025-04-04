import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDownIcon, GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";

const Home = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-20"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent dark:from-primary/10" />
      </div>

      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-2"
            >
              <h2 className="text-lg md:text-xl text-primary font-medium">
                Hello, I'm
              </h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold gradient-text">
                Raman Patra
              </h1>
              <p className="text-2xl md:text-3xl text-muted-foreground">
                Full Stack Developer | B.Tech Student
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-2xl"
            >
              I'm a Full-Stack Web Developer specializing in the MERN (MongoDB, Express.js, React, Node.js) stack. 
              I love building scalable, high-performance web applications and writing clean, maintainable code.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                size="lg" 
                onClick={scrollToAbout}
                className="rounded-full"
              >
                My Portfolio
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-full"
                asChild
              >
                <a href="#contact">Contact Me</a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex gap-4"
            >
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-foreground/80 hover:text-primary transition-colors">
                <GithubIcon size={24} />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="text-foreground/80 hover:text-primary transition-colors">
                <LinkedinIcon size={24} />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="text-foreground/80 hover:text-primary transition-colors">
                <TwitterIcon size={24} />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-primary/20 to-purple-500/20 flex items-center justify-center">
              <div className="absolute inset-2 rounded-full bg-background flex items-center justify-center overflow-hidden">
                <img 
                  src="/profile-pic.jpg" 
                  alt="Raman Patra"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 hidden md:block"
        >
          <Button 
            variant="ghost" 
            size="icon" 
            className="animate-bounce rounded-full" 
            onClick={scrollToAbout}
          >
            <ArrowDownIcon className="h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
