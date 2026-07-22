const botLink = process.env.NEXT_PUBLIC_BOT_URL || "https://telegram.me/wireguard_easy_buy_bot";
const leadMagnetLink = `${botLink}?start=leadmagnet`;

export default function LeadMagnet() {
  return (
    <section className="bg-[#1C2027] py-14 px-6">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between gap-8 flex-wrap bg-[#D4A72C]/[0.06] border border-[#D4A72C]/[0.22] rounded-[14px] px-10 py-8">
        <div className="flex items-center gap-5">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#D4A72C" strokeWidth="1.6" className="shrink-0">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <path d="M14 2v6h6" />
            <path d="M9.5 13.5h5M9.5 16.5h5" />
          </svg>
          <div>
            <div className="text-[11px] text-[#E3BE5C] uppercase tracking-[0.1em] mb-1.5" style={{ fontFamily: "var(--font-mono)" }}>
              Бесплатный гайд
            </div>
            <div className="font-bold text-[22px] text-[#F3EFE4] leading-tight" style={{ fontFamily: "var(--font-display)" }}>
              Почему бесплатный VPN сливает твои данные
            </div>
            <div className="text-[13px] text-[#A9AEB6] mt-1.5">
              И что поставить вместо него — заберёшь гайд прямо в боте.
            </div>
          </div>
        </div>
        <a
          href={leadMagnetLink}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 flex items-center gap-2 bg-[#D4A72C] text-[#1C1A16] font-bold px-6 py-3.5 rounded-lg text-[13px] uppercase tracking-[0.05em] no-underline whitespace-nowrap"
        >
          Получить гайд в боте
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1C1A16" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
      </div>
    </section>
  );
}
