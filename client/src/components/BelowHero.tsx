import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";
import { ShieldCheck, Globe, PenTool, Leaf } from "lucide-react";

// Mapping feature icons since paths might be broken
const getIcon = (index: number) => {
  const icons = [ShieldCheck, Globe, PenTool, Leaf];
  const Icon = icons[index % icons.length];
  return <Icon className="w-8 h-8 text-primary" />;
};

export function BelowHero() {
  return (
    <section className="py-12 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
          {siteContent.features.items.map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center px-4"
            >
              <div className="mb-4 p-3 bg-white/5 rounded-full">
                {getIcon(i)}
              </div>
              <h3 className="font-display font-semibold text-lg mb-1">{feature.title}</h3>
              <p className="text-sm text-secondary-foreground/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
