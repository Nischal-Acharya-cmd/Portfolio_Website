import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: "MODULE_01",
    title: "Sentiment Analyzer",
    description:
      "A real-time NLP pipeline that analyzes social media sentiment using transformer-based models with 94% accuracy.",
    tags: ["Python", "BERT", "FastAPI", "React"],
    link: "#",
    status: "SYSTEM_ACTIVE",
  },
  {
    id: "MODULE_02",
    title: "Neural Image Classifier",
    description:
      "Deep learning model for medical image classification, built with a custom CNN architecture and transfer learning.",
    tags: ["PyTorch", "OpenCV", "Flask"],
    link: "#",
    status: "DEPLOYED",
  },
  {
    id: "MODULE_03",
    title: "Predictive Analytics Dashboard",
    description:
      "Interactive dashboard for sales forecasting using ARIMA and Prophet models with real-time data visualization.",
    tags: ["Python", "Plotly", "Streamlit", "SQL"],
    link: "#",
    status: "SYSTEM_ACTIVE",
  },
  {
    id: "MODULE_04",
    title: "AI Chatbot Engine",
    description:
      "Conversational AI engine using retrieval-augmented generation (RAG) for context-aware responses.",
    tags: ["LangChain", "OpenAI", "Pinecone"],
    link: "#",
    status: "IN_DEVELOPMENT",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-28 px-6 relative">
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 section-header">Projects</h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-primary to-secondary rounded" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <motion.a
              key={project.id}
              href={project.link}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              whileHover={{ rotateX: -1.5, rotateY: 2, scale: 1.01 }}
              style={{ transformPerspective: 900 }}
              className="group block p-5 rounded-md glass-card data-panel transition-all hover:plasma-glow focus-within:plasma-glow relative"
            >
              {/* Technical label */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono-cyber text-[9px] uppercase tracking-[0.2em] text-muted-foreground/60">
                  {project.id} — {project.status}
                </span>
                <ExternalLink size={13} className="text-muted-foreground/40 group-hover:text-primary transition-colors" />
              </div>

              <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                {project.title}
              </h3>
              <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono-cyber text-[9px] uppercase tracking-[0.15em] px-2 py-0.5 rounded-sm bg-muted/60 text-muted-foreground transition-all group-hover:text-primary group-hover:bg-primary/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
