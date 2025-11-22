import React from "react";
import { ShimmerButton } from "@/components/ui/shimmer-button";

export default function ContactPage() {
    return (
        <div className="w-full min-h-screen bg-background pt-24 pb-12 px-4 flex items-center justify-center">
            <div className="max-w-2xl w-full space-y-8 bg-white p-8 md:p-12 rounded-3xl border border-border shadow-lg">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground">Start Your Transformation</h1>
                    <p className="text-lg text-muted-foreground">
                        Schedule a free workflow audit to identify your firm's biggest automation opportunities.
                    </p>
                </div>

                <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                            <input
                                id="name"
                                type="text"
                                placeholder="John Doe"
                                className="w-full px-4 py-3 bg-background border border-input rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-foreground">Work Email</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="john@lawfirm.com"
                                className="w-full px-4 py-3 bg-background border border-input rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="firm" className="text-sm font-medium text-foreground">Firm Name</label>
                        <input
                            id="firm"
                            type="text"
                            placeholder="Doe & Partners LLP"
                            className="w-full px-4 py-3 bg-background border border-input rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-foreground">How can we help?</label>
                        <textarea
                            id="message"
                            rows={4}
                            placeholder="Tell us about your current challenges..."
                            className="w-full px-4 py-3 bg-background border border-input rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        />
                    </div>

                    <div className="pt-4">
                        <ShimmerButton className="w-full" background="hsl(var(--primary))" shimmerSize="0.30em" shimmerColor="#0d9488"
                            shimmerDuration="2s">
                            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                                Request Audit
                            </span>
                        </ShimmerButton>
                    </div>
                </form>

                <div className="text-center pt-4 border-t border-border">
                    <p className="text-muted-foreground text-sm">
                        Prefer to email us directly? <a href="mailto:hello@praxisflow.com" className="text-primary hover:underline">hello@praxisflow.com</a>
                    </p>
                </div>
            </div>
        </div>
    );
}
