import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Layout } from "@/components/layout/Layout";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "custom",
    title: "Индивидуальные веб-платформы",
    description: "Полностью индивидуальная веб-платформа, разработанная с учётом ваших уникальных потребностей. Без шаблонов, без компромиссов.",
    features: [
      "Индивидуальный дизайн под ваши потребности",
      "Адаптивность под все устройства", 
      "Быстрая загрузка",
      "SEO-оптимизированная структура",
    ],
    timeline: "2-4 недели",
    startingPrice: "$700",
  },
  {
    id: "landing",
    title: "Лендинги",
    description: "Высоко-конверсионные лендинги, разработанные для привлечения лидов и призыву к действиям. Идеально для кампаний.",
    features: [
      "Дизайн, ориентированный на конверсию",
      "Готовность к A/B тестированию",
      "Интеграция форм",
      "Быстрая разработка за 1 неделю",
    ],
    timeline: "1 неделя",
    startingPrice: "$500",
  },
  {
    id: "redesign",
    title: "Редизайн сайта",
    description: "Превратите устаревший сайт в современный, быстрый и эффективный инструмент.",
    features: [
      "Полный визуальный редизайн и миграция контента",
      "Улучшенный пользовательский опыт",
      "Оптимизация производительности",
      "Сохранение и улучшение SEO",
    ],
    timeline: "2-3 недели",
    startingPrice: "$300",
  },
  {
    id: "seo",
    title: "SEO и Производительность",
    description: "Оптимизируйте существующий сайт для поисковых систем и ускорьте его работоспособность.",
    features: [
      "Технический SEO-аудит",
      "Оптимизация скорости страниц",
      "Улучшение Core Web Vitals",
      "Оптимизация изображений",
    ],
    timeline: "Постоянно",
    startingPrice: "$200",
  },
];

const addons = [
  { name: "Обслуживание сайта", price: "$100/мес +" },
  { name: "Написание контента", price: "$50/страница +" },
  { name: "Фотографии / Контент", price: "Индивидуальный расчёт" },
  { name: "Дизайн логотипа", price: "$200 +" },
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
      <div className="p-5 sm:p-8 md:p-10 rounded-2xl bg-card border border-border">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 sm:gap-8">
          <div className="flex-1">
            <h2 className="text-title-sm sm:text-title mb-4">{service.title}</h2>
            <p className="text-body-sm sm:text-body-lg mb-6 sm:mb-8">{service.description}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.features.map((feature) => (
                <div key={feature} className="flex gap-2 sm:gap-3">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-blue/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-blue" />
                  </div>
                  <span className="text-xs sm:text-sm text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-64 flex-shrink-0">
            <div className="p-6 rounded-xl bg-muted/50 text-center">
              <p className="text-sm text-muted-foreground mb-2">Начиная от</p>
              <p className="text-2xl font-display font-bold text-primary mb-4">{service.startingPrice}</p>
              <p className="text-sm text-muted-foreground mb-6">Срок: {service.timeline}</p>
              <Button variant="hero" className="w-full" asChild>
                <Link to="/contact">Получить предложение</Link>
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
      <section className="pt-28 sm:pt-32 pb-10 sm:pb-16 md:pt-40 md:pb-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-small-headline">Наши услуги</span>
            <h1 className="text-headline sm:mt-4 mb-6">
              Web-решения, которые дают результаты
            </h1>
            <p className="text-body-lg font-light">
              От индивидуальных сайтов до оптимизации производительности — мы предлагаем всё необходимое для онлайн успеха.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="pb-12 sm:pb-20">
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
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-title">Дополнительные услуги</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={addonsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            {addons.map((addon) => (
              <div key={addon.name} className="p-4 sm:p-6 rounded-xl bg-background border border-border text-center">
                <p className="font-semibold mb-2">{addon.name}</p>
                <p className="text-primary font-display font-bold">{addon.price}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={addonsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-8 sm:mt-12"
          >
            <Button variant="hero" size="xl" asChild className="w-full sm:w-auto">
              <Link to="/contact">
                Обсудить ваш проект
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
