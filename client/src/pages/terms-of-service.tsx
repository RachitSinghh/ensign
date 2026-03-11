import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function TermsOfService() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow pt-32 pb-24 container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-display font-bold mb-8">Terms of Service</h1>
        <div className="prose prose-lg dark:prose-invert">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>Please read these Terms of Service carefully before using our website or engaging in business with Panoramic Exports.</p>
          
          <h2>1. Introduction</h2>
          <p>By accessing this website, you agree to be bound by these website Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>
          
          <h2>2. Business Operations</h2>
          <p>Panoramic Exports is a B2B manufacturer and exporter. All MOQs, pricing, and lead times provided via our communication channels are estimates and subject to final confirmation via a formal Proforma Invoice.</p>

          <h2>3. Intellectual Property</h2>
          <p>All content on this site, including images, text, and design assets, are the property of Panoramic Exports. Unauthorized use or reproduction is strictly prohibited.</p>

          <h2>4. Governing Law</h2>
          <p>Any claim relating to Panoramic Exports' web site shall be governed by the laws of India without regard to its conflict of law provisions.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
