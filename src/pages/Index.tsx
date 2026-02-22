import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { Process } from "@/components/home/Process";
// import { Testimonials } from "@/components/home/Testimonials";
import { CTA } from "@/components/home/CTA";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <Process />
      {/* <Testimonials /> */}
      <CTA
        className="pb-10 sm:pb-16 md:pb-32"
        title="Готовы обсудить ваш проект?"
        description="Оставьте заявку и получите бесплатную консультацию и предложение в течение 24 часов."
        buttonText="Начать проект"
        secondaryButton={{ text: "Посмотреть наши работы", href: "/portfolio" }}
      />
    </Layout>
  );
};

export default Index;
