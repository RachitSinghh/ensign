import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteContent } from "@/data/siteContent";
import { HelpCircle, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id={siteContent.faq.sectionId} className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            {siteContent.faq.heading}
          </h2>
          <p className="text-lg text-muted-foreground">
            {siteContent.faq.subheading}
          </p>
        </div>

        <div className="space-y-4">
          {siteContent.faq.items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={cn(
                  "border rounded-2xl overflow-hidden transition-colors duration-300",
                  isOpen ? "bg-muted/30 border-primary/30" : "bg-card border-border hover:border-primary/20"
                )}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex items-center justify-between w-full p-6 text-left"
                >
                  <div className="flex items-center gap-4">
                    <HelpCircle className={cn("w-6 h-6 shrink-0 transition-colors", isOpen ? "text-primary" : "text-muted-foreground")} />
                    <span className="font-semibold text-foreground pr-4">{item.question}</span>
                  </div>
                  <ChevronDown className={cn("w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300", isOpen && "rotate-180")} />
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-0 ml-10 text-muted-foreground leading-relaxed">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
