import type { Metadata } from "next";
import { Providers } from "@/components/Providers";
import { Header } from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Tec Sys - AI-Powered Innovation For Your Business",
  description:
    "Transform your ideas into reality with AI research, cloud infrastructure, and engineering excellence.",
  authors: [{ name: "My Tec Sys" }],
  openGraph: {
    title: "My Tec Sys - AI Innovation Company",
    description:
      "AI-powered innovation, research & development, and software excellence.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <main className="min-h-screen">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
