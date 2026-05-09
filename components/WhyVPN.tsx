const reasons = [
  {
    icon: "🔒",
    title: "Полная приватность",
    desc: "Твой трафик зашифрован. Провайдер, работодатель и рекламные сети не видят, что ты делаешь в интернете.",
  },
  {
    icon: "🚫",
    title: "Никаких блокировок",
    desc: "Сайты, сервисы, мессенджеры — доступно всё. Инстаграм, LinkedIn, зарубежные стриминги.",
  },
  {
    icon: "⚡",
    title: "Высокая скорость",
    desc: "Собственный сервер — нет переполненных нод. Стабильные 500+ Мбит/с даже в пиковые часы.",
  },
  {
    icon: "👤",
    title: "Только твои данные",
    desc: "Никаких логов, никаких сторонних компаний. Сервер принадлежит тебе — или размещён только для тебя.",
  },
];

export default function WhyVPN() {
  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Зачем собственный VPN?</h2>
          <p className="text-blue-200/70 text-lg max-w-xl mx-auto">
            Бесплатные VPN продают твои данные. Платные — медленные и ненадёжные. Свой сервер — это другой уровень.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 hover:border-blue-500/40 transition-colors"
            >
              <div className="text-3xl mb-4">{r.icon}</div>
              <h3 className="font-bold text-white mb-2">{r.title}</h3>
              <p className="text-blue-200/60 text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
