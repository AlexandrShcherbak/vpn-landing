"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Чем ваш VPN отличается от NordVPN или ExpressVPN?",
    a: "У нас — либо твой личный сервер, либо сервер с минимальным количеством пользователей. Никаких переполненных нод, никаких логов. Скорость и приватность несравнимо выше.",
  },
  {
    q: "Какой протокол используется?",
    a: "WireGuard — современный, быстрый и надёжный. Для обхода DPI (глубокая инспекция) по запросу настраиваем XRay (VLESS/XTLS) или Outline.",
  },
  {
    q: "Сколько устройств можно подключить?",
    a: "По подписке — до 5 устройств одновременно. При настройке под ключ — без ограничений (зависит от вашего тарифного плана на VPS).",
  },
  {
    q: "Что будет, если сервер упадёт?",
    a: "Для подписки — переключаем тебя на резервный сервер в течение 15 минут. Для личного сервера — помогаем восстановить, поддержка 24/7.",
  },
  {
    q: "Как оплатить?",
    a: "Карта (RU/BY), USDT, криптовалюта. Для подписки — автопродление каждый месяц, отменить можно в любой момент.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Частые вопросы
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-slate-700 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex justify-between items-center p-5 text-left hover:bg-slate-800/50 transition-colors"
              >
                <span className="font-semibold text-white">{faq.q}</span>
                <span className="text-blue-400 text-xl ml-4 flex-shrink-0">{open === i ? "−" : "+"}</span>
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-blue-200/70 text-sm leading-relaxed border-t border-slate-700/50 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
