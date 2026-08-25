import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "We Buy Broken Jaguars | Sell Your Broken Jaguar Today",
  description:
    "We buy broken, non-running and damaged Jaguar cars across the UK. Engine faults, gearbox problems and accident damage accepted. Free nationwide collection, same-day payment, no obligation.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.className} ${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
