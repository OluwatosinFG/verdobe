import type { Metadata } from "next";
import { Bebas_Neue, Playfair_Display, IBM_Plex_Mono, Lato } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-var-bebas",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-var-playfair",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-var-plex",
});

const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-var-lato",
});

export const metadata: Metadata = {
  title: "VERDOBE Advisory — Brand Identity",
  description: "Brand Identity System for VERDOBE Advisory Ltd",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${playfairDisplay.variable} ${ibmPlexMono.variable} ${lato.variable}`}
    >
      <body className="bg-cream text-ink font-lato">{children}</body>
    </html>
  );
}
