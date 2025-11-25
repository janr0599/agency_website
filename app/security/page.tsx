import React from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { DotPattern } from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import { Lock, Shield, Eye, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function SecurityPage() {
    const lastUpdated = "November 25, 2025";

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
                            <h1 className="text-4xl md:text-5xl font-medium text-foreground mb-6 tracking-tight">
                                Security
                            </h1>
                            <p className="text-muted-foreground">
                                Last updated: {lastUpdated}
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <div className="space-y-16">
                            {/* Intro */}
                            <div className="text-center max-w-2xl mx-auto">
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    We take security seriously. Your legal workflows and sensitive data are protected
                                    with enterprise-grade infrastructure.
                                </p>
                            </div>

                            {/* Key Features Grid */}
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="group relative">
                                    <div className="bg-card backdrop-blur-xl border-2 border-border p-8 rounded-2xl hover:border-accent/50 transition-all duration-300 h-full overflow-hidden">
                                        <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6 text-accent">
                                            <Lock className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-xl font-semibold text-foreground mb-3">End-to-End Encryption</h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            All data in transit and at rest is encrypted using AES-256 encryption standards.
                                        </p>
                                    </div>
                                </div>

                                <div className="group relative">
                                    <div className="bg-card backdrop-blur-xl border-2 border-border p-8 rounded-2xl hover:border-accent/50 transition-all duration-300 h-full overflow-hidden">
                                        <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6 text-accent">
                                            <Shield className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-xl font-semibold text-foreground mb-3">Enterprise Security</h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            SOC 2 Type II certified infrastructure with continuous security monitoring and threat detection.
                                        </p>
                                    </div>
                                </div>

                                <div className="group relative">
                                    <div className="bg-card backdrop-blur-xl border-2 border-border p-8 rounded-2xl hover:border-accent/50 transition-all duration-300 h-full overflow-hidden">
                                        <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6 text-accent">
                                            <Eye className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-xl font-semibold text-foreground mb-3">Access Control</h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            Role-based access controls and multi-factor authentication for all user accounts.
                                        </p>
                                    </div>
                                </div>

                                <div className="group relative">
                                    <div className="bg-card backdrop-blur-xl border-2 border-border p-8 rounded-2xl hover:border-accent/50 transition-all duration-300 h-full overflow-hidden">
                                        <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6 text-accent">
                                            <ShieldCheck className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-xl font-semibold text-foreground mb-3">Compliance</h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            Compliant with HIPAA, GDPR, and industry-standard data protection regulations.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Detailed Sections */}
                            <div className="space-y-12">
                                {/* Data Protection */}
                                <section>
                                    <h2 className="text-2xl font-medium text-foreground mb-6">Data Protection</h2>
                                    <p className="text-muted-foreground mb-6">
                                        JurisFlow implements multiple layers of security to protect your legal workflow data:
                                    </p>
                                    <ul className="space-y-4">
                                        {[
                                            "Encrypted storage with redundant backups across secure data centers",
                                            "Regular security audits and penetration testing",
                                            "24/7 monitoring and threat detection systems",
                                            "Incident response and disaster recovery protocols"
                                        ].map((item, i) => (
                                            <li key={i} className="flex gap-3 items-start">
                                                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                                <span className="text-muted-foreground">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </section>

                                {/* Access & Authentication */}
                                <section>
                                    <h2 className="text-2xl font-medium text-foreground mb-6">Access & Authentication</h2>
                                    <p className="text-muted-foreground mb-6">
                                        We implement strict access controls to ensure only authorized personnel can access your data:
                                    </p>
                                    <ul className="space-y-4">
                                        {[
                                            "Multi-factor authentication (MFA) on all accounts",
                                            "Role-based access control (RBAC) with principle of least privilege",
                                            "Session management and automatic timeout protocols",
                                            "Audit logs tracking all user activities and data access"
                                        ].map((item, i) => (
                                            <li key={i} className="flex gap-3 items-start">
                                                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                                <span className="text-muted-foreground">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </section>

                                {/* Compliance & Certifications */}
                                <section>
                                    <h2 className="text-2xl font-medium text-foreground mb-6">Compliance & Certifications</h2>
                                    <p className="text-muted-foreground mb-6">
                                        JurisFlow maintains compliance with industry standards and regulations:
                                    </p>
                                    <ul className="space-y-4">
                                        {[
                                            <span><strong>SOC 2 Type II:</strong> Annual third-party security audits</span>,
                                            <span><strong>GDPR:</strong> Full compliance with EU data protection regulations</span>,
                                            <span><strong>HIPAA:</strong> Compliance for handling sensitive healthcare data</span>,
                                            <span><strong>ISO 27001:</strong> Information security management certification</span>
                                        ].map((item, i) => (
                                            <li key={i} className="flex gap-3 items-start">
                                                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                                <span className="text-muted-foreground">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </section>

                                {/* Report Issue */}
                                <section>
                                    <h2 className="text-2xl font-medium text-foreground mb-4">Report a Security Issue</h2>
                                    <p className="text-muted-foreground leading-relaxed">
                                        If you discover a security vulnerability, please report it responsibly to{" "}
                                        <a href="mailto:security@praxisflow.com" className="text-accent hover:text-accent/80 font-medium">
                                            security@praxisflow.com
                                        </a>
                                        . We appreciate your help in keeping PraxisFlow secure.
                                    </p>
                                </section>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </main>
        </div>
    );
}
