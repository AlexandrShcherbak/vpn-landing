import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LeadMagnet from "@/components/LeadMagnet";
import SubscriptionPlans from "@/components/SubscriptionPlans";
import PersonalServer from "@/components/PersonalServer";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <LeadMagnet />
      <SubscriptionPlans />
      <PersonalServer />
      <HowItWorks />
      <FAQ />
      <FinalCTA />
      <footer className="bg-[#1C2027] border-t border-[#F3EFE4]/[0.08] py-8 px-6 text-center">
        <span className="text-[13px] text-[#6E7280]" style={{ fontFamily: "var(--font-mono)" }}>
          © {new Date().getFullYear()} VPN Сервис. Все права защищены.
        </span>
      </footer>
    </main>
  );
}
