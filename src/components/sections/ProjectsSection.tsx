import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Real-Time Personal Voice Assistant",
    description:
      "A real-time voice-to-voice AI assistant that answers questions about professional experience and projects using Azure OpenAI Realtime APIs.",
    tech: ["FastAPI", "Azure OpenAI Realtime API"],
  },
  {
    title: "Agentic RAG Platform with Intelligent Routing",
    description:
      "An advanced RAG system with memory and intelligent routing across LLM responses, web search, PDF RAG, and OCR-based RAG.",
    tech: ["FastAPI", "LangGraph", "LangChain", "OCR", "Tavily"],
  },
  {
    title: "AI Coding & Website Generation Platform",
    description:
      "A prompt-based coding agent that generates executable code and complete Next.js websites with live previews.",
    tech: ["FastAPI", "Next.js", "Azure OpenAI", "E2B Sandbox"],
  },
  {
    title: "LLM & VLM Fine-tuning Pipelines",
    description:
      "Fine-tuned multiple LLMs and VLMs using Unsloth with LoRA/QLoRA and published models to Hugging Face.",
    tech: ["Unsloth", "Hugging Face", "LoRA", "QLoRA"],
  },
  {
    title: "Automated PPT Voice Narration System",
    description:
      "A system that generates slide-by-slide voice narration from PowerPoint files.",
    tech: ["FastAPI", "Azure OpenAI", "TTS"],
  },
];

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="heading-section">Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card p-6 lg:p-8 rounded-xl border border-border card-hover cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold font-sans pr-4">{project.title}</h3>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              <p className="text-body mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium px-2.5 py-1 bg-primary/10 text-foreground rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
