"use client";
import { motion } from "framer-motion";
import { Check, ArrowRight, Star } from "lucide-react";

const plans = [
  {
    name: "Месяц",
    tagline: "Попробуй без обязательств",
    price: "490",
    perMonth: null,
    saving: null,
    period: "/ мес",
    features: [
      "До 5 устройств одновременно",
      "Серверы в 10+ странах",
      "Подключение за 10 минут",
      "Поддержка в Telegram",
    ],
    cta: "Купить за 490₽",
    highlight: false,
  },
  {
    name: "3 месяца",
    tagline: "Для тех, кто уже решил",
    price: "990",
    perMonth: "330₽/мес",
    saving: "Экономия 480₽",
    period: "/ 3 мес",
    badge: "Популярный",
    features: [
      "До 5 устройств одновременно",
      "Серверы в 10+ странах",
      "Резервный сервер автоматически",
      "Подключение за 10 минут",
      "Поддержка в Telegram",
    ],
    cta: "Купить за 990₽",
    highlight: true,
  },
  {
    name: "Год",
    tagline: "249₽/мес — дешевле кофе",
    price: "2 990",
    perMonth: "249₽/мес",
    saving: "Экономия 1 890₽",
    period: "/ год",
    features: [
      "До 5 устройств одновременно",
      "Серверы в 10+ странах",
      "Резервный сервер автоматически",
      "Подключение за 10 минут",
      "Поддержка в Telegram",
    ],
    cta: "Купить за 2 990₽",
    highlight: false,
  },
];

export default function SubscriptionPlans() {
  return (
    <section id="subscription" className="bg-[#f8fafc] py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-12">
          <span
            className="text-xs font-medium text-[#EA580C] uppercase tracking-widest mb-3 block"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            // подписка
          </span>
          <h2
            className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight mb-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Готовый VPN — быстро и без возни
          </h2>
          <p className="text-slate-500 text-lg max-w-xl">
            Подключаешься за 10 минут. Работает на всех устройствах. Никаких настроек с нуля — мы всё сделали за тебя.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map(({ name, tagline, price, perMonth, saving, period, badge, features, cta, highlight }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`relative rounded-2xl p-8 flex flex-col ${
                highlight
                  ? "bg-[#0f1b2d] ring-2 ring-[#EA580C] shadow-2xl shadow-orange-900/20"
                  : "bg-white shadow-lg shadow-slate-200/80 hover:shadow-xl transition-shadow"
              }`}
            >
              {badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 bg-[#EA580C] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
                    <Star className="w-3 h-3 fill-current" />
                    {badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <div className={`text-xs font-medium uppercase tracking-widest mb-1 ${highlight ? "text-slate-400" : "text-slate-400"}`}
                  style={{ fontFamily: "var(--font-mono)" }}>
                  {name}
                </div>
                <div className={`text-sm mb-4 ${highlight ? "text-slate-300" : "text-slate-500"}`}>
                  {tagline}
                </div>
                <div className="flex items-end gap-1 mb-1">
                  <span className={`text-5xl font-black ${highlight ? "text-white" : "text-slate-900"}`}
                    style={{ fontFamily: "var(--font-display)" }}>
                    {price}₽
                  </span>
                  <span className={`text-sm mb-2 ${highlight ? "text-slate-400" : "text-slate-400"}`}>{period}</span>
                </div>
                <div className="h-10 flex flex-col justify-center gap-0.5">
                  {perMonth && <div className={`text-sm font-medium ${highlight ? "text-slate-300" : "text-slate-500"}`}>{perMonth}</div>}
                  {saving && <div className="text-sm font-bold text-green-500">{saving}</div>}
                </div>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {features.map((f) => (
                  <li key={f} className={`flex items-center gap-2.5 text-sm ${highlight ? "text-slate-200" : "text-slate-600"}`}>
                    <Check className="w-4 h-4 flex-shrink-0 text-[#EA580C]" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-2">
                <a
                  href={`${process.env.NEXT_PUBLIC_BOT_URL || '#order-form'}`}
                  target={process.env.NEXT_PUBLIC_BOT_URL ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2 font-bold py-3.5 rounded-lg text-sm uppercase tracking-wide transition-colors bg-[#EA580C] hover:bg-[#C2410C] text-white shadow-md shadow-orange-900/20"
                >
                  {cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#order-form"
                  className={`text-center text-xs font-medium transition-colors ${highlight ? "text-slate-400 hover:text-slate-200" : "text-slate-400 hover:text-slate-600"}`}
                >
                  или оставить заявку
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-slate-400 text-sm mt-6">
          Оплата: карта РФ/BY · USDT · Крипто · Автопродление, отмена в любой момент
        </p>
      </div>
    </section>
  );
}
