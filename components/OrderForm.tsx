"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, ExternalLink } from "lucide-react";

const subscriptionTariffs = [
  "Подписка — 1 месяц (490 ₽)",
  "Подписка — 3 месяца (990 ₽)",
  "Подписка — 12 месяцев (2 990 ₽)",
];

type ServiceType = "subscription" | "personal";

export default function OrderForm() {
  const [service, setService] = useState<ServiceType>("subscription");
  const [form, setForm] = useState({ name: "", contact: "", tariff: "" });
  const [telegramId, setTelegramId] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [botUrl, setBotUrl] = useState<string | null>(null);

  // Читаем tg_id из URL — пользователь пришёл с кнопки в боте
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tgId = params.get("tg_id");
    if (tgId) setTelegramId(tgId);
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          service,
          telegram_id: telegramId ? Number(telegramId) : null,
        }),
      });
      const data = await res.json();
      if (data.bot_url) setBotUrl(data.bot_url);
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  const leftPanelBenefits =
    service === "subscription"
      ? [
          "Готово за 10 минут",
          "До 5 устройств одновременно",
          "Поддержка в Telegram",
        ]
      : [
          "Только ты пользуешься сервером",
          "Безлимит устройств и стран",
          "Настройка под ключ за несколько часов",
        ];

  const envBotUrl = process.env.NEXT_PUBLIC_BOT_URL;

  return (
    <section id="order-form" className="bg-[#f8fafc] py-20">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="mb-12 text-center">
          <span
            className="text-xs font-medium text-[#EA580C] uppercase tracking-widest mb-3 block"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            // подключиться
          </span>
          <h2
            className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Начать сейчас
          </h2>
        </div>

        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/80 overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Left dark panel */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 md:p-12 bg-[#0f1b2d] flex flex-col justify-center"
            >
              <div className="flex items-center gap-2 mb-6">
                <ShieldCheck className="w-6 h-6 text-[#EA580C]" />
                <span className="text-white font-bold text-lg" style={{ fontFamily: "var(--font-display)" }}>
                  VPN<span className="text-[#EA580C]">Сервис</span>
                </span>
              </div>

              <h3
                className="text-3xl md:text-4xl font-black text-white uppercase leading-tight mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {service === "subscription" ? (
                  <>Подключись<br />за <span className="text-[#EA580C]">10 минут</span></>
                ) : (
                  <>Личный сервер<br /><span className="text-[#EA580C]">под ключ</span></>
                )}
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-xs">
                {service === "subscription"
                  ? "Оставь заявку — пришлём инструкции по подключению для всех устройств."
                  : "Расскажи нам страну и бюджет — настроим всё сами и объясним как пользоваться."}
              </p>

              <ul className="space-y-4">
                {leftPanelBenefits.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-[#EA580C] flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 md:p-12"
            >
              {status === "done" ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-12">
                  <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
                  <h3 className="text-3xl font-black text-slate-900 uppercase mb-2" style={{ fontFamily: "var(--font-display)" }}>
                    Заявка принята!
                  </h3>
                  <p className="text-slate-500 mb-6">Напишем в Telegram в течение 15 минут.</p>

                  {(botUrl ?? envBotUrl) && (
                    <a
                      href={botUrl ?? envBotUrl ?? "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 bg-[#EA580C] hover:bg-[#C2410C] text-white font-bold px-6 py-3 rounded-lg text-sm uppercase tracking-wide transition-colors shadow-md shadow-orange-900/20"
                    >
                      Оплатить в Telegram-боте
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  )}
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Service switcher */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">Что вас интересует?</label>
                    <div className="grid grid-cols-2 gap-2">
                      {(["subscription", "personal"] as ServiceType[]).map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => { setService(s); setForm({ ...form, tariff: "" }); }}
                          className={`py-2.5 px-4 rounded-lg text-sm font-bold transition-all ${
                            service === s
                              ? "bg-[#EA580C] text-white shadow-md"
                              : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                          }`}
                        >
                          {s === "subscription" ? "Подписка" : "Личный сервер"}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">Имя</label>
                    <input
                      required
                      type="text"
                      placeholder="Александр"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full border border-slate-200 focus:border-[#EA580C] focus:ring-2 focus:ring-[#EA580C]/20 bg-transparent rounded-lg px-4 py-3 text-slate-900 placeholder-slate-300 focus:outline-none transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">Telegram или телефон</label>
                    <input
                      required
                      type="text"
                      placeholder="@username или +7 999 000 00 00"
                      value={form.contact}
                      onChange={(e) => setForm({ ...form, contact: e.target.value })}
                      className="w-full border border-slate-200 focus:border-[#EA580C] focus:ring-2 focus:ring-[#EA580C]/20 bg-transparent rounded-lg px-4 py-3 text-slate-900 placeholder-slate-300 focus:outline-none transition-all text-sm"
                    />
                  </div>

                  {service === "subscription" && (
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">Тариф</label>
                      <select
                        required
                        value={form.tariff}
                        onChange={(e) => setForm({ ...form, tariff: e.target.value })}
                        className="w-full border border-slate-200 focus:border-[#EA580C] focus:ring-2 focus:ring-[#EA580C]/20 bg-white rounded-lg px-4 py-3 text-slate-900 focus:outline-none transition-all text-sm"
                      >
                        <option value="">— Выбери тариф —</option>
                        {subscriptionTariffs.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                  )}

                  {service === "personal" && (
                    <div className="bg-orange-50 border border-orange-100 rounded-lg px-4 py-3 text-sm text-slate-600">
                      Обсудим детали в Telegram — расскажем о вариантах и подберём подходящий хостинг.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="group w-full flex items-center justify-center gap-2 bg-[#EA580C] hover:bg-[#C2410C] disabled:opacity-50 text-white font-bold py-4 rounded-lg text-sm uppercase tracking-wide transition-colors mt-2 shadow-md shadow-orange-900/20"
                  >
                    {status === "loading" ? "Отправляем..." : (
                      <>
                        {service === "subscription" ? "Оформить подписку" : "Заказать настройку сервера"}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                  {status === "error" && <p className="text-red-500 text-sm text-center">Ошибка. Попробуй ещё раз.</p>}
                  <p className="text-xs text-slate-400 text-center">Без спама. Только инструкция по подключению.</p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
