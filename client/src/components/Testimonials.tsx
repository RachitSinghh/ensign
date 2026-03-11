import { siteContent } from "@/data/siteContent";
import { Star } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

export function Testimonials() {
  const [emblaRef] = useEmblaCarousel({ dragFree: true });

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className={`w-4 h-4 ${i < rating ? "fill-primary text-primary" : "fill-muted text-muted"}`} />
    ));
  };

  const getInitials = (name: string) => {
    return name.split(" ").map(n => n[0]).join("").substring(0, 2);
  };

  return (
    <section className="py-24 bg-card border-y border-border overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            {siteContent.testimonials.heading}
          </h2>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-3 gap-8">
          {siteContent.testimonials.desktop.map((item) => (
            <div key={item.id} className="bg-background p-8 rounded-2xl border border-border/50 shadow-sm flex flex-col justify-between h-[280px]">
              <div>
                <div className="flex gap-1 mb-6">
                  {renderStars(item.rating)}
                </div>
                <p className="text-muted-foreground italic leading-relaxed text-lg line-clamp-4">
                  "{item.quote}"
                </p>
              </div>
              <div className="flex items-center gap-4 mt-6 pt-6 border-t border-border">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg">
                  {getInitials(item.author)}
                </div>
                <div>
                  <div className="font-bold text-foreground">{item.author}</div>
                  <div className="text-sm text-muted-foreground">{item.title}, {item.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="md:hidden -mx-4 px-4" ref={emblaRef}>
          <div className="flex gap-4 pb-8">
            {siteContent.testimonials.mobile.map((item) => (
              <div key={item.id} className="flex-[0_0_85%] min-w-0 bg-background p-6 rounded-2xl border border-border/50 shadow-sm flex flex-col justify-between min-h-[220px]">
                <div>
                  <div className="flex gap-1 mb-4">
                    {renderStars(item.rating)}
                  </div>
                  <p className="text-muted-foreground italic">"{item.quote}"</p>
                </div>
                <div className="mt-4 pt-4 border-t border-border">
                  <div className="font-bold text-foreground">{item.author}</div>
                  <div className="text-xs text-muted-foreground">{item.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
