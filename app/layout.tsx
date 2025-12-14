import type { Metadata } from "next";
import { Roboto, Oswald } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import SmoothScroll from "@/components/global/SmoothScroll";
import PageLoader from "@/components/global/PageLoader";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["200", "400", "700", "900"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["200", "400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://your-vercel-domain.vercel.app"),

  title: {
    default: "Rafly Adriansyah Portofolio",
    template: "%s | Rafly Adriansyah",
  },
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

  twitter: {
    card: "summary_large_image",
    title: "Rafly Adriansyah Portofolio",
    description:
      "Portofolio pribadi Muhammad Rafly Adriansyah — Frontend Developer dengan fokus pada UI/UX dan pengembangan web.",
    images: ["/images/share.png"],
  },

  openGraph: {
    title: "Rafly Adriansyah Portofolio",
    description:
      "Portofolio pribadi Muhammad Rafly Adriansyah — Frontend Developer dengan fokus pada UI/UX dan pengembangan web.",
    url: "https://your-vercel-domain.vercel.app",
    siteName: "Rafly Adriansyah Portofolio",
    images: [
      {
        url: "/images/share.png",
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${oswald.variable} antialiased`}
    >
      <body>
        <SmoothScroll>
          <PageLoader>
            <Navbar />
            {children}
          </PageLoader>
        </SmoothScroll>
      </body>
    </html>
  );
}
