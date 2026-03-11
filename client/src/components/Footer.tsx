import { Link } from "wouter";
import { siteContent } from "@/data/siteContent";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case "facebook": return <Facebook size={20} />;
      case "instagram": return <Instagram size={20} />;
      case "linkedin": return <Linkedin size={20} />;
      case "youtube": return <Youtube size={20} />;
      default: return null;
    }
  };

  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      document.getElementById(href.substring(1))?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-secondary text-secondary-foreground py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-white/10 pb-10 mb-10">
          
          <div className="flex flex-col items-center md:items-start gap-4">
            <span className="font-display font-bold text-2xl text-white">
              {siteContent.brand.name}
            </span>
            <p className="text-secondary-foreground/70 text-sm text-center md:text-left max-w-xs">
              {siteContent.brand.tagline}
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
            {siteContent.footer.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScrollClick(e, link.href)}
                className="text-sm font-medium text-secondary-foreground/80 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {siteContent.footer.socialLinks.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                {getSocialIcon(social.platform)}
              </a>
            ))}
          </div>

        </div>

        <div className="text-center text-sm text-secondary-foreground/50">
          © {currentYear} {siteContent.brand.copyrightName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
