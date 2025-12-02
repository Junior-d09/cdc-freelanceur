import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Geist_Mono } from "next/font/google";
// import { ToastProvider } from '@/components/providers/ToastProvider'
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cahier de charge",
  description: "aider les freelanceurs à mieux comprendre vos besoins",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      
      <body className={`${inter.variable} ${geistMono.variable} antialiased`}>
        {children}
        {/* <ToastProvider /> */}
      </body>
    </html>
  );
}
