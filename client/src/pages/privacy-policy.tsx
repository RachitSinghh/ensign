import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow pt-32 pb-24 container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-display font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-lg dark:prose-invert">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2>Information We Collect</h2>
          <p>When you fill out our catalog request form, we collect your Full Name, Email Address, Location, and any additional information you provide in your message.</p>
          
          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide you with the requested catalogs and pricing information.</li>
            <li>Communicate with you regarding your B2B manufacturing needs.</li>
            <li>Improve our website and customer service.</li>
          </ul>

          <h2>Data Security</h2>
          <p>We implement appropriate security measures to maintain the safety of your personal information. We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties.</p>

          <h2>Contact Us</h2>
          <p>If you have any questions regarding this privacy policy, you may contact us using the information on our Contact page.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
