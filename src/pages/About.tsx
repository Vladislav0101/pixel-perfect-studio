import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Layout } from "@/components/layout/Layout";
import { Heart, Zap, Shield, Users } from "lucide-react";
import { CTA } from "@/components/home/CTA";

const values = [
  {
    icon: Heart,
    title: "Фокус на качестве",
    description: "Мы уделяем внимание каждой детали – от архитектуры до интерфейса – чтобы результат был стабильным, удобным и долговечным.",
  },
  {
    icon: Zap,
    title: "Скорость без компромиссов",
    description: "Быстрые сроки выполнения без ущерба для качества кода или стандартов дизайна.",
  },
  {
    icon: Shield,
    title: "Прозрачный процесс",
    description: "Никаких сюрпризов. Чёткая коммуникация, фиксированные цены и регулярные обновления о прогрессе.",
  },
  {
    icon: Users,
    title: "Партнёрский подход",
    description: "Мы не просто подрядчики – мы заинтересованы в вашем успехе и доступны, когда мы вам необходимы.",
  },
];

const stats = [
  { value: "10+", label: "Реализованных проектов" },
  { value: "98%", label: "Удовлетворённость клиентов" },
  { value: "2 недели", label: "Средний срок доставки" },
  { value: "2 года", label: "В бизнесе" },
];

export default function About() {
  const valuesRef = useRef(null);
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });

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
            <span className="text-small-headline">О нас</span>
            <h1 className="text-headline md:mt-4 mb-6">
              Малая команда. <br /> Большое влияние.
            </h1>
            <p className="text-body-lg">
              Мы – сфокусированная студия веб-разработки, которая помогает бизнесу создавать эффективное онлайн-присутствие.
              Никаких раздутых агентств, никаких бесконечных встреч – просто опытные люди, которые делают свою работу.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="pb-12 md:pb-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-5 md:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="max-w-sm sm:max-w-none aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-blue/15 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-2xl bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-display font-bold text-6xl">V</span>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-8 right-8 w-20 h-20 border-2 border-primary/20 rounded-xl" />
                <div className="absolute bottom-12 left-12 w-16 h-16 border-2 border-primary/30 rounded-full" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-title mb-3 md:mb-6">Наша история</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Vector начался с простого наблюдения: малому бизнесу часто не хватает сайтов, которые одновременно выглядят профессионально и эффективно решают задачи роста. Мы увидели запрос на качественные, продуманные цифровые решения без лишней сложности.
                </p>
                <p>
                  С самого начала мы сделали ставку на компактную команду опытных разработчиков и дизайнеров. Это позволяет нам работать гибко, сохранять высокий уровень качества и предлагать разумные сроки и бюджеты.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section ref={valuesRef} className="section-spacing bg-card">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 md:mb-16"
          >
            <span className="text-small-headline">Наши ценности</span>
            <h2 className="text-headline md:mt-4">Как мы работаем</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-5 md:p-6 rounded-xl bg-background border border-border text-center"
              >
                <div className="w-10 md:w-14 h-10 md:h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-2 md:mb-4">
                  <value.icon className="w-5 md:w-7 h-5 md:h-7 text-primary" />
                </div>
                <h3 className="font-display font-bold mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section ref={statsRef} className="section-spacing">
        <div className="container-custom">
          <div className="grid items-center grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={statsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        className="pb-10 sm:pb-16 md:pb-24"
        title="Получить оценку"
        description="Готовы работать с командой, которая искренне заботится о вашем успехе? Давайте поговорим."
        buttonText="Связаться с нами"
      />
    </Layout>
  );
}
