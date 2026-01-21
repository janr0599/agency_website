"use client"

import { ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

export function FAQs() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    const faqs = [
        {
            question: "What is included in the 'Ongoing Partnership' fee?",
            answer:
                "Your monthly investment includes dedicated account management, priority support (Slack, email, phone), quarterly optimization reviews, workflow adjustments and enhancements, infrastructure monitoring, and scaling support. You're not paying for a platform—you're investing in a true partner committed to your long-term success.",
        },
        {
            question: "Do you offer performance-based or ROI guarantees?",
            answer:
                "We're confident in our work and willing to discuss ROI projections during discovery. While we don't offer percentage guarantees (since results depend on implementation, firm adoption, and market factors), we commit to transparent measurement and optimization. We track KPIs like time saved, error reduction, and revenue impact quarterly and adjust our approach if targets aren't being met.",
        },
        {
            question: "Is there a minimum contract length?",
            answer:
                "The implementation phase is typically a fixed project engagement. The ongoing partnership is month-to-month with a 30-day notice for changes, giving you flexibility while ensuring we can plan and optimize effectively. For annual commitments, we offer a 10% discount on the monthly partnership fee.",
        },
        {
            question: "Why don't you have fixed pricing?",
            answer:
                "Every law firm is unique with different workflows, integrations, and scale requirements. Fixed pricing would either leave money on the table for simple projects or underprice complex implementations. We conduct a thorough discovery process to understand your specific needs, calculate ROI, and provide a transparent investment that reflects the true value delivered.",
        },
        {
            question: "What happens if we need additional integrations or changes mid-project?",
            answer:
                "Changes are handled through change requests during implementation, or folded into the ongoing partnership phase. For minor adjustments, they're typically included in your monthly fee. Significant new integrations are scoped separately and can be added to the partnership, ensuring predictability and flexibility.",
        },
        {
            question: "What if we integrate with a tool that n8n doesn't support?",
            answer:
                "n8n supports 1,000+ integrations and has powerful HTTP request capabilities that work with any tool with an API. If a tool isn't directly supported, we can build a custom integration using HTTP requests or webhooks. During discovery, we map your entire tech stack and identify any custom integration needs upfront.",
        },
    ]

    return (
        <section className="py-24 bg-secondary/50">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-medium text-[#0f172a] tracking-tight mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-slate-500 text-lg">
                        Everything you need to know about our services, security, and pricing model.
                    </p>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:border-teal-500/30 transition-all duration-300"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full p-6 flex items-center justify-between bg-white hover:bg-slate-50/50 transition-colors text-left"
                            >
                                <span className="font-medium text-slate-900">{faq.question}</span>
                                <ChevronDown
                                    className={`w-5 h-5 text-teal-600 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="px-6 bg-slate-50/50 border-t border-slate-100"
                                    >
                                        <div className="pb-6 pt-2">
                                            <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
