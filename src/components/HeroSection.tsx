import { motion } from "framer-motion";
import BrainScene from "./BrainScene";
import { useMouseParallax } from "@/hooks/useMouseParallax";

const HeroSection = () => {
  const mouse = useMouseParallax(0.01);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Brain background — responds to mouse */}
      <div
        className="absolute inset-0"
        style={{ transform: `translate(${mouse.x}px, ${mouse.y}px)` }}
      >
        <BrainScene />
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-mono-cyber text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4"
        >
          {"// NEURAL_INTERFACE_v2.0"}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-4 text-gradient"
        >
          Nischal Acharya
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-base md:text-lg text-muted-foreground mb-10"
        >
          Exploring the intersection of Data Science & Artificial Intelligence
        </motion.p>

        <motion.a
          href="#projects"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="inline-block px-8 py-3 rounded-md glass-card data-panel font-mono-cyber text-xs uppercase tracking-[0.15em] text-primary transition-all hover:plasma-glow hover:scale-105"
        >
          View Projects
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
