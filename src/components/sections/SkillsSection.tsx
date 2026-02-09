import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Backend & APIs",
    skills: ["Python", "FastAPI", "REST APIs", "PostgreSQL"],
  },
  {
    title: "GenAI & AI Systems",
    skills: ["Retrieval-Augmented Generation (RAG)", "LangChain", "LangGraph", "CrewAI", "Prompt Engineering"],
  },
  {
    title: "Model Training & Ops",
    skills: ["Unsloth", "LoRA / QLoRA", "Hugging Face", "LLMOps", "MLflow"],
  },
  {
    title: "Voice & Multimodal AI",
    skills: ["Azure OpenAI", "Realtime Voice APIs", "TTS / STT", "OCR-based RAG"],
  },
  {
    title: "Frontend & Tools",
    skills: ["React", "Next.js", "Tailwind CSS", "Git", "LangSmith", "Vector Databases (FAISS, Pinecone)"],
  },
];

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="heading-section">Technical Skills</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-4 sm:p-6 rounded-xl border border-border card-hover"
            >
              <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4 font-sans">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
