"use client";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const botLink = process.env.NEXT_PUBLIC_BOT_URL || "https://telegram.me/wireguard_easy_buy_bot";

const features = [
  "1 устройство (1 конфиг)",
  "Серверы в 10+ странах",
  "Резервный сервер автоматически",
  "Подключение за 10 минут",
  "Поддержка в Telegram",
];

export default function SubscriptionPlans() {
  return (
    <section id="subscription" className="bg-[#E1EDF7] py-24 px-6">
      <div className="max-w-[1280px] mx-auto">
        <div className="mb-12 text-center">
          <span
            className="text-xs text-[#2E63C7] uppercase tracking-[0.1em] mb-3 block"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            // подписка
          </span>
          <h2
            className="text-[clamp(30px,4.2vw,42px)] font-bold tracking-[-0.02em] text-[#071019] mb-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Готовый VPN — быстро и без возни
          </h2>
          <p className="text-[#4C6478] text-[17px] max-w-xl mx-auto">
            Подключаешься за 10 минут. Никаких настроек с нуля — мы всё сделали за тебя.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-[440px] mx-auto relative rounded-xl p-10 flex flex-col border bg-[#060B16] border-[#3E8EF7]/40 shadow-2xl shadow-black/20"
        >
          <div className="mb-6">
            <div
              className="text-[11px] uppercase tracking-[0.1em] mb-1.5 text-[#7C93A8]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Полгода доступа
            </div>
            <div className="text-sm mb-4 text-[#C7D9E6]">Одна цена — всё включено</div>
            <div className="flex items-end gap-1.5 mb-1">
              <span
                className="text-[52px] font-bold text-[#EAF3FB] leading-none"
                style={{ fontFamily: "var(--font-display)" }}
              >
                600₽
              </span>
              <span className="text-sm mb-2 text-[#7C93A8]">/ 6 мес</span>
            </div>
            <div className="text-sm font-medium text-[#C7D9E6]">100₽/мес · или $10 криптой</div>
          </div>

          <ul className="space-y-3 flex-1 mb-8">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-2.5 text-sm text-[#D7ECF7]">
                <Check className="w-4 h-4 shrink-0 text-[#2E63C7]" />
                {f}
              </li>
            ))}
          </ul>

          <a
            href={botLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 font-bold py-4 rounded-lg text-[13px] uppercase tracking-[0.05em] bg-[#3E8EF7] text-[#071019] no-underline"
          >
            Купить за 600₽
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        <p className="text-center text-[#6E879C] text-[13px] mt-8">
          Оплата картой РФ или криптой (~$10) прямо в боте · без автосписаний
        </p>
      </div>
    </section>
  );
}
