"use client";
import { useState, useEffect } from "react";
import { Shield } from "lucide-react";

const links = [
  { label: "Подписка", href: "#subscription" },
  { label: "Личный сервер", href: "#personal-server" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0f1b2d]/98 shadow-lg shadow-black/20" : "bg-[#0f1b2d]/90"
      } backdrop-blur-md`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <Shield className="w-6 h-6 text-[#EA580C]" />
          <span
            className="text-white font-bold text-lg tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            VPN<span className="text-[#EA580C]">Сервис</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-slate-300 hover:text-white text-sm font-medium transition-colors"
            >
              {label}
            </a>
          ))}
        </div>

        <a
          href="#order-form"
          className="bg-[#EA580C] hover:bg-[#C2410C] text-white font-bold px-5 py-2.5 rounded-lg text-sm transition-colors shadow-md shadow-orange-900/30"
        >
          Подключить
        </a>
      </div>
    </nav>
  );
}
