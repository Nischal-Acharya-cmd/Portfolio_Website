import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  CyberPython, CyberChart, CyberDatabase, CyberBolt,
  CyberTensor, CyberFlame, CyberGear, CyberPanda,
  CyberRobot, CyberDNA, CyberLineChart, CyberChat,
} from "./CyberIcons";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Python", Icon: CyberPython },
      // { name: "R", Icon: CyberChart },
      { name: "SQL", Icon: CyberDatabase },
      // { name: "JavaScript", Icon: CyberBolt },
    ],
  },
  {
    title: "Frameworks & Tools",
    skills: [
      { name: "TensorFlow", Icon: CyberTensor },
      { name: "PyTorch", Icon: CyberFlame },
      { name: "Scikit-learn", Icon: CyberGear },
      { name: "Pandas", Icon: CyberPanda },
    ],
  },
  {
    title: "Domains",
    skills: [
      { name: "Machine Learning", Icon: CyberRobot },
      { name: "Deep Learning", Icon: CyberDNA },
      { name: "Data Science", Icon: CyberLineChart },
      { name: "NLP", Icon: CyberChat },
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 section-header">Skills</h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-primary to-secondary rounded" />
        </motion.div>

        <div className="space-y-14">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + ci * 0.15 }}
            >
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-5 font-mono-cyber">
                {"// "}{cat.title}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group flex items-center gap-3 p-4 rounded-md glass-card data-panel transition-all hover:plasma-glow cursor-default"
                  >
                    <skill.Icon className="w-7 h-7 shrink-0" />
                    <span className="text-xs font-medium font-mono-cyber text-foreground tracking-wide">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
