import React from "react";

export default function AboutPage() {
    return (
        <div className="w-full min-h-screen bg-background pt-24 pb-12 px-4">
            <div className="max-w-4xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-foreground">About PraxisFlow</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        We are engineers and legal operations experts dedicated to modernizing the practice of law.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 text-foreground">
                        <h2 className="text-2xl font-bold text-foreground">Our Mission</h2>
                        <p>
                            The legal industry is burdened by administrative friction. Our mission is to eliminate that friction through intelligent automation, allowing attorneys to return to the work they were trained to do.
                        </p>
                        <p>
                            We believe that boutique firms should have access to the same operational efficiency as Big Law, without the massive overhead.
                        </p>
                    </div>
                    <div className="h-64 bg-white rounded-2xl border border-border flex items-center justify-center shadow-sm">
                        <span className="text-muted-foreground font-mono">Mission Visualization</span>
                    </div>
                </div>

                <div className="space-y-8">
                    <h2 className="text-3xl font-bold text-foreground text-center">Our Philosophy</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 bg-white rounded-xl border border-border shadow-sm">
                            <h3 className="text-xl font-bold text-foreground mb-2">Precision First</h3>
                            <p className="text-muted-foreground">In law, details matter. Our automations are built with zero-tolerance for error.</p>
                        </div>
                        <div className="p-6 bg-white rounded-xl border border-border shadow-sm">
                            <h3 className="text-xl font-bold text-foreground mb-2">Human-Centric</h3>
                            <p className="text-muted-foreground">We automate tasks, not relationships. Technology should enhance the client experience, not replace it.</p>
                        </div>
                        <div className="p-6 bg-white rounded-xl border border-border shadow-sm">
                            <h3 className="text-xl font-bold text-foreground mb-2">Future-Proof</h3>
                            <p className="text-muted-foreground">We build scalable systems that grow with your firm, adapting to new challenges and technologies.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
