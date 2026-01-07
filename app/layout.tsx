import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import JsonLd from "../components/seo/JsonLd";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    metadataBase: new URL("https://praxisflow.com"),
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
                url: "/og-image.jpg",
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
        images: ["/og-image.jpg"],
        creator: "@praxisflow",
    },
    icons: {
        icon: "/logo.svg",
        shortcut: "/logo.svg",
        apple: "/logo.svg",
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
