import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Layout } from "@/components/layout/Layout";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Bloom Wellness Studio",
    industry: "Health & Wellness",
    description: "A calming, conversion-focused website for a yoga and wellness studio. Features class scheduling, membership management, and an online store.",
    results: ["150% increase in online bookings", "40% reduction in admin time", "Mobile traffic up 85%"],
    image: "bg-gradient-to-br from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "TechStart Solutions",
    industry: "Technology",
    description: "Modern B2B website for a software consulting firm. Clean design with integrated case studies and a streamlined contact flow.",
    results: ["3x more qualified leads", "Average session duration +120%", "Page load time under 2s"],
    image: "bg-gradient-to-br from-blue-500/20 to-indigo-500/20",
  },
  {
    title: "Artisan Coffee Co.",
    industry: "Food & Beverage",
    description: "E-commerce website for a specialty coffee roaster. Subscription management, product photography, and local delivery integration.",
    results: ["Online sales up 200%", "500+ new subscribers", "Reduced bounce rate by 45%"],
    image: "bg-gradient-to-br from-amber-500/20 to-orange-500/20",
  },
  {
    title: "Urban Dental Practice",
    industry: "Healthcare",
    description: "Professional website for a modern dental clinic. Online appointment booking, patient portal, and insurance information hub.",
    results: ["80% of appointments now online", "Patient inquiries up 60%", "5-star Google rating maintained"],
    image: "bg-gradient-to-br from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "Summit Legal Group",
    industry: "Professional Services",
    description: "Authoritative website for a law firm specializing in business law. Case results showcase and secure client portal.",
    results: ["45% more consultation requests", "Average time on site: 4 mins", "Improved search rankings"],
    image: "bg-gradient-to-br from-slate-500/20 to-zinc-500/20",
  },
  {
    title: "Green Earth Landscaping",
    industry: "Home Services",
    description: "Visual-first website for a landscaping company. Project gallery, service area maps, and instant quote calculator.",
    results: ["Quote requests up 180%", "Seasonal bookings increased 90%", "Mobile conversions doubled"],
    image: "bg-gradient-to-br from-green-500/20 to-emerald-500/20",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <div className="rounded-2xl overflow-hidden bg-card border border-border card-hover h-full flex flex-col">
        {/* Image placeholder */}
        <div className={`aspect-[16/10] ${project.image} relative`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display font-bold text-4xl text-foreground/10">
              {project.title.charAt(0)}
            </span>
          </div>
        </div>
        
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-start justify-between mb-4">
            <div>
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                {project.industry}
              </span>
              <h3 className="text-xl font-display font-bold mt-1 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
            </div>
            <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </div>
          
          <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
            {project.description}
          </p>
          
          <div className="space-y-2">
            <p className="text-xs font-semibold text-foreground uppercase tracking-wider">Key Results</p>
            {project.results.map((result) => (
              <div key={result} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-sm text-muted-foreground">{result}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

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
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Portfolio</span>
            <h1 className="text-headline mt-4 mb-6">
              Work That Speaks for Itself
            </h1>
            <p className="text-body-lg">
              A selection of projects that showcase our approach: clean design, smart strategy, and measurable results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaRef} className="section-spacing bg-card">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-title mb-6">
              Ready to Join Them?
            </h2>
            <p className="text-body-lg mb-8">
              Let's discuss how we can help your business achieve similar results.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">Start Your Project</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
