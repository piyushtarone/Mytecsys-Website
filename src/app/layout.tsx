import type { Metadata } from "next";
import { Providers } from "@/components/Providers";
import { Header } from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Tec Sys - We bring your imagination into the Real World",
  description: "We bring your imagination into the Real World",
  authors: [{ name: "My Tec Sys" }],
  openGraph: {
    title: "My Tec Sys",
    description: "We bring your imagination into the Real World",
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
