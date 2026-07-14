import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Свой VPN-сервер — Подписка и настройка под ключ",
  description:
    "Собственный VPN без блокировок. Подписка от 490 ₽/мес или настройка личного сервера под ключ. Без логов, безлимитный трафик.",
  openGraph: {
    title: "Свой VPN-сервер — без блокировок и слежки",
    description: "Подключись за 15 минут. Подписка от 490 ₽/мес.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
