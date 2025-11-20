import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const caseStudies = [
    {
        client: "Summit Legal Group",
        title: "Reducing Client Onboarding Time by 75%",
        summary: "How we implemented a fully automated intake system that syncs directly with Clio, saving 15 hours per week.",
        tags: ["Intake Automation", "Clio Integration", "Family Law"],
    },
    {
        client: "Lex Partners LLP",
        title: "Automating Complex Estate Planning Documents",
        summary: "A custom document generation engine that creates 50+ page estate plans in under 3 minutes based on client questionnaire data.",
        tags: ["Document Gen", "Estate Planning", "Zero-Error"],
    },
    {
        client: "Vanguard Litigation",
        title: "Seamless Discovery Management",
        summary: "Building a custom portal for client evidence upload and automatic categorization, streamlining the discovery phase.",
        tags: ["Litigation Support", "Client Portal", "File Management"],
    },
];

export default function CaseStudiesPage() {
    return (
        <div className="w-full min-h-screen bg-background pt-24 pb-12 px-4">
            <div className="max-w-5xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-foreground">Success Stories</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Real results for forward-thinking boutique firms.
                    </p>
                </div>

                <div className="grid gap-8">
                    {caseStudies.map((study, idx) => (
                        <div key={idx} className="group relative p-8 bg-white rounded-2xl border border-border shadow-sm hover:shadow-md hover:border-primary/50 transition-all">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                                <span className="text-primary font-semibold tracking-wider text-sm uppercase">{study.client}</span>
                                <div className="flex gap-2 flex-wrap">
                                    {study.tags.map((tag) => (
                                        <span key={tag} className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full border border-border">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                                {study.title}
                            </h2>
                            <p className="text-muted-foreground text-lg mb-6">
                                {study.summary}
                            </p>
                            <Link href="/contact" className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors">
                                Read full case study <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
