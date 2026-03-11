import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";

export function AboutUs() {
  return (
    <section id={siteContent.about.sectionId} className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4"
          >
            {siteContent.about.heading}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            {siteContent.about.subheading}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Media */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-muted"
          >
            {/* placeholder video/image for factory worker */}
            <img 
              src="https://images.unsplash.com/photo-1544816155-12df9643f363?w=800&q=80" 
              alt="Craftsmanship" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
          </motion.div>

          {/* Right: Text & Stats */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            {siteContent.about.paragraphs.map((text, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed text-lg">
                {text}
              </p>
            ))}

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8 pt-8 border-t border-border">
              {siteContent.about.stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-3xl font-display font-bold text-primary mb-1">{stat.value}</span>
                  <span className="text-sm font-medium text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
