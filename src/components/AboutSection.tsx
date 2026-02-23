import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";

const waitText = '"""wait    wait    wait..."""';

const bioContent = `"""
I'm a Computer Science student passionate about unraveling the power of data and building intelligent systems.

My journey began with a curiosity for how machines learn and has since evolved into a deep fascination with neural networks, NLP, and predictive analytics.

When I'm not training models or wrangling datasets, you'll find me contributing to open-source AI projects, writing about emerging trends in ML, or exploring the ethical dimensions of AI.
"""`;

type Phase = "typing-wait" | "pause" | "deleting" | "typing-bio" | "done";

function useTypewriter(trigger: boolean) {
  const [displayText, setDisplayText] = useState("");
  const [phase, setPhase] = useState<Phase>("typing-wait");
  const [showCursor, setShowCursor] = useState(true);

  // Blinking cursor
  useEffect(() => {
    const id = setInterval(() => setShowCursor((v) => !v), 530);
    return () => clearInterval(id);
  }, []);

  const run = useCallback(() => {
    let cancelled = false;

    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

    const typeText = async (text: string, speed: number, setter: (t: string) => void) => {
      for (let i = 0; i <= text.length; i++) {
        if (cancelled) return;
        setter(text.slice(0, i));
        await sleep(speed);
      }
    };

    const deleteText = async (text: string, speed: number, setter: (t: string) => void) => {
      for (let i = text.length; i >= 0; i--) {
        if (cancelled) return;
        setter(text.slice(0, i));
        await sleep(speed);
      }
    };

    (async () => {
      // Phase 1: Type "wait wait wait..."
      setPhase("typing-wait");
      await typeText(waitText, 60, setDisplayText);
      if (cancelled) return;

      // Phase 2: Pause
      setPhase("pause");
      await sleep(2000);
      if (cancelled) return;

      // Phase 3: Delete
      setPhase("deleting");
      await deleteText(waitText, 50, setDisplayText);
      if (cancelled) return;

      // Phase 4: Type bio
      setPhase("typing-bio");
      await typeText(bioContent, 65, setDisplayText);
      if (cancelled) return;

      // Phase 5: Pause before restart
      await sleep(3000);
      if (cancelled) return;

      // Restart the loop
      run();
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (trigger) {
      return run();
    }
  }, [trigger, run]);

  return { displayText, showCursor, phase };
}

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { displayText, showCursor } = useTypewriter(inView);

  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 section-header">About Me</h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-primary to-secondary rounded" />
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Left: Typewriter text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex-1 min-w-0"
          >
            <div className="font-mono-cyber text-[1.05rem] md:text-[1.1rem] leading-[1.9] whitespace-pre-wrap typewriter-text">
              {displayText}
              <span
                className="inline-block w-[2px] h-[1.15em] ml-0.5 align-middle bg-primary"
                style={{ opacity: showCursor ? 1 : 0 }}
              />
            </div>
          </motion.div>

          {/* Right: Circular photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-shrink-0"
          >
            <div className="relative w-56 h-56 md:w-72 md:h-72">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-xl animate-pulse-glow" />
              {/* Border ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/40 shadow-[0_0_30px_hsl(var(--primary)/0.2),0_0_60px_hsl(var(--secondary)/0.1)]" />
              {/* Photo */}
              <img
                src="portfolio_img.png"
                alt="Profile photo"
                className="relative w-full h-full rounded-full object-cover z-10"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
