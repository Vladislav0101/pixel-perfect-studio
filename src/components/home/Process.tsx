import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MessageSquare, Pencil, Code2, Rocket } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: 'Знакомство',
    description:
      'Изучаем ваш бизнес, цели и видение. Без шаблонов – всё начинается с понимания ваших уникальных потребностей.',
  },
  {
    icon: Pencil,
    title: 'Дизайн и стратегия',
    description:
      'Создаём макеты и дизайны, адаптированные под ваш бренд. Вы просматриваете и даёте обратную связь, пока вы не увидите то, что хотели.',
  },
  {
    icon: Code2,
    title: 'Разработка',
    description:
      'Разрабатываем ваш сайт на базе современных технологий, которые обеспечивают быструю загрузку, адаптив под мобильные устройства и полную SEO-оптимизацию.',
  },
  {
    icon: Rocket,
    title: 'Запуск и поддержка',
    description: 'Публикуем ваш сайт и проводим обучение.',
  },
];

export function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="section-spacing">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="text-small-headline">
            Наш процесс
          </span>
          <h2 className="text-headline md:mt-4">От идеи до запуска</h2>
          <p className="text-body-lg max-w-2xl mx-auto mt-8 md:mt-4 font-light">
            Работаем по понятному процессу: регулярные отчёты, контроль сроков и
            фокус на результате.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-gradient-to-r from-primary/50 to-transparent" />
              )}

              <div className="md:text-center">
                <div className='flex items-center gap-3 md:flex-col mb-2 md:mb-6'>
                  <div className="relative inline-flex items-center justify-center">
                    <div className="md:w-20 md:h-20 w-10 h-10 rounded-2xl bg-muted flex items-center justify-center relative z-10">
                      <step.icon className="md:w-8 md:h-8 w-4 h-4 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-display text-xl font-bold">
                    {step.title}
                  </h3>
                </div>
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
