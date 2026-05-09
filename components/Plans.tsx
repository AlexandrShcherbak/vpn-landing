const subscriptions = [
  { period: "1 месяц", price: "490", perMonth: "490" },
  { period: "3 месяца", price: "990", perMonth: "330", badge: "−33%" },
  { period: "12 месяцев", price: "2 990", perMonth: "249", badge: "−50%" },
];

export default function Plans() {
  return (
    <section id="plans" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Тарифы и цены</h2>
          <p className="text-blue-200/70 text-lg">Выбери подписку или закажи настройку под ключ.</p>
        </div>

        {/* Subscriptions */}
        <div className="mb-10">
          <h3 className="text-blue-300 font-semibold text-sm uppercase tracking-wider mb-4">
            Подписка — доступ к серверу
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {subscriptions.map((s) => (
              <div
                key={s.period}
                className="bg-slate-800 border border-slate-700 rounded-2xl p-6 relative hover:border-blue-500/50 transition-colors"
              >
                {s.badge && (
                  <span className="absolute top-4 right-4 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    {s.badge}
                  </span>
                )}
                <div className="text-blue-200/70 text-sm mb-1">{s.period}</div>
                <div className="text-3xl font-bold text-white mb-1">{s.price} ₽</div>
                <div className="text-blue-300/60 text-xs mb-5">{s.perMonth} ₽/мес</div>
                <ul className="space-y-2 text-sm text-blue-100/70 mb-6">
                  {["WireGuard протокол", "До 5 устройств", "Безлимитный трафик", "Поддержка 24/7"].map(
                    (f) => (
                      <li key={f} className="flex items-center gap-2">
                        <span className="text-blue-400">✓</span> {f}
                      </li>
                    )
                  )}
                </ul>
                <a
                  href="#order-form"
                  className="block text-center bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-xl transition-colors"
                >
                  Подключить
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Setup under key */}
        <div>
          <h3 className="text-blue-300 font-semibold text-sm uppercase tracking-wider mb-4">
            Настройка под ключ — твой собственный сервер
          </h3>
          <div className="bg-gradient-to-r from-blue-900/50 to-slate-800 border border-blue-500/30 rounded-2xl p-8 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-3xl font-bold text-white mb-1">от 4 990 ₽</div>
              <div className="text-blue-200/60 text-sm mb-4">разово + 500 ₽/мес за сервер</div>
              <ul className="space-y-2 text-sm text-blue-100/70">
                {[
                  "Арендуем VPS в нужной стране",
                  "Устанавливаем WireGuard / XRay / Outline",
                  "Настраиваем конфиги под все твои устройства",
                  "Инструкция по подключению",
                  "Поддержка 30 дней",
                  "Сервер на твоём аккаунте — ты владелец",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">✓</span> {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-blue-200/70 text-sm">
                Идеально, если хочешь полный контроль. Никакой зависимости от наших серверов —
                всё твоё.
              </p>
              <a
                href="#order-form"
                className="block text-center bg-white text-blue-900 hover:bg-blue-50 font-semibold py-4 rounded-xl transition-colors"
              >
                Заказать настройку
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
