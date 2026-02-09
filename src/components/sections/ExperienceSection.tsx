import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "GenAI Fullstack Engineer",
    company: "GenAIKit Software Solution Private Limited",
    location: "Remote",
    period: "Jan 2025 – Present",
    highlights: [
      "Built GenAI APIs with FastAPI for agent workflows, RAG pipelines, sandboxed code execution, and multimodal features",
      "Developed Agentic RAG using LangGraph with routing across LLMs, web search, PDF/OCR RAG, query rewriting, and reranking",
      "Created a coding agent and prompt-to-Next.js generator using Azure OpenAI and E2B sandbox, plus fine-tuned LLM/VLM models with LoRA/QLoRA",
    ],
  },
  {
    title: "GenAI Engineer Intern",
    company: "GenAIKit Software Solution Private Limited",
    location: "Remote",
    period: "Jan 2024 – Dec 2024",
    highlights: [
      "Implemented backend FastAPI services and RAG pipelines for multimodal AI workflows",
      "Worked on LangGraph routing, web/PDF/OCR retrieval, and assisted in LLM/VLM fine-tuning using Hugging Face + Unsloth",
    ],
  },
];

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="heading-section">Experience</h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-8 sm:space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="flex gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-full flex items-center justify-center">
                  <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 gap-1 md:gap-0">
                    <h3 className="text-lg sm:text-xl font-semibold font-sans">{exp.title}</h3>
                    <span className="text-xs sm:text-sm text-muted-foreground flex-shrink-0">{exp.period}</span>
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
                    {exp.company} · {exp.location}
                  </p>
                  <ul className="space-y-2 sm:space-y-3">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex gap-2 sm:gap-3 text-body">
                        <span className="text-primary mt-1 sm:mt-1.5 flex-shrink-0">•</span>
                        <span className="flex-1">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
