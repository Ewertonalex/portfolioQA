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
  title: "Portfólio de Qualidade de Software · Ewerton Alexander",
  description:
    "Portfólio de QA orientado a negócio, com projetos reais de automação, testes de performance e conteúdos de qualidade de software.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-black text-zinc-50 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}


