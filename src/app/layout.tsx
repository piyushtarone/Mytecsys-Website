import type { Metadata } from "next";
import { Providers } from "@/components/Providers";
import { Header } from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mytecsys | Software Development Company",
  description:
    "Boost your business with mytecsys. We offer comprehensive services like project outsourcing, business development, branding and marketing, graphic and product designing, as well as software development. Let us help you elevate your brand and achieve success.",
  keywords: [
    "software development company",
    "E-Commerce",
    "growth",
    "sustainable",
    "belief",
    "arrow",
    "Mobile app development",
    "Facebook",
    "Twitter",
    "Google",
    "web development company",
    "Agile",
    "Knowledge Transfer",
    "Technology",
    "Cloud Computing",
    "Cybersecurity",
    "Governance",
    "Compliance",
    "Data Privacy",
    "Artificial Intelligence (AI)",
    "Data Analysis",
    "Product Development",
  ],
  authors: [{ name: "Mytecsys" }],
  openGraph: {
    title: "Mytecsys || Software Company",
    description:
      "Boost your business with MyTecSys. We offer comprehensive services like project outsourcing, business development, branding and marketing, graphic and product designing, as well as software development. Let us help you elevate your brand and achieve success.",
    url: "https://mytecsys.in",
    type: "website",
    images: [
      {
        url: "https://mytecsys.in/images/New_Project_2.png",
        width: 1200,
        height: 630,
        alt: "Mytecsys",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@mytecsys.in",
    title: "Mytecsys || Software Company",
    description:
      "Unlock your business's true potential with mytecsys. We offer top-notch services in project outsourcing, business development, branding & marketing, graphic & product design, and software development.",
    images: ["https://mytecsys.in/images/New_Project_2.png"],
  },
  alternates: {
    canonical: "https://mytecsys.in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "WebSite",
              name: "Mytecsys.in",
              url: "https://mytecsys.in",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://mytecsys.in/services.php?service=software-development{search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body>
        <Providers>
          <Header />
          <main className="min-h-screen">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
