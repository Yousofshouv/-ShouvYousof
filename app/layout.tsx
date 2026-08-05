import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yousof Hossain Shouv — Full Stack Developer",
  description:
    "Portfolio of Yousof Hossain Shouv — Full Stack Developer, B.Sc. CSE student at AIUB, and NASA Space Apps Challenge 2025 participant.",
  keywords: ["Next.js", "React", "Full Stack Developer", "AIUB", "NASA Space Apps", "Portfolio"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <body className="min-h-screen antialiased bg-slate-900 text-slate-50">
        {children}
      </body>
    </html>
  );
}
