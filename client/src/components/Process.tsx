import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";
import { FileText, MessageSquare, Rocket } from "lucide-react";

const getIcon = (name: string) => {
  switch (name) {
    case "FileText": return <FileText className="w-8 h-8" />;
    case "MessageSquare": return <MessageSquare className="w-8 h-8" />;
    case "Rocket": return <Rocket className="w-8 h-8" />;
    default: return <FileText className="w-8 h-8" />;
  }
};

export function Process() {
  return (
    <section className="py-24 bg-[#FFF8E8] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            {siteContent.process.heading}
          </h2>
          <p className="text-lg text-foreground/70">
            {siteContent.process.subheading}
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting line (Desktop only) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-primary/20 -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {siteContent.process.steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Number Badge */}
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center border-4 border-[#FFF8E8] shadow-sm z-20">
                  {step.number}
                </div>

                <div className="bg-card w-full rounded-2xl p-8 pt-12 shadow-lg border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-primary"></div>
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                    {getIcon(step.icon)}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center text-foreground/60 max-w-lg mx-auto">
          {siteContent.process.footerNote}
        </div>
      </div>
    </section>
  );
}
