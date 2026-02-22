import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface SecondaryButton {
  text: string;
  href: string;
}

interface CTAProps {
  className?: string;
  title: string;
  description: string;
  buttonText: string;
  secondaryButton?: SecondaryButton;
}

export function CTA({ className, title, description, buttonText, secondaryButton }: CTAProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className={className}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />

          {/* Content */}
          <div className="relative z-10 px-8 py-8 md:py-16 md:px-16 md:py-24 text-center">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground mb-6">
              {title}
            </h2>
            <p className="text-primary-foreground/90 text-lg md:text-xl max-w-2xl mx-auto mb-10">
              {description}
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <Button
                size="xl"
                className="w-full md:w-auto bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                asChild
              >
                <Link to="/contact">
                  {buttonText}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              {secondaryButton && (
                <Button
                  variant="heroOutline"
                  size="xl"
                  className="w-full md:w-auto border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  asChild
                >
                  <Link to={secondaryButton.href}>{secondaryButton.text}</Link>
                </Button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
