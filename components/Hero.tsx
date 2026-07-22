"use client";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Users, Globe } from "lucide-react";

const botLink = process.env.NEXT_PUBLIC_BOT_URL || "https://telegram.me/wireguard_easy_buy_bot";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#1C2027] flex flex-col justify-between overflow-hidden pt-[68px]">
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(243,239,228,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(243,239,228,0.025) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative max-w-[1280px] mx-auto w-full px-6 py-[72px] flex-1 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span
            className="inline-flex items-center gap-2 text-xs bg-[#D4A72C]/10 text-[#E3BE5C] border border-[#D4A72C]/30 px-3.5 py-1.5 rounded-full w-fit"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            <span className="w-1.5 h-1.5 bg-[#E3BE5C] rounded-full" />
            Серверы работают · Подключение от 15 минут
          </span>
        </motion.div>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="text-[clamp(38px,6.8vw,86px)] font-extrabold leading-[1.0] tracking-[-0.03em] text-[#F3EFE4] m-0"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Интернет без границ,
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-7">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, delay: 0.07, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="text-[clamp(38px,6.8vw,86px)] font-extrabold leading-[1.0] tracking-[-0.03em] text-[#D4A72C] m-0"
            style={{ fontFamily: "var(--font-display)" }}
          >
            без слежки.
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="max-w-[520px] text-[#A9AEB6] text-lg leading-relaxed mb-10"
        >
          Готовый VPN под ключ — без настроек и танцев с бубном. Подключись за 10 минут
          и открой YouTube, Instagram и любой заблокированный сайт.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <a
            href={botLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 bg-[#D4A72C] text-[#1C1A16] font-bold px-8 py-4 rounded-[10px] text-[15px] uppercase tracking-[0.04em] no-underline"
          >
            Подключить за 490₽/мес
            <ArrowRight className="w-[18px] h-[18px] group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#subscription"
            className="inline-flex items-center gap-2 text-[#C4C8CE] font-medium px-5 py-4 text-[15px] no-underline hover:text-[#F3EFE4] transition-colors"
          >
            Смотреть все тарифы
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-wrap gap-x-7 gap-y-2.5 mt-8"
        >
          {[
            { icon: Clock, text: "Готово за 10 минут" },
            { icon: Users, text: "До 5 устройств" },
            { icon: Globe, text: "Серверы в 10+ странах" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-[13px] text-[#A9AEB6]">
              <Icon className="w-4 h-4 text-[#D4A72C]" />
              {text}
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="relative border-t border-[#F3EFE4]/[0.08] grid grid-cols-3 max-w-[1280px] mx-auto w-full"
      >
        {[
          { value: "500+", label: "Мбит/с скорость" },
          { value: "0", label: "логов данных" },
          { value: "10+", label: "стран серверов" },
        ].map(({ value, label }, i) => (
          <div key={label} className={`px-6 py-6 ${i < 2 ? "border-r border-[#F3EFE4]/[0.08]" : ""}`}>
            <div className="font-bold text-3xl text-[#F3EFE4]" style={{ fontFamily: "var(--font-display)" }}>
              {value}
            </div>
            <div className="text-[11px] text-[#6E7280] uppercase tracking-[0.1em] mt-1" style={{ fontFamily: "var(--font-mono)" }}>
              {label}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
