"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const groups = [
  {
    label: "Про подписку",
    faqs: [
      {
        q: "Сколько устройств можно подключить по подписке?",
        a: "До 5 устройств одновременно. Можно переключаться между iPhone, Android, ноутбуком — всё работает параллельно.",
      },
      {
        q: "Нужно ли что-то настраивать самому?",
        a: "Нет. После оплаты бот присылает готовый файл конфигурации — открываешь его в бесплатном приложении OpenVPN Connect, и всё работает.",
      },
      {
        q: "Можно ли отменить подписку?",
        a: "Да, автосписаний нет — ты сам решаешь, продлевать или нет. Доступ сохраняется до конца оплаченного периода.",
      },
    ],
  },
  {
    label: "Оплата и подключение",
    faqs: [
      {
        q: "Как оплатить?",
        a: "Прямо в Telegram-боте: выбираешь период, оплачиваешь по реквизитам и сразу получаешь конфиг. Без регистраций и лишних форм.",
      },
      {
        q: "Как быстро я подключусь?",
        a: "Обычно 10 минут: оплата → скачал конфиг → открыл в приложении → готово. Работает на Windows, macOS, Android, iOS и Linux.",
      },
      {
        q: "Что если возникнут вопросы?",
        a: "Поддержка в Telegram поможет с подключением на любом устройстве.",
      },
    ],
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="faq" className="bg-[#F3EFE4] py-24 px-6">
      <div className="max-w-[760px] mx-auto">
        <div className="mb-12">
          <span
            className="text-xs text-[#A17B12] uppercase tracking-[0.1em] mb-3 block"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            // частые вопросы
          </span>
          <h2
            className="text-[clamp(30px,4.2vw,42px)] font-bold tracking-[-0.02em] text-[#1C1A16]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            FAQ
          </h2>
        </div>

        <div className="space-y-8">
          {groups.map(({ label, faqs }) => (
            <div key={label}>
              <div
                className="text-[11px] font-semibold text-[#9C927D] uppercase tracking-[0.1em] mb-3 px-1"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {label}
              </div>
              <div className="space-y-2">
                {faqs.map((faq, i) => {
                  const key = `${label}-${i}`;
                  return (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="rounded-[10px] border border-[#1C1A16]/[0.12] overflow-hidden bg-white"
                    >
                      <button
                        onClick={() => setOpen(open === key ? null : key)}
                        className="w-full flex justify-between items-center px-[22px] py-[18px] text-left"
                      >
                        <span className="font-bold text-[#1C1A16] pr-4 text-[15px]">{faq.q}</span>
                        <span className="shrink-0 text-[#9C927D]">
                          {open === key ? <Minus className="w-[18px] h-[18px]" /> : <Plus className="w-[18px] h-[18px] text-[#A17B12]" />}
                        </span>
                      </button>
                      <AnimatePresence initial={false}>
                        {open === key && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <p className="px-[22px] pb-5 text-[#6B6152] text-sm leading-relaxed border-t border-[#1C1A16]/[0.06] pt-3.5">
                              {faq.a}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
