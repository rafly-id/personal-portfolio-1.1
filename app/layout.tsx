import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import SmoothScroll from "@/components/global/SmoothScroll";
import TransitionProvider from "@/components/global/TransitionProvider";
import Cursor from "@/components/global/Cursor";
import { SITE_CONFIG } from "@/lib/config";

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
  metadataBase: new URL(SITE_CONFIG.siteUrl),

  title: {
    default: SITE_CONFIG.title,
    template: "%s | Rafly Adriansyah",
  },
  description: SITE_CONFIG.description,
  keywords: [
    "Muhammad Rafly Adriansyah",
    "Rafly Adriansyah",
    "Muhammad Rafly Adriansyah Web Developer",
    "Muhammad Rafly Adriansyah Software Engineer",
    "Rafly Adriansyah Web Developer",
    "Rafly Adriansyah Software Engineer",
    "Rafly Adriansyah Portfolio",
    "rafly-id",
    "Web Developer",
    "Software Engineer",
    "Software Developer",
    "Web Developer Indonesia",
    "Software Engineer Indonesia",
    "Indonesian Web Developer",
    "Software Developer Indonesia",
    "Full Stack Web Developer",
    "Web Application Engineer",
    "Modern Web Development",
    "Software Architecture",
    "Web Architecture",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "Tailwind CSS",
    "GSAP",
    "Scalable Web Systems",
    "Web Applications",
  ],

  authors: [
    { name: SITE_CONFIG.name, url: SITE_CONFIG.siteUrl },
  ],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  category: "technology",

  // Explicit canonical resolution to prevent duplicate content
  alternates: {
    canonical: SITE_CONFIG.siteUrl,
  },

  // Mencegah browser mobile merusak desain UI
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // Instruksi eksplisit untuk Googlebot
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/images/icon.webp",
    shortcut: "/images/icon.webp",
    apple: "/images/icon.webp",
  },

  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
  },

  openGraph: {
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.siteUrl,
    siteName: SITE_CONFIG.title,
    locale: "id_ID",
    alternateLocale: ["en_US"],
    type: "website",
    images: [
      {
        url: "/images/icon.webp",
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.title,
      },
    ],
  },

  verification: {
    google: "lJeAU8e38pktcVrBABGGPd05ycc_5lQOEW1tWzFW-kY",
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
      <body>
        {/* JSON-LD structured schema markup (Person & WebSite) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": `${SITE_CONFIG.siteUrl}/#person`,
                  name: SITE_CONFIG.name,
                  jobTitle: "Web Developer & Software Engineer",
                  url: SITE_CONFIG.siteUrl,
                  sameAs: [
                    "https://github.com/rafly-id",
                    "https://www.linkedin.com/in/rafly-adriansyah-35587225b/",
                    "https://www.instagram.com/__rafllyy/",
                  ],
                  knowsAbout: [
                    "Web Development",
                    "Software Engineering",
                    "Software Architecture",
                    "Web Application Architecture",
                    "Full-Stack Development",
                    "React",
                    "Next.js",
                    "TypeScript",
                    "Node.js",
                    "GSAP Animations",
                    "Tailwind CSS",
                    "Scalable Web Systems",
                  ],
                  alumniOf: {
                    "@type": "CollegeOrUniversity",
                    name: "Universitas Teknologi Digital Indonesia",
                  },
                  worksFor: {
                    "@type": "Organization",
                    name: "Balai Pelaksana Penyedia Perumahan dan Kawasan Pemukiman Jawa III",
                  },
                  address: {
                    "@type": "PostalAddress",
                    addressCountry: "ID",
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": `${SITE_CONFIG.siteUrl}/#website`,
                  url: SITE_CONFIG.siteUrl,
                  name: SITE_CONFIG.title,
                  alternateName: [
                    "Muhammad Rafly Adriansyah",
                    "Rafly Adriansyah",
                    "Rafly Portfolio",
                    "Rafly Web Developer",
                  ],
                  description: SITE_CONFIG.description,
                  publisher: {
                    "@id": `${SITE_CONFIG.siteUrl}/#person`,
                  },
                  inLanguage: "en-US",
                },
              ],
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
