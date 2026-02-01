"use client"

import React from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { DotPattern } from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import { Pricing } from "@/components/sections/Pricing";
import { FAQs } from "@/components/sections/PricingFaqs";
import CTA from "@/components/sections/CTA";

export default function PricingPage() {
    return (
        <div className="w-full min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                {/* DotPattern Background */}
                <DotPattern
                    width={20}
                    height={20}
                    cx={1}
                    cy={1}
                    cr={1}
                    className={cn(
                        "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
                        "text-accent/10"
                    )}
                />

                {/* Decorative blur effects */}
                <div className="absolute top-20 right-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <FadeIn>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-medium mb-8">
                            <span className="flex h-2 w-2 rounded-full bg-accent"></span>
                            Pricing & Investment
                        </div>
                        <h1 className="text-4xl md:text-6xl font-medium text-foreground tracking-tight mb-6">
                            Transparent, <br /> <span className="text-accent">Value-Based Investment</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            No hourly billing. No surprises. Just clear ROI and a partnership built on trust.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Pricing Component */}
            <Pricing />

            {/* FAQs Component */}
            <FAQs />

            {/* CTA Component */}
            <CTA />
        </div>
    );
}
