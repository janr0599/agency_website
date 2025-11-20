import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "PraxisFlow Automations | Legal Automation Agency",
    description: "We simplify complex legal operations through intelligent, custom automation — freeing attorneys to focus on billable work.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar />
                <main className="min-h-screen flex flex-col items-center justify-between">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
