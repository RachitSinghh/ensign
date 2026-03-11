import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";
import { ArrowRight } from "lucide-react";

export function ProductCategory() {
  return (
    <section id={siteContent.productCategories.sectionId} className="py-24 bg-muted/50 border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4"
          >
            {siteContent.productCategories.heading}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            {siteContent.productCategories.subheading}
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {siteContent.productCategories.categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.1 }}
              className="group cursor-pointer"
              onClick={() => document.getElementById("contact")?.scrollIntoView({behavior: "smooth"})}
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-card border border-border shadow-sm mb-4">
                {/* Fallback unsplash images for demo */}
                <img 
                  src={`https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&q=80&auto=format&fit=crop`}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <h3 className="text-center font-medium text-foreground group-hover:text-primary transition-colors">
                {cat.name}
              </h3>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button 
            onClick={() => document.getElementById("contact")?.scrollIntoView({behavior: "smooth"})}
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors group"
          >
            {siteContent.productCategories.ctaText}
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
