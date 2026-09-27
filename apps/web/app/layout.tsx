import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from "next/link";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "DevArena",
  description: "AI-powered coding practice platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-black text-white`}
      >
        <nav className="border-b border-zinc-800 bg-black">
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
            <Link
              href="/"
              className="text-lg font-semibold tracking-tight"
            >
              DevArena
            </Link>

            <div className="flex items-center gap-6 text-sm">
              <Link
                href="/dashboard"
                className="text-zinc-400 transition hover:text-white"
              >
                Dashboard
              </Link>

              <Link
                href="/problems"
                className="text-zinc-400 transition hover:text-white"
              >
                Problems
              </Link>
            </div>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}

