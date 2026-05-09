export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block bg-blue-500/20 text-blue-300 text-sm font-semibold px-3 py-1 rounded-full mb-4 border border-blue-500/30">
            Собственный VPN-сервер
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Свой VPN — за 10 минут. Без ограничений.
          </h1>
          <p className="text-xl text-blue-100/80 mb-8">
            Подключайся к интернету без блокировок. Собственный сервер — только твои данные,
            никакой слежки, максимальная скорость.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#plans"
              className="bg-blue-500 hover:bg-blue-400 text-white font-semibold px-8 py-4 rounded-xl text-center transition-colors"
            >
              Подключить VPN
            </a>
            <a
              href="#how-it-works"
              className="border border-blue-500/40 hover:border-blue-400 text-blue-200 font-semibold px-8 py-4 rounded-xl text-center transition-colors"
            >
              Как это работает
            </a>
          </div>
          <div className="flex gap-6 mt-8">
            {[["99.9%", "Аптайм"], ["< 20мс", "Пинг в EU"], ["∞", "Трафик"]].map(([val, label]) => (
              <div key={label}>
                <div className="text-2xl font-bold text-white">{val}</div>
                <div className="text-blue-300/70 text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden md:flex justify-center">
          <div className="relative w-72 h-72">
            <div className="absolute inset-0 rounded-full bg-blue-500/10 border border-blue-500/20 animate-pulse" />
            <div className="absolute inset-8 rounded-full bg-blue-500/15 border border-blue-400/30" />
            <div className="absolute inset-16 rounded-full bg-blue-500/20 border border-blue-400/40 flex items-center justify-center">
              <svg className="w-16 h-16 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
