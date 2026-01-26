import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Layout } from "@/components/layout/Layout";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "custom",
    title: "Custom Business Websites",
    description: "A fully custom website designed around your brand and business goals. No templates, no compromises.",
    features: [
      "Custom design tailored to your brand",
      "Responsive on all devices",
      "SEO-optimized structure",
      "Content management system",
      "Analytics integration",
      "Fast loading performance",
    ],
    timeline: "2-4 weeks",
    startingPrice: "From $3,500",
  },
  {
    id: "landing",
    title: "Landing Pages",
    description: "High-converting landing pages designed to capture leads and drive specific actions. Perfect for campaigns.",
    features: [
      "Conversion-focused design",
      "A/B testing ready",
      "Form integration",
      "Analytics & tracking",
      "Mobile optimization",
      "Fast 1-week turnaround",
    ],
    timeline: "1 week",
    startingPrice: "From $1,500",
  },
  {
    id: "redesign",
    title: "Website Redesign",
    description: "Transform your outdated website into a modern, fast, and effective business tool.",
    features: [
      "Complete visual overhaul",
      "Improved user experience",
      "Performance optimization",
      "Content migration",
      "SEO preservation & improvement",
      "Mobile-first approach",
    ],
    timeline: "2-3 weeks",
    startingPrice: "From $2,500",
  },
  {
    id: "seo",
    title: "SEO & Performance",
    description: "Optimize your existing website for search engines and speed. Get found and keep visitors engaged.",
    features: [
      "Technical SEO audit",
      "Page speed optimization",
      "Core Web Vitals improvement",
      "Schema markup",
      "Image optimization",
      "Monthly reporting",
    ],
    timeline: "Ongoing",
    startingPrice: "From $500/mo",
  },
];

const addons = [
  { name: "Maintenance Plan", price: "$150/mo" },
  { name: "Content Writing", price: "$200/page" },
  { name: "Photography", price: "Custom quote" },
  { name: "Logo Design", price: "From $500" },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      id={service.id}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="scroll-mt-32"
    >
      <div className="p-8 md:p-10 rounded-2xl bg-card border border-border">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
          <div className="flex-1">
            <h2 className="text-title mb-4">{service.title}</h2>
            <p className="text-body-lg mb-8">{service.description}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-64 flex-shrink-0">
            <div className="p-6 rounded-xl bg-muted/50 text-center">
              <p className="text-sm text-muted-foreground mb-2">Starting at</p>
              <p className="text-2xl font-display font-bold text-primary mb-4">{service.startingPrice}</p>
              <p className="text-sm text-muted-foreground mb-6">Timeline: {service.timeline}</p>
              <Button variant="hero" className="w-full" asChild>
                <Link to="/contact">Get Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesPage() {
  const addonsRef = useRef(null);
  const addonsInView = useInView(addonsRef, { once: true, margin: "-100px" });

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
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h1 className="text-headline mt-4 mb-6">
              Web Solutions That Drive Results
            </h1>
            <p className="text-body-lg">
              From custom websites to performance optimization, we offer everything you need to succeed online.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="pb-20">
        <div className="container-custom space-y-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </section>

      {/* Add-ons */}
      <section ref={addonsRef} className="section-spacing bg-card">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={addonsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Add-ons</span>
            <h2 className="text-title mt-4">Additional Services</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={addonsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            {addons.map((addon) => (
              <div key={addon.name} className="p-6 rounded-xl bg-background border border-border text-center">
                <p className="font-semibold mb-2">{addon.name}</p>
                <p className="text-primary font-display font-bold">{addon.price}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={addonsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Discuss Your Project
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
