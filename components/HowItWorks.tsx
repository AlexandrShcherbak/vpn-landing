"use client";
import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Выбери вариант",
    desc: "Подписка — если нужно быстро и недорого. Личный сервер — если важна максимальная приватность и безлимит устройств.",
  },
  {
    num: "02",
    title: "Оставь заявку",
    desc: "Укажи имя и Telegram в форме ниже. Ответим в течение 15 минут и уточним детали.",
  },
  {
    num: "03",
    title: "Готово к работе",
    desc: "Пришлём инструкции по подключению для каждого твоего устройства. Поможем если что-то пойдёт не так.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#f8fafc] py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-12">
          <span
            className="text-xs font-medium text-[#EA580C] uppercase tracking-widest mb-3 block"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            // как это работает
          </span>
          <h2
            className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Три шага до свободы
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map(({ num, title, desc }, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="relative bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow p-8 md:p-10 overflow-hidden group"
            >
              <div
                className="absolute bottom-0 right-0 text-[100px] font-black text-slate-100 leading-none select-none pointer-events-none translate-x-4 translate-y-4 group-hover:text-[#EA580C]/10 transition-colors"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {num}
              </div>
              <div className="relative">
                <div
                  className="text-3xl font-black text-[#EA580C] mb-5"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {num}
                </div>
                <h3
                  className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
