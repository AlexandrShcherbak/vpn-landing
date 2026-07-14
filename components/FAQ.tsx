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
        a: "Да, в любой момент. Доступ сохраняется до конца оплаченного периода. Деньги за остаток не возвращаем.",
      },
    ],
  },
  {
    label: "Про личный сервер",
    faqs: [
      {
        q: "Чем личный сервер лучше подписки?",
        a: "По подписке ты пользуешься общим сервером — быстро и дёшево, но сервер делишь с другими. Личный сервер — только для тебя: полный контроль, никаких соседей, безлимит устройств.",
      },
      {
        q: "Нужны ли технические знания для личного сервера?",
        a: "Нет. Ты говоришь нам страну и бюджет — мы настраиваем всё сами. После этого пришлём понятные инструкции для каждого устройства.",
      },
    ],
  },
  {
    label: "Общие вопросы",
    faqs: [
      {
        q: "Как оплатить?",
        a: "Принимаем карты РФ и BY, USDT, а также другие криптовалюты. Для подписки — автопродление, отменить можно в любой момент.",
      },
      {
        q: "Что будет, если сервер упадёт?",
        a: "По подписке — автоматически переключаем на резервный сервер в течение 15 минут. Для личного сервера — помогаем восстановить, поддержка в Telegram 24/7.",
      },
    ],
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="faq" className="bg-white py-20">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <div className="mb-12">
          <span
            className="text-xs font-medium text-[#EA580C] uppercase tracking-widest mb-3 block"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            // частые вопросы
          </span>
          <h2
            className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            FAQ
          </h2>
        </div>

        <div className="space-y-8">
          {groups.map(({ label, faqs }) => (
            <div key={label}>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 px-1" style={{ fontFamily: "var(--font-mono)" }}>
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
                      className="rounded-xl border border-slate-200 overflow-hidden bg-white"
                    >
                      <button
                        onClick={() => setOpen(open === key ? null : key)}
                        className="w-full flex justify-between items-center px-6 py-5 text-left hover:bg-slate-50 transition-colors"
                      >
                        <span className="font-bold text-slate-900 pr-4 text-base">{faq.q}</span>
                        <span className="flex-shrink-0 text-slate-400">
                          {open === key ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5 text-[#EA580C]" />}
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
                            <p className="px-6 pb-5 text-slate-500 text-sm leading-relaxed border-t border-slate-100 pt-4">{faq.a}</p>
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
