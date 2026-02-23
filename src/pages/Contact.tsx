import { motion } from "framer-motion";
import { EMAIL, PHONE_DISPLAY, SOCIAL_LINKS } from "@/constants/links";
import { useState, useRef, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Mail, ArrowRight, CheckCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { supabase } from "@/lib/supabaseClient";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Укажите ваше имя").max(100, "Имя должно быть менее 100 символов"),
  email: z.string().trim().max(255, "Email должен быть менее 255 символов").optional(),
  phone: z.string().trim().min(1, "Укажите телефон").max(100, "Телефон должен быть менее 100 символов"),
  company: z.string().max(100, "Название компании должно быть менее 100 символов").optional(),
  budget: z.string().trim().min(1, "Укажите примерный бюджет").max(100, "Бюджет должен быть менее 100 символов"),
  service: z.string().trim().min(1, "Укажите интересующую услугу").max(100, "Услуга должна быть менее 100 символов"),
  message: z.string().trim().min(10, "Предоставьте больше деталей о вашем проекте. Начните с одного предложения").max(2000, "Сообщение должно быть менее 2000 символов"),
});

const services = [
  "Индивидуальный сайт",
  "Лендинг",
  "Редизайн сайта",
  "SEO и производительность",
  "Другое",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
    budget: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  const successBlockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isSubmitted && successBlockRef.current) {
      successBlockRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [isSubmitted]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleServiceChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }));
    if (errors.service) setErrors((prev) => ({ ...prev, service: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      const parsed = contactSchema.parse({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        service: formData.service,
        message: formData.message,
        budget: formData.budget,
      });

      const { error: insertError } = await supabase
        .from("ProjectRequest")
        .insert([
          {
            name: parsed.name,
            email: parsed.email,
            company: parsed.company,
            phone: parsed.phone,
            budget: parsed.budget,
            service: parsed.service,
            message: parsed.message,
          },
        ]);

      if (insertError) {
        throw insertError;
      }

      setIsSubmitted(true);
      toast({
        title: "Сообщение отправлено!",
        description: "Мы свяжемся с вами в течение 24 часов.",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(newErrors);
      } else {
        const message =
          error && typeof error === "object" && "message" in error
            ? String((error as { message: unknown }).message)
            : "Не удалось отправить сообщение. Попробуйте ещё раз.";

        toast({
          variant: "destructive",
          title: "Ошибка отправки",
          description: message,
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <section className="pt-28 md:pt-32 pb-10 md:pb-20 md:pt-40 md:pb-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
            {/* Left side - Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-small-headline">Контакты</span>
              <h1 className="text-headline md:mt-4 mb-6">
                Давайте начнём проект вместе
              </h1>
              <p className="text-body-lg mb-8 md:mb-10">
                Расскажите нам о вашем проекте, и мы свяжемся с вами в течение 24 часов с бесплатной консультацией и предложением.
              </p>

              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Позвоните прямо сейчас</p>
                  <a
                    href={SOCIAL_LINKS.phone}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-8 md:mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Напишите нам напрямую</p>
                    <a href={SOCIAL_LINKS.email} className="text-muted-foreground hover:text-primary transition-colors">
                      {EMAIL}
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border">
                <h3 className="font-display font-bold mb-4">Что будет дальше?</h3>
                <ol className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary font-bold text-xs">1</span>
                    Мы изучаем детали вашего проекта
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary font-bold text-xs">2</span>
                    Назначаем бесплатную консультацию
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary font-bold text-xs">3</span>
                    Вы получаете детальное предложение и расчёт
                  </li>
                </ol>
              </div>
            </motion.div>

            {/* Right side - Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {isSubmitted ? (
                <div ref={successBlockRef} className="h-full flex items-center justify-center">
                  <div className="text-center p-6 md:p-8 rounded-2xl bg-card border border-border">
                    <div className="w-14 md:w-16 h-14 md:h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 md:mb-6">
                      <CheckCircle className="w-7 md:w-8 h-7 md:h-8 text-primary" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-display font-bold mb-2 md:mb-4">Сообщение отправлено!</h2>
                    <p className="text-muted-foreground mb-3 md:mb-6">
                      {formData.name}, спасибо за обращение! Мы свяжемся с вами в течение 24 часов.
                    </p>
                    <Button
                      variant="hero"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: "", email: "", phone: "", company: "", service: "", message: "", budget: "" });
                      }}
                    >
                      Отправить ещё одно сообщение
                    </Button>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="p-4 md:p-8 rounded-2xl bg-card border border-border [&_input]:focus-visible:ring-0 [&_input]:focus-visible:ring-offset-0 [&_textarea]:focus-visible:ring-0 [&_textarea]:focus-visible:ring-offset-0 [&_button[type='submit']]:focus-visible:ring-0 [&_button[type='submit']]:focus-visible:ring-offset-0"
                >
                  <div className="space-y-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Ваше имя
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Иван Иванов"
                        className={errors.name ? "border-destructive" : ""}
                      />
                      {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
                    </div>

                    {/* Phone */}

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Телефон
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="8 (029) 999-99-99"
                        className={errors.phone ? "border-destructive" : ""}
                      />
                      {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email <span className="text-muted-foreground text-xs">(необязательно)</span>
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="ivan@company.ru"
                        className={errors.email ? "border-destructive" : ""}
                      />
                      {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
                    </div>

                    {/* Company */}
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2">
                        Название компании <span className="text-muted-foreground text-xs">(необязательно)</span>
                      </label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="ООО Пример Компании"
                      />
                    </div>

                    {/* Service - Dropdown */}
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium mb-2">
                        Интересующая услуга
                      </label>
                      <Select
                        value={formData.service || undefined}
                        onValueChange={handleServiceChange}
                      >
                        <SelectTrigger
                          id="service"
                          className="h-11 w-full rounded-lg border border-input bg-background px-4 py-2 text-sm font-normal focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 [&>span]:line-clamp-1"
                        >
                          <SelectValue placeholder="Выберите услугу..." />
                        </SelectTrigger>
                        <SelectContent className="rounded-lg border border-border bg-popover shadow-lg">
                          {services.map((service) => (
                            <SelectItem
                              key={service}
                              value={service}
                              className="rounded-md py-2.5 pl-3 pr-8 focus:bg-primary/10 focus:text-foreground focus:outline-none cursor-pointer"
                            >
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Budget */}
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium mb-2">
                        Примерный бюджет
                      </label>
                      <Input
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        placeholder="2,000$"
                        type="text"
                        className={errors.budget ? "border-destructive" : ""}
                      />
                      {errors.budget && <p className="text-destructive text-sm mt-1">{errors.budget}</p>}
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Расскажите о вашем проекте
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Опишите ваш проект, цели и любые специфические требования..."
                        rows={5}
                        className={errors.message ? "border-destructive" : ""}
                      />
                      {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
                    </div>

                    <Button
                      type="submit"
                      variant="hero"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Отправка..."
                      ) : (
                        <>
                          Отправить сообщение
                          <ArrowRight className="ml-2" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
