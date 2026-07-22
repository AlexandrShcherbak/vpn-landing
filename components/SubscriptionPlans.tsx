"use client";
import { motion } from "framer-motion";
import { Check, ArrowRight, Star } from "lucide-react";

const botLink = process.env.NEXT_PUBLIC_BOT_URL || "https://telegram.me/wireguard_easy_buy_bot";

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
    <section id="subscription" className="bg-[#EAE3D2] py-24 px-6">
      <div className="max-w-[1280px] mx-auto">
        <div className="mb-12">
          <span
            className="text-xs text-[#A17B12] uppercase tracking-[0.1em] mb-3 block"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            // подписка
          </span>
          <h2
            className="text-[clamp(30px,4.2vw,42px)] font-bold tracking-[-0.02em] text-[#1C1A16] mb-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Готовый VPN — быстро и без возни
          </h2>
          <p className="text-[#6B6152] text-[17px] max-w-xl">
            Подключаешься за 10 минут. Работает на всех устройствах. Никаких настроек с нуля — мы всё сделали за тебя.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {plans.map(({ name, tagline, price, perMonth, saving, period, badge, features, cta, highlight }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`relative rounded-xl p-9 flex flex-col border ${
                highlight
                  ? "bg-[#1C2027] border-[#D4A72C]/40 shadow-2xl shadow-black/20"
                  : "bg-white border-[#1C1A16]/[0.09]"
              }`}
            >
              {badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 bg-[#D4A72C] text-[#1C1A16] text-xs font-bold px-4 py-1.5 rounded-full">
                    <Star className="w-3 h-3 fill-current" />
                    {badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <div
                  className={`text-[11px] uppercase tracking-[0.1em] mb-1.5 ${highlight ? "text-[#8B909A]" : "text-[#9C927D]"}`}
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {name}
                </div>
                <div className={`text-sm mb-4 ${highlight ? "text-[#C4C8CE]" : "text-[#6B6152]"}`}>{tagline}</div>
                <div className="flex items-end gap-1 mb-1">
                  <span
                    className={`text-[42px] font-bold ${highlight ? "text-[#F3EFE4]" : "text-[#1C1A16]"}`}
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {price}₽
                  </span>
                  <span className={`text-sm mb-2 ${highlight ? "text-[#8B909A]" : "text-[#9C927D]"}`}>{period}</span>
                </div>
                <div className="h-10 flex flex-col justify-center gap-0.5">
                  {perMonth && (
                    <div className={`text-sm font-medium ${highlight ? "text-[#C4C8CE]" : "text-[#6B6152]"}`}>{perMonth}</div>
                  )}
                  {saving && <div className="text-sm font-bold text-[#7C9473]">{saving}</div>}
                </div>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {features.map((f) => (
                  <li key={f} className={`flex items-center gap-2.5 text-sm ${highlight ? "text-[#E5DFC9]" : "text-[#4A4335]"}`}>
                    <Check className="w-4 h-4 shrink-0 text-[#A17B12]" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={botLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 font-bold py-3.5 rounded-lg text-[13px] uppercase tracking-[0.05em] bg-[#D4A72C] text-[#1C1A16] no-underline"
              >
                {cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-[#9C927D] text-[13px] mt-8">
          Оплата прямо в Telegram-боте · без автосписаний · продлеваешь когда удобно
        </p>
      </div>
    </section>
  );
}
