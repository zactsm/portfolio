import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Your Name | Frontend Developer",
  description:
    "A modern portfolio for a frontend developer building responsive web apps with React, Next.js, TypeScript, and Tailwind CSS.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <div className="site-shell">{children}</div>
        <SpeedInsights />
      </body>
    </html>
  );
}
