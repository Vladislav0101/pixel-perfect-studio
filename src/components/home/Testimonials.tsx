import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Vector полностью преобразил наше онлайн-присутствие. Наш новый сайт загружается быстрее, выглядит потрясающе, и мы увидели рост лидов на 40% в первый месяц.",
    author: "Сара Чен",
    role: "Основатель",
    company: "Bloom Wellness Studio",
    rating: 5,
  },
  {
    quote: "Профессионально, отзывчиво, и они действительно поняли наше видение. Сайт, который они создали, превзошёл наши ожидания, и нашим клиентам он нравится.",
    author: "Маркус Родригес",
    role: "Генеральный директор",
    company: "TechStart Solutions",
    rating: 5,
  },
  {
    quote: "Лучшая инвестиция, которую мы сделали для нашего бизнеса. Команда была прозрачна в отношении сроков и стоимости. Никаких сюрпризов, просто отличная работа, выполненная вовремя.",
    author: "Эмили Томпсон",
    role: "Владелец",
    company: "Artisan Coffee Co.",
    rating: 5,
  },
];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-spacing bg-card">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Отзывы</span>
          <h2 className="text-headline mt-4">
            Нам доверяют растущие бизнесы
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 rounded-xl bg-background border border-border relative"
            >
              {/* Quote icon */}
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-display font-bold">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
