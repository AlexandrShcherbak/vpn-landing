"use client";
import { motion } from "framer-motion";
import { Check, ArrowRight, Shield, Cpu, Infinity, Users } from "lucide-react";

const botLink = process.env.NEXT_PUBLIC_BOT_URL || "https://telegram.me/wireguard_easy_buy_bot";

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
    <section id="personal-server" className="bg-[#F3EFE4] py-24 px-6">
      <div className="max-w-[1280px] mx-auto">
        <div className="mb-12">
          <span
            className="text-xs text-[#A17B12] uppercase tracking-[0.1em] mb-3 block"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            // личный сервер
          </span>
          <h2
            className="text-[clamp(30px,4.2vw,42px)] font-bold tracking-[-0.02em] text-[#1C1A16] mb-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Свой сервер — полный контроль
          </h2>
          <p className="text-[#6B6152] text-[17px] max-w-xl">
            Арендуешь сервер в любой стране — мы настраиваем, ты пользуешься. Никаких соседей, никаких чужих логов.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#1C2027] rounded-xl p-11 border border-[#D4A72C]/[0.28]"
          >
            <div className="mb-6">
              <div className="text-[#8B909A] text-[13px] mb-1.5">Подключение под ключ</div>
              <div className="font-bold text-5xl text-[#F3EFE4] mb-1" style={{ fontFamily: "var(--font-display)" }}>
                4 990₽
              </div>
              <div className="text-[13px] text-[#6E7280]">разово · без абонентки</div>
            </div>

            <ul className="space-y-4 mb-8">
              {features.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3 text-sm text-[#E5DFC9]">
                  <Icon className="w-4 h-4 text-[#D4A72C] shrink-0 mt-0.5" />
                  {text}
                </li>
              ))}
            </ul>

            <a
              href={botLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 font-bold py-4 rounded-lg text-[13px] uppercase tracking-[0.05em] bg-[#D4A72C] text-[#1C1A16] no-underline w-full"
            >
              Заказать настройку
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-5"
          >
            <div className="bg-[#EAE3D2] rounded-xl p-6 border border-[#1C1A16]/[0.07]">
              <h3 className="font-bold text-[#1C1A16] mb-2 text-[17px]" style={{ fontFamily: "var(--font-display)" }}>
                Чем это отличается от подписки?
              </h3>
              <p className="text-[#6B6152] text-sm leading-relaxed">
                Сервер только твой — никто не делит скорость и логи. Подойдёт, если важна максимальная приватность.
              </p>
            </div>

            <div className="bg-[#EAE3D2] rounded-xl p-6 border border-[#1C1A16]/[0.07]">
              <h3 className="font-bold text-[#1C1A16] mb-2 text-[17px]" style={{ fontFamily: "var(--font-display)" }}>
                Нужны технические знания и что с содержанием?
              </h3>
              <p className="text-[#6B6152] text-sm leading-relaxed">
                Нет — назовёшь страну и бюджет, мы настроим всё сами. Хостинг — от 300–600₽/мес напрямую провайдеру, мы берём только за настройку.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
