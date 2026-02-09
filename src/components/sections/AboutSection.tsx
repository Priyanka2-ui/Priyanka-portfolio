import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-section">About Me</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <blockquote className="text-body-large leading-relaxed">
              "I'm a GenAI Fullstack Engineer at GenAIKit Software Solution Private Limited.
              I work mainly on backend AI systems using FastAPI, focusing on retrieval-augmented
              generation, agent-based workflows, and voice-enabled AI applications. I enjoy
              building practical AI systems that are reliable, scalable, and easy to integrate."
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
