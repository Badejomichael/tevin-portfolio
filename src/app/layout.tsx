import type { Metadata } from "next";
import { Bebas_Neue, Cormorant_Garamond, DM_Mono } from "next/font/google";
import "./globals.css";

/* ─────────────────────────────────────────
   FONTS
───────────────────────────────────────── */
const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmMono = DM_Mono({
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-dm-mono",
  display: "swap",
});

/* ─────────────────────────────────────────
   METADATA
───────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Tevin - 2D Animator & Visual Artist",
  description:
    "Portfolio of Tevin, a 2D animator, illustrator, and NFT founder crafting worlds one frame at a time.",
  keywords: [
    "2D Animator",
    "Visual Artist",
    "NFT",
    "Web3",
    "Character Design",
    "Illustration",
    "Motion Design",
    "Tevin",
  ],
  openGraph: {
    title: "Tevin — 2D Animator & Visual Artist",
    description: "Crafting worlds one frame at a time.",
    type: "website",
  },
};

/* ─────────────────────────────────────────
   LAYOUT
───────────────────────────────────────── */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${cormorantGaramond.variable} ${dmMono.variable}`}
    >
      <body className="font-mono antialiased">
        {children}
      </body>
    </html>
  );
}