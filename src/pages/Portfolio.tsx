import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Layout } from '@/components/layout/Layout';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CTA } from '@/components/home/CTA';
import { projects } from '@/data/projects';

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <Link to={`/portfolio/${project.slug}`}>
        <div className="rounded-2xl overflow-hidden bg-card border border-border card-hover h-full flex flex-col">
          {/* Image placeholder */}
          <div
            className={`aspect-[16/10] ${project.image} bg-cover relative`}
            style={
              project.imageUrl
                ? {
                    backgroundImage: `url(${project.imageUrl})`,
                  }
                : undefined
            }
          >
            {!project.imageUrl && (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display font-bold text-4xl text-foreground/10">
                  {project.title.charAt(0)}
                </span>
              </div>
            )}
          </div>

        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-start justify-between mb-4">
            <div>
              <span className="text-xs font-semibold text-blue uppercase tracking-wider">
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
            <p className="text-xs font-semibold text-foreground uppercase tracking-wider">
              Ключевые результаты
            </p>
            {project.results.map((result) => (
              <div key={result} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue" />
                <span className="text-sm text-muted-foreground">{result}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
    </motion.div>
  );
}

export default function Portfolio() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-28 sm:pt-32 pb-10 sm:pb-16 md:pt-40 md:pb-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}  
            className="max-w-3xl"
          >
            <span className="text-small-headline">
              Портфолио
            </span>
            <h1 className="text-headline sm:mt-4 mb-6">
              Работы, которые говорят сами за себя
            </h1>
            <p className="text-body-lg font-light">
              Подборка проектов, демонстрирующих наш подход: чистый дизайн,
              умная стратегия и измеримые результаты.
            </p>
          </motion.div>
        </div>
      </section>  

      {/* Projects Grid */}
      <section className="pb-12 sm:pb-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Готовы присоединиться к ним?"
        description="Давайте обсудим, как мы можем помочь вашему бизнесу достичь подобных результатов."
        buttonText="Начать проект"
      />
    </Layout>
  );
}
