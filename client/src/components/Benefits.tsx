import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";
import { CheckCircle2, DollarSign, Clock, Truck } from "lucide-react";

const getIcon = (name: string) => {
  switch (name) {
    case "CheckCircle2": return <CheckCircle2 className="w-6 h-6" />;
    case "DollarSign": return <DollarSign className="w-6 h-6" />;
    case "Clock": return <Clock className="w-6 h-6" />;
    case "Truck": return <Truck className="w-6 h-6" />;
    default: return <CheckCircle2 className="w-6 h-6" />;
  }
};

export function Benefits() {
  return (
    <section className="py-20 bg-background relative z-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            {siteContent.benefits.heading}
          </h2>
          <p className="text-lg text-muted-foreground">
            {siteContent.benefits.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {siteContent.benefits.items.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute bottom-0 left-0 h-1 w-full bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
              
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                {getIcon(benefit.icon)}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
