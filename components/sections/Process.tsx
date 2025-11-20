import { ArrowRight, UserPlus, Bot, FileText, CheckCircle2 } from "lucide-react";

export default function Process() {
    return (
        <section id="workflow" className="py-24 bg-primary text-primary-foreground overflow-hidden relative">
            {/* Background Accents */}
            <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-[120px]"></div>
                <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/60 rounded-full blur-[120px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 text-primary-foreground">The Intelligent Pipeline</h2>
                        <p className="text-primary-foreground/60 max-w-md">From lead capture to signed retainer in minutes, not days.</p>
                    </div>
                    <button className="text-accent hover:text-accent/80 text-sm font-medium flex items-center gap-2">
                        See full schematic <ArrowRight className="w-4 h-4" />
                    </button>
                </div>

                {/* Workflow Diagram */}
                <div className="relative">
                    {/* Line connecting steps */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-primary-foreground/20 -translate-y-1/2 z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
                        {/* Step 1 */}
                        <div className="relative z-10 bg-primary-foreground/5 backdrop-blur border border-primary-foreground/10 p-6 rounded-xl hover:border-accent/50 transition-colors">
                            <div className="w-10 h-10 bg-primary rounded-full border border-primary-foreground/20 flex items-center justify-center mb-4 text-accent shadow-lg shadow-accent/20">
                                <UserPlus className="w-5 h-5" />
                            </div>
                            <h4 className="text-primary-foreground font-medium mb-2">New Inquiry</h4>
                            <p className="text-xs text-primary-foreground/60">Lead fills web form. Data validated and CRM entry created automatically.</p>
                            <div className="mt-4 flex gap-2">
                                <div className="h-1.5 w-full bg-primary-foreground/20 rounded-full overflow-hidden">
                                    <div className="h-full bg-accent w-full"></div>
                                </div>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="relative z-10 bg-primary-foreground/5 backdrop-blur border border-primary-foreground/10 p-6 rounded-xl hover:border-accent/50 transition-colors">
                            <div className="w-10 h-10 bg-primary rounded-full border border-primary-foreground/20 flex items-center justify-center mb-4 text-accent shadow-lg shadow-accent/20">
                                <Bot className="w-5 h-5" />
                            </div>
                            <h4 className="text-primary-foreground font-medium mb-2">Conflict Check</h4>
                            <p className="text-xs text-primary-foreground/60">System scans database for conflicts. Generates report for partner review.</p>
                            <div className="mt-4 flex gap-2">
                                <div className="h-1.5 w-full bg-primary-foreground/20 rounded-full overflow-hidden">
                                    <div className="h-full bg-accent w-3/4"></div>
                                </div>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="relative z-10 bg-primary-foreground/5 backdrop-blur border border-primary-foreground/10 p-6 rounded-xl hover:border-accent/50 transition-colors">
                            <div className="w-10 h-10 bg-primary rounded-full border border-primary-foreground/20 flex items-center justify-center mb-4 text-accent shadow-lg shadow-accent/20">
                                <FileText className="w-5 h-5" />
                            </div>
                            <h4 className="text-primary-foreground font-medium mb-2">Doc Gen</h4>
                            <p className="text-xs text-primary-foreground/60">Retainer agreement drafted with custom clauses based on case type.</p>
                            <div className="mt-4 flex gap-2">
                                <div className="h-1.5 w-full bg-primary-foreground/20 rounded-full overflow-hidden">
                                    <div className="h-full bg-accent w-1/2"></div>
                                </div>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="relative z-10 bg-primary-foreground/5 backdrop-blur border border-primary-foreground/10 p-6 rounded-xl hover:border-accent/50 transition-colors">
                            <div className="w-10 h-10 bg-primary rounded-full border border-primary-foreground/20 flex items-center justify-center mb-4 text-accent shadow-lg shadow-accent/20">
                                <CheckCircle2 className="w-5 h-5" />
                            </div>
                            <h4 className="text-primary-foreground font-medium mb-2">Execution</h4>
                            <p className="text-xs text-primary-foreground/60">Sent for e-signature. Countersigned. Filed in DMS. Invoice sent.</p>
                            <div className="mt-4 flex gap-2">
                                <div className="h-1.5 w-full bg-primary-foreground/20 rounded-full overflow-hidden">
                                    <div className="h-full bg-accent w-1/4 animate-pulse"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
