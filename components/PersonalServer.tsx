"use client";
import { motion } from "framer-motion";
import { Check, ArrowRight, Shield, Cpu, Infinity, Users } from "lucide-react";

const features = [
  { icon: Shield, text: "Никто не делит с тобой сервер — только ты" },
  { icon: Cpu, text: "Мы настраиваем сервер под ключ за несколько часов" },
  { icon: Infinity, text: "Безлимит устройств — подключи всю семью" },
  { icon: Users, text: "Выбираешь страну и хостинг-провайдера" },
  { icon: Check, text: "Инструкции по подключению для каждого устройства" },
  { icon: Check, text: "Поддержка и обновления включены" },
];

export default function PersonalServer() {
  return (
    <section id="personal-server" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-12">
          <span
            className="text-xs font-medium text-[#EA580C] uppercase tracking-widest mb-3 block"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            // личный сервер
          </span>
          <h2
            className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight mb-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Свой сервер — полный контроль
          </h2>
          <p className="text-slate-500 text-lg max-w-xl">
            Арендуешь сервер в любой стране — мы настраиваем, ты пользуешься. Никаких соседей, никаких чужих логов.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Dark card — main offer */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#0f1b2d] rounded-2xl p-8 md:p-10 ring-2 ring-[#EA580C]/30"
          >
            <div className="mb-6">
              <div className="text-slate-400 text-sm mb-1" style={{ fontFamily: "var(--font-mono)" }}>
                Подключение под ключ
              </div>
              <div className="flex items-end gap-2 mb-1">
                <span className="text-6xl font-black text-white" style={{ fontFamily: "var(--font-display)" }}>
                  4 990₽
                </span>
              </div>
              <div className="text-slate-400 text-sm">разово · без абонентки</div>
            </div>

            <ul className="space-y-4 mb-8">
              {features.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3 text-sm text-slate-200">
                  <Icon className="w-4 h-4 text-[#EA580C] flex-shrink-0 mt-0.5" />
                  {text}
                </li>
              ))}
            </ul>

            <a
              href="#order-form"
              className="group flex items-center justify-center gap-2 font-bold py-4 rounded-lg text-sm uppercase tracking-wide transition-colors bg-[#EA580C] hover:bg-[#C2410C] text-white shadow-md shadow-orange-900/30 w-full"
            >
              Заказать настройку
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Right — explanation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="bg-[#f8fafc] rounded-2xl p-6 border border-slate-100">
              <h3 className="font-black text-slate-900 mb-2 text-lg" style={{ fontFamily: "var(--font-display)" }}>
                Чем это отличается от подписки?
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                По подписке ты пользуешься общим сервером вместе с другими. При личном сервере — сервер только твой. Никто не замедляет скорость, никто не хранит общие логи.
              </p>
            </div>

            <div className="bg-[#f8fafc] rounded-2xl p-6 border border-slate-100">
              <h3 className="font-black text-slate-900 mb-2 text-lg" style={{ fontFamily: "var(--font-display)" }}>
                Нужны технические знания?
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Нет. Ты выбираешь страну и называешь бюджет на хостинг — мы делаем всё остальное. После настройки пришлём пошаговые инструкции для каждого устройства.
              </p>
            </div>

            <div className="bg-[#f8fafc] rounded-2xl p-6 border border-slate-100">
              <h3 className="font-black text-slate-900 mb-2 text-lg" style={{ fontFamily: "var(--font-display)" }}>
                Сколько стоит содержание?
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Стоимость хостинга — обычно от 300–600₽/мес, платишь напрямую провайдеру. Мы берём только за настройку и поддержку.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
