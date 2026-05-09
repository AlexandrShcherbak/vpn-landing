"use client";
import { useState } from "react";

const tariffs = [
  "Подписка — 1 месяц (490 ₽)",
  "Подписка — 3 месяца (990 ₽)",
  "Подписка — 12 месяцев (2 990 ₽)",
  "Настройка под ключ (от 4 990 ₽)",
];

export default function OrderForm() {
  const [form, setForm] = useState({ name: "", contact: "", tariff: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <section id="order-form" className="py-20 bg-blue-600">
        <div className="max-w-lg mx-auto px-6 text-center text-white">
          <div className="text-5xl mb-4">✅</div>
          <h2 className="text-3xl font-bold mb-3">Заявка принята!</h2>
          <p className="text-blue-100">
            Напишем в Telegram в течение 15 минут и пришлём инструкцию по подключению.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="order-form" className="py-20 bg-blue-600">
      <div className="max-w-lg mx-auto px-6">
        <div className="text-center mb-10 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Подключить VPN</h2>
          <p className="text-blue-100">Оставь заявку — свяжемся за 15 минут.</p>
        </div>
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 space-y-4 shadow-xl">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Имя</label>
            <input
              required
              type="text"
              placeholder="Александр"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Telegram или телефон</label>
            <input
              required
              type="text"
              placeholder="@username или +7 999 000 00 00"
              value={form.contact}
              onChange={(e) => setForm({ ...form, contact: e.target.value })}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Тариф</label>
            <select
              required
              value={form.tariff}
              onChange={(e) => setForm({ ...form, tariff: e.target.value })}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
            >
              <option value="">— Выбери тариф —</option>
              {tariffs.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-semibold py-4 rounded-xl transition-colors"
          >
            {status === "loading" ? "Отправляем..." : "Подключить VPN →"}
          </button>
          {status === "error" && (
            <p className="text-red-500 text-sm text-center">Ошибка отправки. Попробуй ещё раз.</p>
          )}
          <p className="text-xs text-gray-400 text-center">Без спама. Только инструкция по подключению.</p>
        </form>
      </div>
    </section>
  );
}
