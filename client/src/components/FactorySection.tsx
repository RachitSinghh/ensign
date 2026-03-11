import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";
import { Package, Scissors, Wrench, RotateCcw, Warehouse } from "lucide-react";

const getIcon = (name: string) => {
  switch (name) {
    case "Package": return <Package className="w-8 h-8" />;
    case "Scissors": return <Scissors className="w-8 h-8" />;
    case "Wrench": return <Wrench className="w-8 h-8" />;
    case "RotateCcw": return <RotateCcw className="w-8 h-8" />;
    case "Warehouse": return <Warehouse className="w-8 h-8" />;
    default: return <Wrench className="w-8 h-8" />;
  }
};

export function FactorySection() {
  return (
    <section className="py-24 bg-secondary text-secondary-foreground relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            {siteContent.factory.heading}
          </h2>
          <p className="text-lg text-secondary-foreground/70">
            {siteContent.factory.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteContent.factory.stations.map((station, i) => (
            <motion.div
              key={station.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-black/50 border border-white/10"
            >
              <img 
                src={`https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80`} 
                alt={station.title}
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 group-hover:opacity-40 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="text-primary mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {getIcon(station.icon)}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{station.title}</h3>
                <p className="text-sm text-white/70 opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-300">
                  {station.description}
                </p>
                <div className="h-0.5 w-0 bg-primary mt-4 group-hover:w-full transition-all duration-500 ease-out"></div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto backdrop-blur-sm"
        >
          <h3 className="text-2xl font-bold text-primary mb-4">{siteContent.factory.trustTitle}</h3>
          <p className="text-lg text-white/80 leading-relaxed">
            {siteContent.factory.trustDescription}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
