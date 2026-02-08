import { motion } from 'framer-motion';
import { Link, useParams, Navigate } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import { getProjectBySlug } from '@/data/projects';
import { useCallback, useEffect, useState } from 'react';

/** Build slider slides: gallery if set, else repeat imageUrl or gradient. Always ≥3 for peek effect. */
function getProjectSlides(project: NonNullable<ReturnType<typeof getProjectBySlug>>) {
  const repeat = <T,>(arr: T[], minLength: number): T[] => {
    if (arr.length >= minLength) return arr;
    const out = [...arr];
    while (out.length < minLength) out.push(arr[out.length % arr.length]);
    return out;
  };
  if (project.gallery && project.gallery.length > 0) {
    return repeat(project.gallery, 3).map((url) => ({ type: 'image' as const, url }));
  }
  if (project.imageUrl) {
    return [
      { type: 'image' as const, url: project.imageUrl },
      { type: 'image' as const, url: project.imageUrl },
      { type: 'image' as const, url: project.imageUrl },
    ];
  }
  return [
    { type: 'gradient' as const, class: project.image },
    { type: 'gradient' as const, class: project.image },
    { type: 'gradient' as const, class: project.image },
  ];
}

export default function Project() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;
  const [api, setApi] = useState<CarouselApi | undefined>(undefined);
  const [current, setCurrent] = useState(0);

  const updateCurrent = useCallback((api: CarouselApi | undefined) => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!api) return;
    updateCurrent(api);
    api.on('select', () => updateCurrent(api));
  }, [api, updateCurrent]);

  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  const slides = getProjectSlides(project);

  return (
    <Layout>
      {/* Back link */}
      <section className="pt-32 pb-8">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Button variant="ghost" size="sm" asChild>
              <Link
                to="/portfolio"
                className="group inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Назад к портфолио
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Hero */}
      <section className="pb-12">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              {project.industry}
            </span>
            <h1 className="text-headline mt-4 mb-6">{project.title}</h1>
            <p className="text-body-lg font-light max-w-2xl">
              {project.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project slider — full width, center slide prominent, edges cut off */}
      <section className="pb-16 w-full overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full"
        >
          <Carousel
            setApi={setApi}
            opts={{
              align: 'center',
              loop: true,
              skipSnaps: false,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {slides.map((slide, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 basis-[85%] sm:basis-[80%] md:basis-[75%] lg:basis-[70%]"
                >
                  <div
                    className={`aspect-[16/10] rounded-2xl overflow-hidden border border-border bg-card ${
                      slide.type === 'gradient' ? slide.class : ''
                    }`}
                    style={
                      slide.type === 'image'
                        ? {
                            backgroundImage: `url(${slide.url})`,
                            backgroundSize: 'contain',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                          }
                        : undefined
                    }
                  >
                    {slide.type === 'gradient' && (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="font-display font-bold text-6xl text-foreground/10">
                          {project.title.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 md:left-4 h-10 w-10 rounded-full border-border bg-background/80 backdrop-blur-sm hover:bg-background" />
            <CarouselNext className="right-2 md:right-4 h-10 w-10 rounded-full border-border bg-background/80 backdrop-blur-sm hover:bg-background" />
          </Carousel>
          {slides.length > 1 && (
            <div className="container-custom flex justify-center gap-1.5 mt-4">
              {slides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Slide ${index + 1}`}
                  onClick={() => api?.scrollTo(index)}
                  className={`h-1.5 rounded-full transition-all ${
                    index === current
                      ? 'w-6 bg-primary'
                      : 'w-1.5 bg-muted-foreground/40 hover:bg-muted-foreground/60'
                  }`}
                />
              ))}
            </div>
          )}
        </motion.div>
      </section>

      {/* Бизнес-задача, Функциональность, Результаты — or legacy Results */}
      <section className="pb-20">
        <div className="container-custom">
          {project.businessTask != null || (project.functionality?.length ?? 0) > 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="max-w-4xl space-y-16"
            >
              {project.businessTask != null && (
                <div>
                  <h2 className="text-title-xl mb-4">Бизнес-задача</h2>
                  <p className="text-body-lg !text-primary">
                    {project.businessTask}
                  </p>
                </div>
              )}

              {project.functionality && project.functionality.length > 0 && (
                <div>
                  <h2 className="text-title-xl mb-8">
                    {project.functionalityTitle ?? 'Функциональность'}
                  </h2>
                  <div className="grid gap-10 sm:grid-cols-2">
                    {project.functionality.map((block, blockIndex) => (
                      <motion.div
                        key={block.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: 0.35 + blockIndex * 0.05,
                        }}
                        className="rounded-xl border border-border bg-card p-6"
                      >
                        <h3 className="font-display font-bold text-lg mb-4">
                          {block.title}
                        </h3>
                        <ul className="space-y-2">
                          {block.items.map((item) => (
                            <li
                              key={item}
                              className="flex items-center gap-2 text-base text-muted-foreground"
                            >
                              <span className="h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h2 className="text-title-xl mb-6">Результаты</h2>
                <ul className="space-y-4">
                  {project.results.map((result, index) => (
                    <motion.li
                      key={result}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.5 + index * 0.05,
                      }}
                      className="flex items-center gap-4"
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                        <Check className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <span className="text-body-lg text-muted-foreground">
                        {result}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="max-w-2xl"
            >
              <h2 className="text-title mb-8">Ключевые результаты</h2>
              <ul className="space-y-4">
                {project.results.map((result, index) => (
                  <motion.li
                    key={result}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.4 + index * 0.1,
                    }}
                    className="flex items-start gap-4"
                  >
                    <div className="mt-1.5 flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <span className="text-body-lg text-muted-foreground">
                      {result}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden"
          >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />

            {/* Content */}
            <div className="relative z-10 px-8 py-16 md:px-16 md:py-24 text-center">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground mb-6">
                Нравится то, что вы видите?
              </h2>
              <p className="text-primary-foreground/90 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                Давайте обсудим, как мы можем помочь вашему бизнесу достичь
                подобных результатов.
              </p>
              <Button
                size="xl"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                asChild
              >
                <Link to="/contact">
                  Обсудить проект
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
