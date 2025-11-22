import React from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { DotPattern } from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";

export default function PrivacyPolicyPage() {
    const lastUpdated = "November 22, 2025";

    const sections = [
        {
            heading: "1. Information We Collect",
            content: "We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us for support. This may include your name, email address, phone number, and company details."
        },
        {
            heading: "2. How We Use Your Information",
            content: "We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to protect our users. We may also use this information to send you marketing communications."
        },
        {
            heading: "3. Information Sharing",
            content: "We do not share your personal information with third parties except as described in this policy. We may share information with service providers who perform services on our behalf, or in response to legal process."
        },
        {
            heading: "4. Data Security",
            content: "We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction."
        },
        {
            heading: "5. Your Rights",
            content: "You have the right to access, correct, or delete your personal information. You may also object to the processing of your personal information or request that we restrict the processing of your personal information."
        },
        {
            heading: "6. Contact Us",
            content: "If you have any questions about this Privacy Policy, please contact us at legal@praxisflow.com."
        }
    ];

    return (
        <div className="w-full min-h-screen bg-background">
            <main className="relative pt-32 pb-20 px-6 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                    <DotPattern
                        width={20}
                        height={20}
                        cx={1}
                        cy={1}
                        cr={1}
                        className={cn(
                            "[mask-image:radial-gradient(800px_circle_at_top,white,transparent)]",
                            "text-accent/10"
                        )}
                    />
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]"></div>
                </div>

                <div className="container mx-auto max-w-4xl">
                    <FadeIn>
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-medium mb-8">
                                <span className="flex h-2 w-2 rounded-full bg-accent"></span>
                                Legal
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
                                Privacy Policy
                            </h1>
                            <p className="text-muted-foreground">
                                Last updated: {lastUpdated}
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <div className="space-y-12 bg-card/50 backdrop-blur-sm border border-border p-8 md:p-12 rounded-2xl shadow-sm">
                            {sections.map((section, index) => (
                                <div key={index}>
                                    <h2 className="text-2xl font-bold text-foreground mb-4">
                                        {section.heading}
                                    </h2>
                                    <p className="text-muted-foreground leading-relaxed text-lg">
                                        {section.content}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </main>
        </div>
    );
}
