import type { Metadata } from "next";
import { PT_Sans_Caption } from "next/font/google";
import "./globals.css";
import { MusicProvider } from "@/context/MusicContext";

const fuente = PT_Sans_Caption({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "MusicApp",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body suppressHydrationWarning={true} className={fuente.className}>
        <MusicProvider>
          {children}
        </MusicProvider>
      </body>
    </html>
  );
}
