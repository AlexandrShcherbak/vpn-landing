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
        q: "Можно ли отменить подписку?",
        a: "Да, в любой момент прямо в боте. Доступ сохраняется до конца оплаченного периода.",
      },
    ],
  },
  {
    label: "Про личный сервер",
    faqs: [
      {
        q: "Чем личный сервер лучше подписки?",
        a: "По подписке ты пользуешься общим сервером — быстро и дёшево, но сервер делишь с другими. Личный сервер — только для тебя: полный контроль, безлимит устройств.",
      },
      {
        q: "Нужны ли технические знания?",
        a: "Нет. Ты говоришь боту страну и бюджет — мы настраиваем всё сами и присылаем понятные инструкции.",
      },
    ],
  },
  {
    label: "Общие вопросы",
    faqs: [
      {
        q: "Как оплатить?",
        a: "Прямо в Telegram-боте: карты РФ/BY, USDT, другие криптовалюты.",
      },
      {
        q: "Что если сервер упадёт?",
        a: "По подписке бот автоматически переключит на резервный сервер. Для личного сервера — поддержка в Telegram 24/7.",
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
