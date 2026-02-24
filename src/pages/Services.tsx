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
    startingPrice: "Работаем в рамках ваших приоритетов и бюджета.",
  },
  {
    id: "landing",
    title: "Лендинги",
    description: "Высоко-конверсионные лендинги, разработанные для привлечения лидов и призыву к действиям. Идеально для запуска новых продуктов и рекламных кампаний.",
    features: [
      "Дизайн, ориентированный на конверсию",
      "Готовность к A/B тестированию",
      "Интеграция форм",
      "Быстрая разработка за 1 неделю",
    ],
    timeline: "1 неделя",
    startingPrice: "Подбираем решение под ваши цели, ресурсы и приоритеты",
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
    startingPrice: "Формируем рациональный и реализуемый план действий.",
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
    startingPrice: "Предлагаем оптимальный формат сотрудничества под задачи и бюджет.",
  },
];

const addons = [
  { name: "Обслуживание сайта", price: "0" },
  { name: "Написание контента", price: "0" },
  { name: "Фотографии / Контент", price: "0" },
  { name: "Дизайн логотипа", price: "0" },
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
      <div className="p-5 md:p-8 md:p-10 rounded-2xl bg-card border border-border">
        <div className="flex flex-col lg:flex-row lg:items-stretch lg:justify-between gap-6 md:gap-8">
          <div className="flex-1">
            <h2 className="text-title-sm md:text-title mb-4">{service.title}</h2>
            <p className="text-body-sm md:text-body-lg mb-6 md:mb-8">{service.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {service.features.map((feature) => (
                <div key={feature} className="flex gap-2 md:gap-3">
                  <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-blue/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-2.5 h-2.5 md:w-3 md:h-3 text-blue" />
                  </div>
                  <span className="text-xs md:text-sm text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-64 flex flex-col p-6 rounded-xl bg-muted/50 text-center lg:self-stretch justify-center gap-2">
            <p className="text-sm text-muted-foreground mb-2">{service.startingPrice}</p>
            <div>
              <Button variant="hero" className="w-full mb-2" asChild>
                <Link to="/contact">Получить предложение</Link>
              </Button>
              {service.timeline && <p className="text-sm text-muted-foreground">Срок: {service.timeline}</p>}
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
      <section className="pt-28 md:pt-32 pb-10 md:pb-16 md:pt-40 md:pb-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-small-headline">Наши услуги</span>
            <h1 className="text-headline md:mt-4 mb-6">
              Web-решения, которые дают результаты
            </h1>
            <p className="text-body-lg font-light">
              От индивидуальных сайтов до оптимизации производительности – мы предлагаем всё необходимое для онлайн успеха.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="pb-12 md:pb-20">
        <div className="container-custom space-y-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </section>

      {/* Add-ons */}
      <section ref={addonsRef} className="py-12 bg-card">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={addonsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-title">Дополнительные услуги</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={addonsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            {addons.map((addon) => (
              <div key={addon.name} className="flex items-center justify-center p-4 md:p-6 rounded-xl bg-background border border-border text-center">
                <p className="font-semibold">{addon.name}</p>
                {/* <p className="text-primary font-display font-bold">{addon.price}</p> */}
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={addonsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-8 md:mt-12"
          >
            <Button variant="hero" size="xl" asChild className="w-full md:w-auto">
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
