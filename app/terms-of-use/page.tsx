import React from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { DotPattern } from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";

export default function TermsOfUsePage() {
    const lastUpdated = "November 22, 2025";

    const sections = [
        {
            heading: "1. Acceptance of Terms",
            content: "By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this websites particular services, you shall be subject to any posted guidelines or rules applicable to such services."
        },
        {
            heading: "2. Use License",
            content: "Permission is granted to temporarily download one copy of the materials (information or software) on PraxisFlow's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title."
        },
        {
            heading: "3. Disclaimer",
            content: "The materials on PraxisFlow's website are provided on an 'as is' basis. PraxisFlow makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights."
        },
        {
            heading: "4. Limitations",
            content: "In no event shall PraxisFlow or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on PraxisFlow's website."
        },
        {
            heading: "5. Revisions and Errata",
            content: "The materials appearing on PraxisFlow's website could include technical, typographical, or photographic errors. PraxisFlow does not warrant that any of the materials on its website are accurate, complete, or current."
        },
        {
            heading: "6. Governing Law",
            content: "Any claim relating to PraxisFlow's website shall be governed by the laws of the State of Massachussets without regard to its conflict of law provisions."
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
                                Terms of Use
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
