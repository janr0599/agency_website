"use client"

import { ArrowRight, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

import Counter from "@/components/ui/counter"

export function PathwaysToEngagement() {
    return (
        <section className="py-24 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column: Text & Value Prop */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-medium text-[#0f172a] tracking-tight mb-6 leading-tight">
                            Investment Built on <span className="block text-teal-600">Trust</span>
                        </h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            We believe pricing should reflect value, not guesswork. Your firm gets a transparent, customized investment tailored to your goals and budget.
                        </p>

                        <div className="space-y-6 mb-10">
                            {[
                                {
                                    title: "No Hidden Costs",
                                    description: "Clear upfront estimates. Your budget stays in control."
                                },
                                {
                                    title: "Proven Outcomes",
                                    description: "We measure ROI. Every automation is built to deliver measurable results."
                                },
                                {
                                    title: "Long-Term Support",
                                    description: "We don't disappear after launch. Ongoing optimization included."
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-4 items-start">
                                    <div className="mt-1">
                                        <CheckCircle2 className="w-6 h-6 text-teal-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-[#0f172a] text-lg">{item.title}</h3>
                                        <p className="text-slate-600">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Link href="/pricing" className="inline-block">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex items-center gap-2 bg-[#0f172a] text-white px-8 py-4 rounded-xl font-medium hover:bg-slate-800 transition-colors group"
                            >
                                Explore Our Approach
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                        </Link>
                    </motion.div>

                    {/* Right Column: Impact Metrics Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-slate-50 rounded-3xl p-8 md:p-10 border border-slate-200 relative overflow-hidden"
                    >
                        <div className="space-y-10 relative z-10">
                            {/* Metric 1 */}
                            <div>
                                <p className="text-sm font-semibold text-teal-600 tracking-wider uppercase mb-2">Average Client Impact</p>
                                <p className="text-4xl md:text-5xl font-medium text-[#0f172a] mb-2">
                                    <Counter value={20} />+ hours
                                </p>
                                <p className="text-slate-500">saved per week through automation</p>
                            </div>

                            <div className="h-px bg-slate-200 w-full" />

                            {/* Metric 2 */}
                            <div>
                                <p className="text-sm font-semibold text-slate-500 tracking-wider uppercase mb-2">Implementation</p>
                                <p className="text-3xl md:text-4xl font-medium text-[#0f172a] mb-2">
                                    <Counter value={4} />-<Counter value={6} /> weeks
                                </p>
                                <p className="text-slate-500">from discovery to delivery</p>
                            </div>

                            <div className="h-px bg-slate-200 w-full" />

                            {/* Item 3 */}
                            <div>
                                <p className="text-sm font-semibold text-slate-500 tracking-wider uppercase mb-2">Support & Scaling</p>
                                <p className="text-slate-600 leading-relaxed">
                                    Ongoing optimization and maintenance as your firm evolves
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
