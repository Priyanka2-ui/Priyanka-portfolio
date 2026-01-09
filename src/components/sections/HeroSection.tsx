import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center pt-20">
      <div className="section-container">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm md:text-base font-medium text-muted-foreground mb-4 tracking-wide uppercase"
          >
            GenAI Engineer
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="heading-display mb-6"
          >
            Priyanka Shilwant
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-4"
          >
            FastAPI · Agentic RAG · Voice AI
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-body-large max-w-2xl mb-10"
          >
            GenAI Engineer focused on building backend AI systems, agentic RAG pipelines, 
            and real-time voice applications.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <Button asChild size="lg" className="rounded-full px-8 gap-2 group">
              <a href="#projects">
                View Projects
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8">
              <a href="#contact">Contact Me</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
