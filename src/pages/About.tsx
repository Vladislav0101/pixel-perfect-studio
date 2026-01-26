import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Layout } from "@/components/layout/Layout";
import { Heart, Zap, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Heart,
    title: "Craft Over Volume",
    description: "We take on fewer projects to deliver exceptional quality. Every client gets our full attention.",
  },
  {
    icon: Zap,
    title: "Speed Without Shortcuts",
    description: "Fast turnaround times without compromising on code quality or design standards.",
  },
  {
    icon: Shield,
    title: "Transparent Process",
    description: "No surprises. Clear communication, fixed pricing, and regular progress updates.",
  },
  {
    icon: Users,
    title: "Partnership Mindset",
    description: "We're not just vendors—we're invested in your success and available when you need us.",
  },
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "2 Weeks", label: "Average Delivery" },
  { value: "5 Years", label: "In Business" },
];

export default function About() {
  const valuesRef = useRef(null);
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h1 className="text-headline mt-4 mb-6">
              Small Team. Big Impact.
            </h1>
            <p className="text-body-lg">
              We're a focused web development studio that helps businesses build effective online presences. 
              No bloated agencies, no endless meetings—just skilled people doing great work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="pb-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-2xl bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-display font-bold text-5xl">N</span>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-8 right-8 w-20 h-20 border-2 border-primary/20 rounded-xl" />
                <div className="absolute bottom-12 left-12 w-16 h-16 border-2 border-primary/30 rounded-full" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-title mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Nexus started with a simple observation: most small businesses were getting terrible websites. 
                  Either expensive agency work that took months, or cheap templates that looked like everyone else's.
                </p>
                <p>
                  We believed there was a better way. A small team of experienced developers and designers 
                  who could deliver premium quality at reasonable prices, without the overhead.
                </p>
                <p>
                  Today, we work with businesses across industries—from local coffee shops to tech startups. 
                  Our approach hasn't changed: listen carefully, work efficiently, and deliver websites that 
                  actually help businesses grow.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section ref={valuesRef} className="section-spacing bg-card">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Values</span>
            <h2 className="text-title mt-4">How We Work</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-background border border-border text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display font-bold mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section ref={statsRef} className="section-spacing">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={statsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-card">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-title mb-6">
              Let's Build Something Great
            </h2>
            <p className="text-body-lg mb-8">
              Ready to work with a team that genuinely cares about your success? Let's talk.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
