const botLink = process.env.NEXT_PUBLIC_BOT_URL || "https://telegram.me/wireguard_easy_buy_bot";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1C2027]/94 backdrop-blur-md border-b border-[#F3EFE4]/[0.08]">
      <div className="max-w-[1280px] mx-auto px-6 h-[68px] flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 no-underline">
          <svg width="30" height="30" viewBox="0 0 32 32" fill="none" className="shrink-0">
            <path
              d="M9 27 C 4 22 8 16 14 16 C 20 16 23 11 19 6"
              stroke="#3E8EF7"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="18.6" cy="6.3" r="2.5" fill="#3E8EF7" />
            <circle cx="19.4" cy="5.6" r="0.7" fill="#0A1420" />
            <path d="M16.8 4.4 L 14.2 3 M17 5.2 L 14.4 5" stroke="#3E8EF7" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
          <span className="text-[#EAF3FB] font-bold text-[19px] tracking-[-0.02em]" style={{ fontFamily: "var(--font-display)" }}>
            VPN <span className="text-[#3E8EF7]">Сервис</span>
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="#subscription" className="text-[#7C93A8] text-sm font-medium no-underline">Тарифы</a>
          <a href="#how-it-works" className="text-[#7C93A8] text-sm font-medium no-underline">Как это работает</a>
          <a href="#faq" className="text-[#7C93A8] text-sm font-medium no-underline">FAQ</a>
        </div>
        <a
          href={botLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#3E8EF7] text-[#071019] font-bold px-5 py-2.5 rounded-lg text-sm no-underline"
        >
          Подключить
        </a>
      </div>
    </nav>
  );
}
