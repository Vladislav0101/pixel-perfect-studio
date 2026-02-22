import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

export function Hero() {
  const [isServicesVisible, setIsServicesVisible] = useState(false);

  useEffect(() => {
    // Find the Services section by its data attribute
    const servicesSection = document.querySelector('[data-services-section]') as HTMLElement;
    if (!servicesSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsServicesVisible(true);
          } else {
            setIsServicesVisible(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(servicesSection);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-18 md:pt-20">
      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 py-1.5 px-3 md:px-4 md:py-2 rounded-full bg-muted border border-border mb-8"
          >
            <Sparkles className="w-4 h-4 text-blue" />
            <span className="text-xs md:text-md font-medium text-muted-foreground">
              Студия web-разработки
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="grid text-display mb-6 gap-1 md:gap-0"
          >
            <span className="text-foreground">Наши <br className='block xs:hidden' /> Web-pешения</span>
            <span className="text-gradient-primary">
              Масштабируют ваш бизнес
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-body-lg max-w-2xl mx-auto mb-10 font-light"
          >
            Мы не просто делаем сайты – мы создаём инструменты, которые
            привлекают, удерживают и продают.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col md:flex-row items-center justify-center gap-4"
          >
            <Button variant="hero" className='w-full md:w-auto' size="xl" asChild>
              <Link to="/contact">
                <span className='hidden md:block'>Получить бесплатное предложение</span>
                <span className='block md:hidden'>Бесплатное предложение</span>
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button className='w-full md:w-auto' variant="heroOutline" size="xl" asChild>
              <Link to="/portfolio">Посмотреть наши работы</Link>
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-6 md:mt-16 flex flex-wrap items-center justify-center gap-x-6 md:gap-x-8 gap-y-2 text-muted-foreground text-md"
          >
            <div className="flex items-center gap-1 md:gap-2">
              <div className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-primary" />
              <span className="font-light">Кратчайшие сроки</span>
            </div>
            <div className="flex items-center gap-1 md:gap-2">
              <div className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-primary" />
              <span className="font-light">Мобильный дизайн</span>
            </div>
            <div className="flex items-center gap-1 md:gap-2">
              <div className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-primary" />
              <span className="font-light">SEO оптимизация</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - Desktop */}
      {!isServicesVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 1.5 }}
          className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-primary rounded-full"
            />
          </div>
        </motion.div>
      )}

      {/* Scroll indicator - Mobile */}
      {!isServicesVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 1.5 }}
          className="md:hidden absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center relative"
          >
            <div className="w-[6px] h-[6px] top-1 absolute rounded-full bg-primary" />
            <ChevronDown className="w-10 h-10 text-primary" />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
