import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "Duy Vo | IT System Administrator & AI Enthusiast",
  description: "Portfolio of Duy Vo - IT System Administrator passionate about infrastructure, automation, and AI/ML technologies",
  keywords: ["IT Administrator", "System Admin", "AI", "Machine Learning", "DevOps", "Cloud", "Infrastructure"],
  authors: [{ name: "Duy Vo" }],
  openGraph: {
    title: "Duy Vo | IT System Administrator & AI Enthusiast",
    description: "Building robust infrastructure today while mastering AI technologies of tomorrow",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
