import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stanlino",
  description: "Stanley Filipe's personal website",
  keywords: "stanlino, stanley filipe, web developer, software engineer, fullstack developer, front-end developer, back-end developer, typescript, react, next.js, tailwindcss, node.js, deno, rust, python, javascript, web development, software development, programming, open source",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
