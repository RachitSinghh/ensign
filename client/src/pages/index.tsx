import { Header } from "@/components/Header";
import { CarouselBags } from "@/components/CarouselBags";
import { BelowHero } from "@/components/BelowHero";
import { AboutUs } from "@/components/AboutUs";
import { Benefits } from "@/components/Benefits";
import { ProductCategory } from "@/components/ProductCategory";
import { Process } from "@/components/Process";
import { FactorySection } from "@/components/FactorySection";
import { Testimonials } from "@/components/Testimonials";
import { CatalogueForm } from "@/components/CatalogueForm";
import { Faq } from "@/components/Faq";
import { Certifications } from "@/components/Certifications";
import { ExportInfoCard } from "@/components/ExportInfoCard";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <CarouselBags />
      <BelowHero />
      <AboutUs />
      <Benefits />
      <ProductCategory />
      <Process />
      <FactorySection />
      <Testimonials />
      <CatalogueForm />
      <Faq />
      <Certifications />
      <ExportInfoCard />
      <Footer />
    </main>
  );
}
