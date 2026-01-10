import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import JsonLd from "../components/seo/JsonLd";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    metadataBase: new URL("https://www.praxisflow.com"),
    title: {
        default: "PraxisFlow Automations | Legal Automation Agency",
        template: "%s | PraxisFlow Automations",
    },
    description: "We simplify complex legal operations through intelligent, custom automation — freeing attorneys to focus on billable work.",
    keywords: [
        "Legal Automation",
        "Law Firm Automation",
        "Legal Tech",
        "Workflow Automation",
        "PraxisFlow",
    ],
    authors: [{ name: "PraxisFlow Team" }],
    creator: "PraxisFlow Automations",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://praxisflow.com",
        title: "PraxisFlow Automations | Legal Automation Agency",
        description: "We simplify complex legal operations through intelligent, custom automation — freeing attorneys to focus on billable work.",
        siteName: "PraxisFlow Automations",
        images: [
            {
                url: "/logo-text.svg",
                width: 1200,
                height: 630,
                alt: "PraxisFlow Automations",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "PraxisFlow Automations | Legal Automation Agency",
        description: "We simplify complex legal operations through intelligent, custom automation — freeing attorneys to focus on billable work.",
        images: ["/logo-text.svg"],
        creator: "@praxisflow",
    },
    icons: {
        icon: [
            { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
            { url: "/favicon.ico", sizes: "any" }, // Fallback
            { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
        ],
        shortcut: "/favicon.ico",
        apple: [
            { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
        ],
        other: [
            {
                rel: "mask-icon",
                url: "/logo.svg", // modern websites
            },
        ],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <JsonLd />
                <Navbar />
                <main className="min-h-screen flex flex-col items-center justify-between">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
