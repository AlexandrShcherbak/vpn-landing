const botLink = process.env.NEXT_PUBLIC_BOT_URL || "https://telegram.me/wireguard_easy_buy_bot";
const leadMagnetLink = `${botLink}?start=leadmagnet`;

export default function LeadMagnet() {
  return (
    <section className="bg-[#060B16] py-14 px-6">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between gap-8 flex-wrap bg-[#3E8EF7]/[0.06] border border-[#3E8EF7]/[0.22] rounded-[14px] px-10 py-8">
        <div className="flex items-center gap-5">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#3E8EF7" strokeWidth="1.6" className="shrink-0">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <path d="M14 2v6h6" />
            <path d="M9.5 13.5h5M9.5 16.5h5" />
          </svg>
          <div>
            <div className="text-[11px] text-[#7CB3FF] uppercase tracking-[0.1em] mb-1.5" style={{ fontFamily: "var(--font-mono)" }}>
              Бесплатный гайд
            </div>
            <div className="font-bold text-[22px] text-[#EAF3FB] leading-tight" style={{ fontFamily: "var(--font-display)" }}>
              Почему бесплатный VPN сливает твои данные
            </div>
            <div className="text-[13px] text-[#9FB4C6] mt-1.5">
              И что поставить вместо него — заберёшь гайд прямо в боте.
            </div>
          </div>
        </div>
        <a
          href={leadMagnetLink}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 flex items-center gap-2 bg-[#3E8EF7] text-[#071019] font-bold px-6 py-3.5 rounded-lg text-[13px] uppercase tracking-[0.05em] no-underline whitespace-nowrap"
        >
          Получить гайд в боте
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#071019" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
      </div>
    </section>
  );
}
