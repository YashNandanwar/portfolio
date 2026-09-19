import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { resumeData } from "@/data/resume";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${resumeData.name} | ${resumeData.role} | Developer Portfolio`,
  description: resumeData.contact.email ? `Portfolio of ${resumeData.name}, ${resumeData.role}.` : "Portfolio",
  keywords: [...resumeData.skills.languages, ...resumeData.skills.frontend, ...resumeData.skills.backend].join(", "),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased dark`}>
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-accent/30">
        {children}
      </body>
    </html>
  );
}
