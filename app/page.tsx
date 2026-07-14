import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyVPN from "@/components/WhyVPN";
import SubscriptionPlans from "@/components/SubscriptionPlans";
import PersonalServer from "@/components/PersonalServer";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import OrderForm from "@/components/OrderForm";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhyVPN />
      <SubscriptionPlans />
      <PersonalServer />
      <HowItWorks />
      <FAQ />
      <OrderForm />
      <footer className="bg-[#0f1b2d] border-t border-white/10 text-slate-500 text-sm text-center py-8">
        © {new Date().getFullYear()} VPN Сервис. Все права защищены.
      </footer>
    </main>
  );
}
