import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import SmoothScroll from "@/components/global/SmoothScroll";
import TransitionProvider from "@/components/global/TransitionProvider";
import Cursor from "@/components/global/Cursor";

const dm_sans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["200", "400", "700", "900"],
  display: "swap",
});

const instrument_serif = Instrument_Serif({
  variable: "--font-instrument-serif",
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
    images: ["/images/icon.webp"],
  },

  openGraph: {
    title: "Rafly Adriansyah Portfolio",
    description:
      "Portfolio pribadi Muhammad Rafly Adriansyah — Frontend Developer dengan fokus pada UI/UX dan pengembangan web.",
    url: "https://rafly-id.vercel.app/",
    siteName: "Rafly Adriansyah Portfolio",
    images: [
      {
        url: "/images/icon.webp",
        width: 1200,
        height: 630,
        alt: "Preview Portfolio Muhammad Rafly Adriansyah",
      },
    ],
    locale: "id_ID",
    alternateLocale: ["en_US"],
    type: "website",
  },
  verification: {
    google: "OZq4Q3y-EnKm0Aolq-VkSUygnartqoQYZLOkimeFtUY",
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
      className={`${dm_sans.variable} ${instrument_serif.variable} antialiased`}
    >
      <body className="selection:bg-foreground selection:text-background">
        {/* Person JSON-LD structured schema markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Muhammad Rafly Adriansyah",
              jobTitle: "Frontend Developer",
              url: "https://rafly-id.vercel.app",
              sameAs: [
                "https://github.com/rafly-id",
                "https://www.linkedin.com/in/rafly-adriansyah-35587225b/",
                "https://www.instagram.com/__rafllyy/",
              ],
              knowsAbout: [
                "Frontend Development",
                "React",
                "Next.js",
                "TypeScript",
                "GSAP",
                "Tailwind CSS",
                "UI/UX Design",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Yogyakarta",
                addressCountry: "ID",
              },
            }),
          }}
        />
        <SmoothScroll>
          <TransitionProvider>
            <Cursor />
            <Navbar />
            {children}
          </TransitionProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
