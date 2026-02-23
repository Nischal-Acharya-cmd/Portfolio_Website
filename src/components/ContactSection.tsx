import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Linkedin, Twitter, X } from "lucide-react";

const socials = [
  { icon: Mail, href: "acharyanischal167@gmail.com", label: "Email" },
  { icon: Github, href: "https://github.com/Nischal-Acharya-cmd", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/nischal-acharya05/", label: "LinkedIn" },
  { icon: X, href: "https://twitter.com", label: "X / Twitter" },
];

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-28 px-6 relative">
      <div className="container mx-auto max-w-3xl text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 section-header">Get in Touch</h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-primary to-secondary rounded mb-6 mx-auto" />
          <p className="text-muted-foreground text-sm mb-10 font-mono-cyber tracking-wide">
            {"// "} Let&apos;s build something intelligent together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center justify-center gap-5"
        >
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="p-3 rounded-md glass-card data-panel text-muted-foreground transition-all hover:text-primary hover:plasma-glow"
            >
              <s.icon size={20} strokeWidth={1.5} />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
