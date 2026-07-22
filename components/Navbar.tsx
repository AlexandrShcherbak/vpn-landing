const botLink = process.env.NEXT_PUBLIC_BOT_URL || "https://telegram.me/wireguard_easy_buy_bot";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1C2027]/94 backdrop-blur-md border-b border-[#F3EFE4]/[0.08]">
      <div className="max-w-[1280px] mx-auto px-6 h-[68px] flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 no-underline">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D4A72C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2 4 5v6c0 5 3.4 8.6 8 11 4.6-2.4 8-6 8-11V5l-8-3Z" />
          </svg>
          <span className="text-[#F3EFE4] font-bold text-[19px] tracking-[-0.02em]" style={{ fontFamily: "var(--font-display)" }}>
            VPN <span className="text-[#D4A72C]">Сервис</span>
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="#subscription" className="text-[#9BA0AB] text-sm font-medium no-underline">Тарифы</a>
          <a href="#how-it-works" className="text-[#9BA0AB] text-sm font-medium no-underline">Как это работает</a>
          <a href="#faq" className="text-[#9BA0AB] text-sm font-medium no-underline">FAQ</a>
        </div>
        <a
          href={botLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#D4A72C] text-[#1C1A16] font-bold px-5 py-2.5 rounded-lg text-sm no-underline"
        >
          Подключить
        </a>
      </div>
    </nav>
  );
}
