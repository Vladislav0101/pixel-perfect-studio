import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, Pencil, Code2, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Discovery Call",
    description: "We learn about your business, goals, and vision. No templates—everything starts with understanding your unique needs.",
  },
  {
    number: "02",
    icon: Pencil,
    title: "Design & Strategy",
    description: "We create wireframes and designs tailored to your brand. You review and provide feedback until it's perfect.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Development",
    description: "We build your website with clean, modern code. Fast loading, mobile-responsive, and SEO-ready from day one.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch & Support",
    description: "We deploy your site and provide training. Plus ongoing support to keep everything running smoothly.",
  },
];

export function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-spacing">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Process</span>
          <h2 className="text-headline mt-4">
            From Idea to Launch
          </h2>
          <p className="text-body-lg max-w-2xl mx-auto mt-4">
            A proven, transparent process that keeps you in control and delivers results.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-gradient-to-r from-primary/50 to-transparent" />
              )}
              
              <div className="text-center">
                <div className="relative inline-flex items-center justify-center mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-muted flex items-center justify-center relative z-10">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 text-5xl font-display font-bold text-muted/50">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
