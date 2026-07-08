import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muazzam Hazmi | Software Engineer",
  description:
    "Portfolio of Muazzam Hazmi, a software engineer specializing in secure web applications, cybersecurity, cloud-backed systems, and practical full-stack delivery.",
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
