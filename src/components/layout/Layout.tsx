import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import Home from "@/sections/Home";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";
import ScrollToTop from "./ScrollToTop";

const Layout = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      
      // Show/hide scroll button
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
      
      // Active section detection
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 300) {
          current = section.getAttribute("id") || "";
        }
      });
      
      if (current !== "") {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar activeSection={activeSection} />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </motion.div>
        </AnimatePresence>
      </main>
      <ScrollToTop show={showScrollButton} />
      <footer className="py-6 border-t">
        <div className="container mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Raman Patra. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
