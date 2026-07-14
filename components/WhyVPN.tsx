"use client";
import { motion } from "framer-motion";

const items = [
  {
    num: "01",
    title: "Обходит любые блокировки",
    body: "Instagram, YouTube, Spotify — работает даже там, где другие VPN уже заблокировали.",
  },
  {
    num: "02",
    title: "Только твои данные",
    body: "Мы не собираем логи. Никто не видит что ты смотришь или куда ходишь.",
  },
  {
    num: "03",
    title: "Быстро и стабильно",
    body: "Серверы не переполнены. Скорость до 500 Мбит/с — не заметишь разницы.",
  },
  {
    num: "04",
    title: "Всегда на связи",
    body: "Поддержка в Telegram. Что-то сломалось — напиши, починим.",
  },
];

export default function WhyVPN() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-12">
          <span
            className="text-xs font-medium text-[#EA580C] uppercase tracking-widest mb-3 block"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            // почему мы
          </span>
          <h2
            className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ваш VPN, ваши правила
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ num, title, body }, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow p-8 overflow-hidden group"
            >
              <div
                className="absolute bottom-0 right-0 text-[100px] font-black text-slate-100 leading-none select-none pointer-events-none translate-x-4 translate-y-4 group-hover:text-[#EA580C]/10 transition-colors"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {num}
              </div>
              <div className="relative">
                <div className="text-2xl font-black text-[#EA580C] mb-4" style={{ fontFamily: "var(--font-mono)" }}>
                  {num}
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3 uppercase tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                  {title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
