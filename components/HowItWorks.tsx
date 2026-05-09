const steps = [
  {
    num: "01",
    title: "Оставь заявку",
    desc: "Выбери тариф или настройку под ключ. Укажи имя и Telegram — свяжемся за 15 минут.",
  },
  {
    num: "02",
    title: "Настройка за час",
    desc: "Подключаем тебя к серверу или разворачиваем твой VPS. Пришлём готовые конфиги для всех устройств.",
  },
  {
    num: "03",
    title: "Работает везде",
    desc: "iPhone, Android, Windows, Mac, роутер. Один клик — и ты подключён. Блокировок больше нет.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Как это работает</h2>
          <p className="text-blue-200/70 text-lg">Три шага до стабильного интернета без ограничений.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <div key={s.num} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-blue-500/20 -translate-x-1/2 z-0" />
              )}
              <div className="relative z-10">
                <div className="text-5xl font-black text-blue-500/20 mb-2 leading-none">{s.num}</div>
                <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
                <p className="text-blue-200/60 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
