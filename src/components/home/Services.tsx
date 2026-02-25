import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Palette, Zap, Search, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackMetaPixelCTAClick } from '@/components/MetaPixel';

const services = [
  {
    icon: Code,
    title: 'Индивидуальные бизнес-платформы',
    description:
      'Персонализированные сайты, отражающие ваш бренд и способствующие достижению бизнес-целей. Созданы с использованием современных технологий для скорости и надёжности.',
    link: '/services#custom',
  },
  {
    icon: Palette,
    title: 'Лендинги',
    description:
      'Высококонверсионные лендинги, разработанные для привлечения лидов. Идеально подходят для кампаний и запуска продуктов.',
    link: '/services#landing',
  },
  {
    icon: Zap,
    title: 'Редизайн сайта',
    description:
      'Превратите устаревший сайт в современный, быстрый и удобный опыт.',
    link: '/services#redesign',
  },
  {
    icon: Search,
    title: 'SEO и Производительность',
    description:
      'Оптимизируйте ваш сайт для поисковых систем и скорости. Позвольте клиентам находить вас быстрее.',
    link: '/services#seo',
  },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} data-services-section className="section-spacing bg-card">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="text-small-headline">
            Что мы делаем
          </span>
          <h2 className="text-headline md:mt-4">Инструменты <br className='block md:hidden' /> для роста</h2>
          <p className="text-body-lg max-w-2xl mx-auto mt-4 font-light">
            Всё необходимое для создания мощного онлайн-ресурса и роста вашего бизнеса.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                to={service.link}
                className="group block p-6 md:p-8 rounded-xl bg-background border border-border card-hover h-full"
                onClick={() => trackMetaPixelCTAClick(`Узнать больше: ${service.title}`)}
              >
                <div className="flex items-start gap-5">
                  <div className="w-10 md:w-14 h-10 md:h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                    <service.icon className="w-5 md:w-7 h-5 md:h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-base md:text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground md:leading-relaxed mb-4 text-md md:text-base">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center text-blue font-semibold text-xs md:text-md">
                      Узнать больше
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
