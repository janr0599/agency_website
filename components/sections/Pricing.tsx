"use client";
import { Check } from "lucide-react";
import { useState } from "react";

export default function Pricing() {
    const [isYearly, setIsYearly] = useState(false);

    return (
        <section id="pricing" className="py-24 max-w-7xl mx-auto px-6 bg-background">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-medium text-foreground tracking-tight mb-4">Transparent Retainers</h2>
                <p className="text-muted-foreground">Choose the level of automation support your firm needs.</p>

                {/* Custom Toggle */}
                <div className="flex items-center justify-center mt-8 gap-3">
                    <span className="text-sm font-medium text-foreground">Monthly</span>
                    <div
                        className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in cursor-pointer"
                        onClick={() => setIsYearly(!isYearly)}
                    >
                        <div className={`absolute block w-5 h-5 rounded-full bg-background border-4 appearance-none cursor-pointer transition-all duration-300 ease-in-out ${isYearly ? 'right-0 border-accent' : 'left-0 border-border'}`}></div>
                        <div className={`block overflow-hidden h-5 rounded-full cursor-pointer ${isYearly ? 'bg-accent' : 'bg-muted'}`}></div>
                    </div>
                    <span className="text-sm font-medium text-muted-foreground">Yearly <span className="text-accent text-xs bg-accent/10 px-2 py-0.5 rounded ml-1">-15%</span></span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                {/* Plan 1 */}
                <div className="p-8 rounded-2xl border border-border bg-card">
                    <h3 className="font-medium text-foreground text-lg">Solo Practitioner</h3>
                    <div className="mt-4 mb-6">
                        <span className="text-4xl font-medium text-foreground">$499</span><span className="text-muted-foreground text-sm">/mo</span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-6 h-10">Perfect for individual attorneys looking to remove administrative bottlenecks.</p>
                    <a href="#" className="block w-full py-2.5 border border-border rounded-lg text-center text-sm font-medium text-muted-foreground hover:border-foreground hover:text-foreground transition-colors">Get Started</a>
                    <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2"><Check className="w-4 h-4 text-accent" /> 1 Custom Workflow</li>
                        <li className="flex items-center gap-2"><Check className="w-4 h-4 text-accent" /> Basic CRM Integration</li>
                        <li className="flex items-center gap-2"><Check className="w-4 h-4 text-accent" /> Email Support</li>
                    </ul>
                </div>

                {/* Plan 2 (Highlighted) */}
                <div className="p-8 rounded-2xl border-2 border-accent bg-accent/5 relative shadow-xl shadow-accent/5">
                    <div className="absolute top-0 right-0 bg-accent text-accent-foreground text-xs font-medium px-3 py-1 rounded-bl-xl rounded-tr-lg">Most Popular</div>
                    <h3 className="font-medium text-accent text-lg">Boutique Firm</h3>
                    <div className="mt-4 mb-6">
                        <span className="text-4xl font-medium text-foreground">$1,299</span><span className="text-muted-foreground text-sm">/mo</span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-6 h-10">Comprehensive automation for firms with 2-10 partners.</p>
                    <a href="#" className="block w-full py-2.5 bg-primary rounded-lg text-center text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">Get Started</a>
                    <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2"><Check className="w-4 h-4 text-accent" /> 5 Custom Workflows</li>
                        <li className="flex items-center gap-2"><Check className="w-4 h-4 text-accent" /> Full Tech Stack Audit</li>
                        <li className="flex items-center gap-2"><Check className="w-4 h-4 text-accent" /> Dedicated Account Manager</li>
                        <li className="flex items-center gap-2"><Check className="w-4 h-4 text-accent" /> Quarterly Optimization</li>
                    </ul>
                </div>

                {/* Plan 3 */}
                <div className="p-8 rounded-2xl border border-border bg-card">
                    <h3 className="font-medium text-foreground text-lg">Enterprise</h3>
                    <div className="mt-4 mb-6">
                        <span className="text-4xl font-medium text-foreground">Custom</span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-6 h-10">For larger firms requiring complex, multi-departmental automation.</p>
                    <a href="#" className="block w-full py-2.5 border border-border rounded-lg text-center text-sm font-medium text-muted-foreground hover:border-foreground hover:text-foreground transition-colors">Contact Sales</a>
                    <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2"><Check className="w-4 h-4 text-accent" /> Unlimited Workflows</li>
                        <li className="flex items-center gap-2"><Check className="w-4 h-4 text-accent" /> Custom API Development</li>
                        <li className="flex items-center gap-2"><Check className="w-4 h-4 text-accent" /> 24/7 Priority Support</li>
                        <li className="flex items-center gap-2"><Check className="w-4 h-4 text-accent" /> On-premise Deployment</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
