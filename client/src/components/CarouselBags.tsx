import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { siteContent } from "@/data/siteContent";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CarouselBags() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000 })]);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="z-10"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wider mb-6">
              {siteContent.hero.tagline}
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-foreground leading-tight mb-6">
              {siteContent.hero.headline}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
              {siteContent.hero.subheadline}
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={scrollToContact}
                className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
              >
                {siteContent.hero.ctaPrimary.label}
                <ArrowRight size={18} />
              </button>
              <button 
                onClick={() => document.getElementById("ourproduct")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-4 bg-background text-foreground border-2 border-border font-semibold rounded-full hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
              >
                {siteContent.hero.ctaSecondary.label}
              </button>
            </div>
          </motion.div>

          {/* Desktop Carousel / Mobile Stack */}
          <div className="relative">
            {/* Decorative blob behind images */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/10 rounded-full blur-3xl -z-10"></div>
            
            {/* Desktop Embla Carousel */}
            <div className="hidden lg:block overflow-hidden rounded-2xl shadow-2xl" ref={emblaRef}>
              <div className="flex">
                {siteContent.hero.carouselImages.map((img, i) => (
                  <div className="flex-[0_0_100%] min-w-0 relative aspect-[4/5] sm:aspect-[3/2] bg-muted" key={i}>
                    {/* Placeholder image using unsplash if the local path is not found in public */}
                    <img 
                      src={`https://images.unsplash.com/photo-1584916201218-f4242ceb4809?w=800&q=80`} 
                      alt={img.alt}
                      className="absolute inset-0 w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback logic could go here if using actual public images
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Stacked View */}
            <div className="lg:hidden flex flex-col gap-6">
              {siteContent.hero.carouselImages.map((img, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  key={i} 
                  className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3] relative bg-muted"
                >
                  <img 
                    src={`https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80`} 
                    alt={img.alt}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
