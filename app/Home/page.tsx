import Hero from "../components/hero-home/Hero";
import Services from "../components/services/Services";
import WhyDrobi from "../components/whydrobi/WhyDrobi";
import HowItWorks from "../components/how-it-works/HowItWorks";
import JoinAsCaptain from "../components/join-as-captain/JoinAsCaptain";
import ContactSection from "../components/contact/ContactSection";
import SponsorsSection from "../components/Sponsors";
import FAQSection from "../components/faq/FAQSection";
import DownloadAppSection from "../components/download-app/DownloadAppSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white overflow-x-hidden">
      <Hero />

      <div id="services" className="w-full">
        <Services />
      </div>
      <div id="why-drobi" className="w-full">
        <WhyDrobi />
      </div>

      <HowItWorks />
      <JoinAsCaptain />

      <div id="contact" className="w-full">
        <ContactSection />
      </div>
      {/* <div id="sponsors" className="w-full">
        <SponsorsSection />
      </div> */}
      <div id="faq" className="w-full">
        <FAQSection />
      </div>

      <DownloadAppSection />
    </main>
  );
}
