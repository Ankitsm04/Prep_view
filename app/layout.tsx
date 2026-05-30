import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import StructuredData from "@/components/StructuredData";

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

const metadataBase = new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://prepviewai.com");

export const metadata: Metadata = {
  metadataBase,
  title: {
    template: "%s | Prepview AI",
    default: "Prepview AI - AI-Powered Interview Preparation",
  },
  description: "Master technical interviews with AI-powered interview prep. Practice with real interview questions, get instant AI feedback, and ace your next interview.",
  keywords: ["interview prep", "coding interview", "AI interview", "interview practice", "technical interview", "interview questions", "job interview"],
  authors: [{ name: "Prepview AI" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Prepview AI - AI-Powered Interview Preparation",
    description: "Master technical interviews with AI-powered interview prep. Practice with real interview questions, get instant AI feedback, and ace your next interview.",
    url: "/",
    siteName: "Prepview AI",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Prepview AI - Interview Preparation Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prepview AI - AI-Powered Interview Preparation",
    description: "Master technical interviews with AI-powered interview prep. Practice with real interview questions, get instant AI feedback, and ace your next interview.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <StructuredData type="organization" />
        <StructuredData type="softwareApplication" />
      </head>
      <body
        className={`${monaSans.className} antialiased pattern`}
      >
        {children}
        <Toaster/>
      </body>
    </html>
  );
}
