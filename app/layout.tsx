import type { Metadata } from "next";
import { Oswald, Roboto } from "next/font/google";
import "@/styles/globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Rafly Adriansyah Portofolio",
  description:
    "Portofolio pribadi Muhammad Rafly Adriansyah — seorang Frontend Developer yang juga berpengalaman dalam UI/UX dan pengembangan aplikasi web modern.",
  keywords: [
    "Muhammad Rafly Adriansyah",
    "Frontend Developer",
    "UI/UX",
    "Web Developer",
    "Portfolio",
    "Software Developer",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
  ],
  authors: [{ name: "Muhammad Rafly Adriansyah" }],
  creator: "Muhammad Rafly Adriansyah",
  openGraph: {
    title: "Rafly Adriansyah Portofolio",
    description:
      "Portofolio pribadi Muhammad Rafly Adriansyah — Frontend Developer dengan fokus pada UI/UX dan pengembangan web.",
    url: "https://your-vercel-domain.vercel.app",
    siteName: "Rafly Adriansyah Portofolio ",
    images: [
      {
        url: "https://placehold.co/1200x630?text=Portfolio+Preview",
        width: 1200,
        height: 630,
        alt: "Preview Portofolio Muhammad Rafly Adriansyah",
      },
    ],
    locale: "id_ID",
    alternateLocale: ["en_US"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${roboto.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
