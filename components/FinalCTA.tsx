const botLink = process.env.NEXT_PUBLIC_BOT_URL || "https://telegram.me/wireguard_easy_buy_bot";

export default function FinalCTA() {
  return (
    <section id="order-form" className="bg-[#1C2027] py-24 px-6">
      <div className="max-w-[720px] mx-auto text-center">
        <span
          className="block text-xs text-[#E3BE5C] uppercase tracking-[0.1em] mb-4"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          // подключиться
        </span>
        <h2
          className="text-[clamp(30px,4.2vw,44px)] font-extrabold tracking-[-0.02em] text-[#F3EFE4] mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Начни прямо в Telegram
        </h2>
        <p className="text-[#A9AEB6] text-[17px] leading-relaxed mb-10">
          Бот подберёт тариф, примет оплату и пришлёт инструкцию по подключению — без звонков и лишних форм.
        </p>
        <a
          href={botLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 bg-[#D4A72C] text-[#1C1A16] font-bold px-9 py-[18px] rounded-[10px] text-[15px] uppercase tracking-[0.05em] no-underline"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#1C1A16">
            <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71l-4.14-3.05-2 1.93c-.23.23-.42.42-.82.42z" />
          </svg>
          Открыть @wireguard_easy_buy_bot
        </a>
        <p className="text-[#6E7280] text-[13px] mt-5">Оплата прямо в боте по реквизитам · без автосписаний</p>
      </div>
    </section>
  );
}
