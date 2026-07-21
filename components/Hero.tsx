"use client";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Users, Server, Lock } from "lucide-react";

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
          className="max-w-[480px] text-[#A9AEB6] text-lg leading-relaxed mb-10"
        >
          Два способа выйти за рамки блокировок. Выбери то, что подходит именно тебе.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="grid grid-cols-2 gap-4 max-w-[640px]"
        >
          <a
            href="#subscription"
            className="relative bg-[#F3EFE4]/[0.04] hover:bg-[#F3EFE4]/[0.07] border border-[#F3EFE4]/10 rounded-[10px] p-6 no-underline transition-colors block"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] text-[#8B909A] uppercase tracking-[0.1em]" style={{ fontFamily: "var(--font-mono)" }}>
                Подписка
              </span>
              <ArrowRight className="w-4 h-4 text-[#8B909A]" />
            </div>
            <div className="font-bold text-[27px] text-[#F3EFE4] mb-3" style={{ fontFamily: "var(--font-display)" }}>
              от 490₽/мес
            </div>
            <div className="space-y-1.5">
              {[
                { icon: Clock, text: "Готово за 10 минут" },
                { icon: Users, text: "До 5 устройств" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-[13px] text-[#C4C8CE]">
                  <Icon className="w-3.5 h-3.5 text-[#D4A72C]" />
                  {text}
                </div>
              ))}
            </div>
          </a>

          <a
            href="#personal-server"
            className="relative bg-[#D4A72C]/10 hover:bg-[#D4A72C]/[0.14] border border-[#D4A72C]/35 rounded-[10px] p-6 no-underline transition-colors block"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] text-[#E3BE5C] uppercase tracking-[0.1em]" style={{ fontFamily: "var(--font-mono)" }}>
                Личный сервер
              </span>
              <ArrowRight className="w-4 h-4 text-[#E3BE5C]" />
            </div>
            <div className="font-bold text-[27px] text-[#F3EFE4] mb-3" style={{ fontFamily: "var(--font-display)" }}>
              от 4 990₽
            </div>
            <div className="space-y-1.5">
              {[
                { icon: Server, text: "Только ты, никто другой" },
                { icon: Lock, text: "Безлимит устройств" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-[13px] text-[#E5DFC9]">
                  <Icon className="w-3.5 h-3.5 text-[#E3BE5C]" />
                  {text}
                </div>
              ))}
            </div>
          </a>
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
