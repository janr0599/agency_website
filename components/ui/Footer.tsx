import { Twitter, Linkedin, Github } from "lucide-react";
import Image from "next/image";
import { FadeIn } from "./fade-in";

export default function Footer() {
    return (
        <footer className="bg-background border-t border-border pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6">
                <FadeIn>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
                        <div className="col-span-2">
                            <div className="mb-6">
                                <Image src="/logo-text.svg" alt="PraxisFlow Logo" width={98} height={98} className="rounded" />
                            </div>
                            <p className="text-sm text-muted-foreground max-w-xs mb-6">Automating the legal industry, one workflow at a time. Secure, efficient, and tailored for growth.</p>
                            <div className="flex gap-4 text-muted-foreground">
                                <a href="#" className="hover:text-accent transition-colors"><Twitter className="w-5 h-5" /></a>
                                <a href="#" className="hover:text-accent transition-colors"><Linkedin className="w-5 h-5" /></a>
                                <a href="#" className="hover:text-accent transition-colors"><Github className="w-5 h-5" /></a>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-medium text-foreground mb-4 text-sm">Product</h4>
                            <ul className="space-y-3 text-sm text-muted-foreground">
                                <li><a href="/#services" className="hover:text-accent transition-colors">Services</a></li>
                                <li><a href="/#pricing" className="hover:text-accent transition-colors">Pricing</a></li>
                                <li><a href="/case-studies" className="hover:text-accent transition-colors">Case Studies</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-medium text-foreground mb-4 text-sm">Company</h4>
                            <ul className="space-y-3 text-sm text-muted-foreground">
                                <li><a href="/about" className="hover:text-accent transition-colors">About</a></li>
                                <li><a href="/#testimonials" className="hover:text-accent transition-colors">Customers</a></li>
                                <li><a href="/contact" className="hover:text-accent transition-colors">Contact</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-medium text-foreground mb-4 text-sm">Legal</h4>
                            <ul className="space-y-3 text-sm text-muted-foreground">
                                <li><a href="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</a></li>
                                <li><a href="/terms-of-use" className="hover:text-accent transition-colors">Terms of Use</a></li>
                            </ul>
                        </div>
                    </div>
                </FadeIn>
                <FadeIn delay={0.2}>
                    <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border">
                        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} PraxisFlow Inc. All rights reserved.</p>
                        <div className="flex items-center gap-2 mt-4 md:mt-0">
                            <div className="w-2 h-2 rounded-full bg-accent"></div>
                            <span className="text-xs text-muted-foreground font-medium">All systems operational</span>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </footer>
    );
}
