import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Свой VPN-сервер — Подписка и настройка под ключ",
  description:
    "Собственный VPN без блокировок. Подписка от 490 ₽/мес или настройка личного сервера под ключ. WireGuard, без логов, безлимитный трафик.",
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
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
