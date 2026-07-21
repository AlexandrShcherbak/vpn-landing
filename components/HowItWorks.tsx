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
    title: "Напиши боту",
    desc: "Открой @wireguard_easy_buy_bot в Telegram, выбери тариф и оплати — займёт пару минут.",
  },
  {
    num: "03",
    title: "Готово к работе",
    desc: "Бот пришлёт инструкции по подключению для каждого твоего устройства сразу после оплаты.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#EAE3D2] py-24 px-6">
      <div className="max-w-[1280px] mx-auto">
        <div className="mb-12">
          <span
            className="text-xs text-[#A17B12] uppercase tracking-[0.1em] mb-3 block"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            // как это работает
          </span>
          <h2
            className="text-[clamp(30px,4.2vw,42px)] font-bold tracking-[-0.02em] text-[#1C1A16]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Три шага до свободы
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {steps.map(({ num, title, desc }, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="relative bg-white rounded-[10px] border border-[#1C1A16]/[0.09] p-10 overflow-hidden"
            >
              <div
                className="absolute bottom-[-14px] right-[-6px] text-[96px] font-bold text-[#1C1A16]/[0.05] leading-none select-none pointer-events-none"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {num}
              </div>
              <div className="relative">
                <div className="font-bold text-[25px] text-[#A17B12] mb-5" style={{ fontFamily: "var(--font-display)" }}>
                  {num}
                </div>
                <h3
                  className="font-bold text-[21px] tracking-[-0.01em] text-[#1C1A16] mb-2.5"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {title}
                </h3>
                <p className="text-[#6B6152] text-sm leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
