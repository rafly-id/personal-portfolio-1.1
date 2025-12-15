import type { Metadata } from "next";
import { Roboto, Oswald , Kranky } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import SmoothScroll from "@/components/global/SmoothScroll";
import PageLoader from "@/components/global/PageLoader";
import Cursor from "@/components/global/Cursor";

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

const kranky = Kranky({
  variable: "--font-kranky",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rafly-id.vercel.app/"),

  title: {
    default: "Rafly Adriansyah Portfolio",
    template: "%s | Rafly Adriansyah",
  },
  description:
    "Portfolio pribadi Muhammad Rafly Adriansyah — seorang Frontend Developer yang juga berpengalaman dalam UI/UX dan pengembangan aplikasi web modern.",
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
    title: "Rafly Adriansyah Portfolio",
    description:
      "Portfolio pribadi Muhammad Rafly Adriansyah — Frontend Developer dengan fokus pada UI/UX dan pengembangan web.",
    images: ["/images/share.png"],
  },

  openGraph: {
    title: "Rafly Adriansyah Portfolio",
    description:
      "Portfolio pribadi Muhammad Rafly Adriansyah — Frontend Developer dengan fokus pada UI/UX dan pengembangan web.",
    url: "https://rafly-id.vercel.app/",
    siteName: "Rafly Adriansyah Portfolio",
    images: [
      {
        url: "/images/share.png",
        width: 1200,
        height: 630,
        alt: "Preview Portfolio Muhammad Rafly Adriansyah",
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
      className={`${roboto.variable} ${oswald.variable} ${kranky.variable} antialiased`}
    >
      <body>
        <SmoothScroll>
          <PageLoader>
            <Cursor />
            <Navbar />
            {children}
          </PageLoader>
        </SmoothScroll>
      </body>
    </html>
  );
}
