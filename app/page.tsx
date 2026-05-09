import Hero from "@/components/Hero";
import WhyVPN from "@/components/WhyVPN";
import Plans from "@/components/Plans";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import OrderForm from "@/components/OrderForm";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyVPN />
      <Plans />
      <HowItWorks />
      <FAQ />
      <OrderForm />
      <footer className="bg-slate-950 text-slate-500 text-sm text-center py-6">
        © {new Date().getFullYear()} VPN Сервис. Все права защищены.
      </footer>
    </main>
  );
}
