import { siteContent } from "@/data/siteContent";
import { Mail, MapPin } from "lucide-react";

export function ExportInfoCard() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-card rounded-3xl overflow-hidden shadow-2xl border border-border flex flex-col md:flex-row">
          
          <div className="w-full md:w-2/5 bg-muted relative min-h-[300px]">
            {/* Using a nice unsplash image of bags/leather for the export info card */}
            <img 
              src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80" 
              alt="Export Ready Bags" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-3xl font-display font-bold text-foreground mb-2">
              {siteContent.exportInfo.heading}
            </h2>
            <p className="text-muted-foreground mb-8">
              {siteContent.exportInfo.subheading}
            </p>

            <div className="space-y-6 mb-10">
              {siteContent.exportInfo.locations.map((loc, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{loc.label}</h4>
                    <p className="text-sm text-muted-foreground">{loc.address}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-border">
              <a 
                href={siteContent.exportInfo.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 px-6 rounded-xl font-semibold hover:bg-[#20bd5a] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 0C5.385 0 0 5.384 0 12.031c0 2.124.553 4.195 1.605 6.015L.178 24l6.105-1.597c1.761.944 3.737 1.442 5.748 1.442 6.646 0 12.031-5.384 12.031-12.031C24.062 5.384 18.677 0 12.031 0zm3.834 17.202c-.173.486-1.002.946-1.393.996-.39.05-1.066.075-2.924-.694-2.228-.925-3.666-3.21-3.774-3.353-.108-.144-.9-1.202-.9-2.29 0-1.09.566-1.626.772-1.84.207-.215.45-.27.601-.27.151 0 .302.001.436.007.144.008.337-.056.516.365.18.43.614 1.503.668 1.611.054.108.09.233.018.377-.072.144-.108.234-.216.36-.108.126-.233.269-.324.36-.108.108-.225.226-.1.406.126.18 1.054 1.714 2.454 2.493.424.236.758.377 1.042.483.427.158.815.136 1.118.082.34-.06.104-.694.945-1.365.14-.112.29-.092.396-.046.108.046.685.324 1.585.756.9.432 1.045.522 1.118.612.072.09.072.523-.101 1.009z"/></svg>
                WhatsApp Us
              </a>
              <a 
                href={siteContent.exportInfo.email.link}
                className="flex-1 flex items-center justify-center gap-2 bg-background border-2 border-border text-foreground py-3 px-6 rounded-xl font-semibold hover:border-primary/50 hover:bg-primary/5 transition-colors"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
