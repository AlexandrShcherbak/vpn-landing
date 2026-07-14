"use client";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Users, Server, Lock } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0f1b2d] flex flex-col justify-between overflow-hidden pt-16">
      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#1e3a5f]/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#EA580C]/5 rounded-full blur-[100px]" />
      </div>

      {/* Main content */}
      <div className="relative px-6 md:px-12 max-w-7xl mx-auto w-full py-20 flex-1 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span
            className="inline-flex items-center gap-1.5 font-mono text-xs bg-green-500/10 text-green-400 border border-green-500/20 px-3 py-1 rounded-full"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            Серверы работают · Подключение от 15 минут
          </span>
        </motion.div>

        <div className="overflow-hidden mb-2">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="text-[clamp(44px,7.5vw,104px)] font-black leading-[0.9] tracking-[-0.03em] text-white uppercase"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Твой интернет —
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-6">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, delay: 0.07, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="text-[clamp(44px,7.5vw,104px)] font-black leading-[0.9] tracking-[-0.03em] text-[#EA580C] uppercase"
            style={{ fontFamily: "var(--font-display)" }}
          >
            твои правила.
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="max-w-lg text-slate-300 text-lg leading-relaxed mb-10"
        >
          Два способа выйти за рамки блокировок. Выбери то, что подходит именно тебе.
        </motion.p>

        {/* Two service paths */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="grid sm:grid-cols-2 gap-4 max-w-2xl"
        >
          {/* Path 1: Subscription */}
          <a
            href="#subscription"
            className="group relative bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#EA580C]/40 rounded-2xl p-6 transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-medium text-slate-400 uppercase tracking-widest" style={{ fontFamily: "var(--font-mono)" }}>
                Подписка
              </span>
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-[#EA580C] group-hover:translate-x-1 transition-all" />
            </div>
            <div className="text-2xl font-black text-white mb-1" style={{ fontFamily: "var(--font-display)" }}>
              от 490₽/мес
            </div>
            <div className="space-y-2 mt-4">
              {[
                { icon: Clock, text: "Готово за 10 минут" },
                { icon: Users, text: "До 5 устройств" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-sm text-slate-300">
                  <Icon className="w-3.5 h-3.5 text-[#EA580C]" />
                  {text}
                </div>
              ))}
            </div>
          </a>

          {/* Path 2: Personal server */}
          <a
            href="#personal-server"
            className="group relative bg-[#EA580C]/10 hover:bg-[#EA580C]/15 border border-[#EA580C]/30 hover:border-[#EA580C]/60 rounded-2xl p-6 transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-medium text-orange-300 uppercase tracking-widest" style={{ fontFamily: "var(--font-mono)" }}>
                Личный сервер
              </span>
              <ArrowRight className="w-4 h-4 text-orange-400 group-hover:translate-x-1 transition-transform" />
            </div>
            <div className="text-2xl font-black text-white mb-1" style={{ fontFamily: "var(--font-display)" }}>
              от 4 990₽
            </div>
            <div className="space-y-2 mt-4">
              {[
                { icon: Server, text: "Только ты, никто другой" },
                { icon: Lock, text: "Безлимит устройств" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-sm text-slate-200">
                  <Icon className="w-3.5 h-3.5 text-[#EA580C]" />
                  {text}
                </div>
              ))}
            </div>
          </a>
        </motion.div>
      </div>

      {/* Bottom stats bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="relative border-t border-white/10 grid grid-cols-3"
      >
        {[
          { value: "500+", label: "Мбит/с скорость" },
          { value: "0", label: "логов данных" },
          { value: "10+", label: "стран серверов" },
        ].map(({ value, label }, i) => (
          <div key={label} className={`px-6 md:px-12 py-6 ${i < 2 ? "border-r border-white/10" : ""}`}>
            <div className="text-3xl md:text-4xl font-black text-white" style={{ fontFamily: "var(--font-display)" }}>
              {value}
            </div>
            <div className="text-xs text-slate-500 uppercase tracking-widest mt-1" style={{ fontFamily: "var(--font-mono)" }}>
              {label}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
