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
import { CTA } from '@/components/home/CTA';

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
      <section className="pt-20 md:pt-32 pb-6 md:pb-8">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Button variant="ghost" size="sm" asChild className='pl-0'>
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
      <section className="pb-8 md:pb-12">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-small-headline">
              {project.industry}
            </span>
            <h1 className="text-headline md:mt-4 mb-6">{project.title}</h1>
            <p className="text-body-lg font-light max-w-2xl">
              {project.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project slider — full width, center slide prominent, edges cut off */}
      <section className="pb-12 md:pb-16 w-full overflow-hidden">
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
                  className="pl-2 md:pl-4 basis-[85%] md:basis-[80%] md:basis-[75%] lg:basis-[70%]"
                >
                  <div
                    className={`aspect-[16/10] rounded-2xl overflow-hidden border border-border bg-card ${slide.type === 'gradient' ? slide.class : ''
                      }`}
                    style={
                      slide.type === 'image'
                        ? {
                          backgroundImage: `url(${slide.url})`,
                          backgroundSize: 'contain',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat',
                          backgroundColor: project.backgroundColor,
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
                  className={`h-1.5 rounded-full transition-all ${index === current
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
      <section className="pb-12 md:pb-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-4xl space-y-8 md:space-y-16"
          >
            {project.businessTask && (
              <div>
                <h2 className="text-title mb-3 md:mb-8">Бизнес-задача</h2>
                <p className="text-body-lg !text-primary">
                  {project.businessTask}
                </p>
              </div>
            )}
            {project.functionality.length > 0 && (
              <div>
                <h2 className="text-title mb-4 md:mb-8">
                  {project.functionalityTitle ?? 'Функциональность'}
                </h2>
                <div className="grid gap-6 md:gap-10 md:grid-cols-2">
                  {project.functionality.map((block, blockIndex) => (
                    <motion.div
                      key={block.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.35 + blockIndex * 0.05,
                      }}
                      className="rounded-xl border border-border bg-card p-4 md:p-6"
                    >
                      <h3 className="font-display font-bold text-lg mb-2 md:mb-4">
                        {block.title}
                      </h3>
                      <ul className="space-y-2">
                        {block.items.map((item) => (
                          <li
                            key={item}
                            className="flex gap-2 text-base text-muted-foreground"
                          >
                            <span className="mt-2.5 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
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
              <h2 className="text-title mb-4 md:mb-6">Результаты</h2>
              <ul className="space-y-2 md:space-y-4">
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
                    <div className="flex-shrink-0 w-4 md:w-6 h-4 md:h-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <Check className="w-2.5 md:w-3.5 h-2.5 md:h-3.5 text-primary" />
                    </div>
                    <span className="text-body-sm md:text-body-lg text-muted-foreground">
                      {result}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>


      {/* CTA */}
      <div className="pb-12 md:pb-20">
        <CTA
          title="Хотите такой же результат?"
          description="Давайте обсудим, как мы можем помочь вашему бизнесу достичь подобных результатов."
          buttonText="Обсудить проект"
        />
      </div>
    </Layout>
  );
}
