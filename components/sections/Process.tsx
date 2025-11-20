import { Zap, GitMerge, Sparkles, CheckCircle2 } from "lucide-react"

export default function Process() {
    return (
        <section
            id="process"
            className="py-32 bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white overflow-hidden relative"
        >
            <div className="absolute inset-0 opacity-30 pointer-events-none">
                <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-teal-500/30 rounded-full blur-[150px]"></div>
                <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[150px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 text-white">Our End-to-End Process</h2>
                    <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
                        We build and maintain custom automation workflows for your firm. From discovery to deployment and ongoing
                        support, we handle the entire infrastructure so you can focus on practicing law.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting line with gradient */}
                    <div className="hidden lg:block absolute top-[72px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-teal-500/50 to-transparent"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Step 1 */}
                        <div className="group relative">
                            <div className="bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 p-8 rounded-2xl hover:border-teal-500/50 hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-300 h-full">
                                <div className="w-16 h-16 bg-gradient-to-br from-teal-300 to-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Zap className="w-8 h-8 text-white" />
                                </div>
                                <h4 className="text-xl font-semibold mb-3 text-white">Discovery</h4>
                                <p className="text-sm text-slate-400 leading-relaxed">
                                    We analyze your current workflows, identify pain points, and map out opportunities for automation
                                    tailored to your practice.
                                </p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="group relative">
                            <div className="bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 p-8 rounded-2xl hover:border-teal-500/50 hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-300 h-full">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-300 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <GitMerge className="w-8 h-8 text-white" />
                                </div>
                                <h4 className="text-xl font-semibold mb-3 text-white">Development</h4>
                                <p className="text-sm text-slate-400 leading-relaxed">
                                    Our team builds custom automation infrastructure that seamlessly integrates with your existing tools
                                    and systems.
                                </p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="group relative">
                            <div className="bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 p-8 rounded-2xl hover:border-teal-500/50 hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-300 h-full">
                                <div className="w-16 h-16 bg-gradient-to-br from-violet-300 to-violet-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Sparkles className="w-8 h-8 text-white" />
                                </div>
                                <h4 className="text-xl font-semibold mb-3 text-white">Delivery</h4>
                                <p className="text-sm text-slate-400 leading-relaxed">
                                    We deploy your custom workflows, train your team, and ensure everything runs smoothly from day one.
                                </p>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="group relative">
                            <div className="bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 p-8 rounded-2xl hover:border-teal-500/50 hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-300 h-full">
                                <div className="w-16 h-16 bg-gradient-to-br from-emerald-300 to-emerald-600 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <CheckCircle2 className="w-8 h-8 text-white" />
                                </div>
                                <h4 className="text-xl font-semibold mb-3 text-white">Support & Scale</h4>
                                <p className="text-sm text-slate-400 leading-relaxed">
                                    We provide continuous monitoring, maintenance, and optimization as your firm grows and evolves.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
