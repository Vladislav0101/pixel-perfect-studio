import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Palette, Zap, Search, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Code,
    title: "Custom Business Websites",
    description: "Tailored websites that reflect your brand and drive business goals. Built with modern technology for speed and reliability.",
    link: "/services#custom",
  },
  {
    icon: Palette,
    title: "Landing Pages",
    description: "High-converting landing pages designed to turn visitors into leads. Perfect for campaigns and product launches.",
    link: "/services#landing",
  },
  {
    icon: Zap,
    title: "Website Redesign",
    description: "Transform your outdated website into a modern, fast, and user-friendly experience that keeps visitors engaged.",
    link: "/services#redesign",
  },
  {
    icon: Search,
    title: "SEO & Performance",
    description: "Optimize your website for search engines and speed. Get found by customers and keep them on your site.",
    link: "/services#seo",
  },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-spacing bg-card">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">What We Do</span>
          <h2 className="text-headline mt-4">
            Services Built for Growth
          </h2>
          <p className="text-body-lg max-w-2xl mx-auto mt-4">
            Everything you need to establish a powerful online presence and grow your business.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                to={service.link}
                className="group block p-8 rounded-xl bg-background border border-border card-hover h-full"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center text-primary font-semibold text-sm">
                      Learn more
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
