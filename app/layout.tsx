import type { Metadata } from "next";
import { Bodoni_Moda, Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  style: ["italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "We Buy Broken Jaguars | Sell Your Broken Jaguar Today",
  description:
    "We buy broken, non-running and damaged Jaguar cars across the UK. Engine faults, gearbox problems and accident damage accepted. Free nationwide collection, same-day payment, no obligation.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.className} ${inter.variable} ${bodoni.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
