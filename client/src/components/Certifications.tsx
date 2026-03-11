import { siteContent } from "@/data/siteContent";

export function Certifications() {
  return (
    <section className="py-12 bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-muted-foreground tracking-widest uppercase mb-8">
          {siteContent.certifications.heading}
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {siteContent.certifications.items.map((cert, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              {/* Fallback to simple text boxes since images might not exist */}
              <div className="h-12 flex items-center justify-center font-display font-bold text-xl text-foreground">
                {cert.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
