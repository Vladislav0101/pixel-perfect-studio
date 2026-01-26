import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { Process } from "@/components/home/Process";
import { Testimonials } from "@/components/home/Testimonials";
import { CTA } from "@/components/home/CTA";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <Process />
      <Testimonials />
      <CTA />
    </Layout>
  );
};

export default Index;
