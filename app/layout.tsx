import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

export const metadata: Metadata = {
  title: "MODRENEON — Bespoke Shop Signs & Neon Lights | UK Sign Manufacturers",
  description:
    "Leading UK sign manufacturers specialising in bespoke shop signs, custom neon lights, and commercial signage. 70+ years of expert craftsmanship for high-end retail branding.",
  keywords: [
    "shop signs",
    "neon signs",
    "neon lights",
    "sign manufacturers",
    "sign makers",
    "UK signage",
    "custom neon signs",
    "LED signs",
    "retail signage",
  ],
  openGraph: {
    title: "MODRENEON — Bespoke Shop Signs & Neon Lights",
    description:
      "Premium sign manufacturers providing bespoke signage and neon lights to high-street brands and independent boutiques.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body>{children}</body>
    </html>
  );
}
