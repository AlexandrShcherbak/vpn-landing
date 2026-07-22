const botLink = process.env.NEXT_PUBLIC_BOT_URL || "https://telegram.me/wireguard_easy_buy_bot";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1C2027]/94 backdrop-blur-md border-b border-[#F3EFE4]/[0.08]">
      <div className="max-w-[1280px] mx-auto px-6 h-[68px] flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 no-underline">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/logo.png" alt="VPN Сервис" className="w-9 h-9 rounded-lg object-cover" />
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
