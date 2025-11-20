import { Briefcase, Mail, PenTool, Database, Slack, FileText, Calendar, Users, Cloud, Shield, Zap, Globe } from "lucide-react";
import { Marquee } from "../ui/marquee";

const integrations = [
    { icon: Briefcase, name: "Clio" },
    { icon: Mail, name: "Outlook" },
    { icon: PenTool, name: "DocuSign" },
    { icon: Database, name: "Notion" },
    { icon: Slack, name: "Slack" },
    { icon: FileText, name: "Google Docs" },
    { icon: Calendar, name: "Calendly" },
    { icon: Users, name: "Salesforce" },
    { icon: Cloud, name: "Dropbox" },
    { icon: Shield, name: "LexisNexis" },
    { icon: Zap, name: "Zapier" },
    { icon: Globe, name: "WordPress" },
];

export default function SocialProof() {
    return (
        <section id="integrations" className="py-12 border-y border-border bg-secondary/50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-8">Seamlessly integrated with your stack</p>

                <Marquee pauseOnHover className="[--duration:40s]">
                    {integrations.map((integration, idx) => (
                        <div
                            key={idx}
                            className="flex items-center gap-2 font-bold text-xl text-foreground tracking-tight mx-8 opacity-60 hover:opacity-100 transition-opacity duration-300"
                        >
                            <integration.icon className="w-5 h-5" />
                            {integration.name}
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    );
}
