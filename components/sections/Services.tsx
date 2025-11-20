"use client";
import { Files, Users, Scale, Workflow } from "lucide-react";
import { BentoCard, BentoGrid } from "../ui/bento-grid";
import { AnimatedBeam } from "../ui/animated-beam";
import { Marquee } from "../ui/marquee";
import { cn } from "@/lib/utils";
import { forwardRef, useRef } from "react";

const Circle = forwardRef<
    HTMLDivElement,
    { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                "z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 bg-background p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
                className
            )}
        >
            {children}
        </div>
    );
});

Circle.displayName = "Circle";

function AnimatedBeamDemo() {
    const containerRef = useRef<HTMLDivElement>(null);
    const div1Ref = useRef<HTMLDivElement>(null);
    const div2Ref = useRef<HTMLDivElement>(null);
    const div3Ref = useRef<HTMLDivElement>(null);
    const div4Ref = useRef<HTMLDivElement>(null);
    const div5Ref = useRef<HTMLDivElement>(null);
    const div6Ref = useRef<HTMLDivElement>(null);
    const div7Ref = useRef<HTMLDivElement>(null);

    return (
        <div
            className="relative flex h-full w-full items-center justify-center overflow-hidden p-10"
            ref={containerRef}
        >
            <div className="flex size-full max-w-lg flex-row items-stretch justify-between gap-10">
                <div className="flex flex-col justify-center">
                    <Circle ref={div7Ref}>
                        <Icons.user />
                    </Circle>
                </div>
                <div className="flex flex-col justify-center">
                    <Circle ref={div6Ref} className="size-16">
                        <Icons.openai />
                    </Circle>
                </div>
                <div className="flex flex-col justify-center gap-2">
                    <Circle ref={div1Ref}>
                        <Icons.googleDrive />
                    </Circle>
                    <Circle ref={div2Ref}>
                        <Icons.googleDocs />
                    </Circle>
                    <Circle ref={div3Ref}>
                        <Icons.whatsapp />
                    </Circle>
                    <Circle ref={div4Ref}>
                        <Icons.messenger />
                    </Circle>
                    <Circle ref={div5Ref}>
                        <Icons.notion />
                    </Circle>
                </div>
            </div>

            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div7Ref}
                toRef={div6Ref}
                gradientStartColor="#0d9488"
                gradientStopColor="#0f172a"
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div6Ref}
                toRef={div1Ref}
                gradientStartColor="#0d9488"
                gradientStopColor="#0f172a"
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div6Ref}
                toRef={div2Ref}
                gradientStartColor="#0d9488"
                gradientStopColor="#0f172a"
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div6Ref}
                toRef={div3Ref}
                gradientStartColor="#0d9488"
                gradientStopColor="#0f172a"
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div6Ref}
                toRef={div4Ref}
                gradientStartColor="#0d9488"
                gradientStopColor="#0f172a"
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div6Ref}
                toRef={div5Ref}
                gradientStartColor="#0d9488"
                gradientStopColor="#0f172a"
            />
        </div>
    );
}

const Icons = {
    googleDrive: () => (
        <svg width="100%" height="100%" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
            <path fill="#0066DA" d="M85.333 0L0 149.333h42.667L128 0z" />
            <path fill="#00AC47" d="M170.667 0H85.333L128 85.333l85.333 149.334h42.667z" />
            <path fill="#EA4335" d="M128 85.333L42.667 234.667h170.666z" />
        </svg>
    ),
    googleDocs: () => (
        <svg width="100%" height="100%" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
            <path fill="#4285F4" d="M58.667 0h96L213.333 58.667V256H58.667z" />
            <path fill="#A1C2FA" d="M154.667 0v58.667h58.666z" />
        </svg>
    ),
    notion: () => (
        <svg width="100%" height="100%" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
            <path fill="#000" d="M0 0h256v256H0z" />
            <path fill="#FFF" d="M64 64h128v128H64z" />
        </svg>
    ),
    openai: () => (
        <svg width="100%" height="100%" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
            <circle cx="128" cy="128" r="96" fill="#10A37F" />
        </svg>
    ),
    zapier: () => (
        <svg width="100%" height="100%" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
            <circle cx="128" cy="128" r="96" fill="#FF4A00" />
        </svg>
    ),
    whatsapp: () => (
        <svg width="100%" height="100%" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
            <circle cx="128" cy="128" r="96" fill="#25D366" />
        </svg>
    ),
    messenger: () => (
        <svg width="100%" height="100%" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
            <circle cx="128" cy="128" r="96" fill="#0084FF" />
        </svg>
    ),
    user: () => (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            strokeWidth="2"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
        </svg>
    ),
};

const documents = [
    { name: "NDA.pdf", type: "Contract" },
    { name: "Retainer.docx", type: "Agreement" },
    { name: "Pleading.pdf", type: "Legal Doc" },
    { name: "Motion.docx", type: "Filing" },
];

const services = [
    {
        name: "Document Automation",
        description: "Generate NDAs, retainer agreements, and pleadings instantly from client intake forms.",
        Icon: Files,
        href: "/contact",
        cta: "Learn more",
        background: (
            <Marquee
                pauseOnHover
                className="absolute top-10 [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] [--duration:20s]"
            >
                {documents.map((doc, idx) => (
                    <div
                        key={idx}
                        className={cn(
                            "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
                            "border-border bg-card hover:bg-secondary",
                            "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
                        )}
                    >
                        <div className="flex flex-col">
                            <p className="text-sm font-medium text-foreground">{doc.name}</p>
                            <p className="text-xs text-muted-foreground mt-1">{doc.type}</p>
                        </div>
                    </div>
                ))}
            </Marquee>
        ),
        className: "md:col-span-2 md:row-span-1",
    },
    {
        name: "Workflow Integration",
        description: "Connect your existing tools seamlessly. We integrate with Clio, DocuSign, Outlook, and 50+ platforms.",
        Icon: Workflow,
        href: "/contact",
        cta: "Learn more",
        background: (
            <div className="absolute inset-0 transition-all duration-300 ease-out group-hover:scale-105 [mask-image:linear-gradient(to_top,transparent_20%,#000_100%)]">
                <AnimatedBeamDemo />
            </div>
        ),
        className: "md:col-span-2 md:row-span-2",
    },
    {
        name: "Case Management",
        description: "Sync deadlines to calendars, auto-tag emails to matter files, and receive daily digests.",
        Icon: Scale,
        href: "/contact",
        cta: "Learn more",
        background: <div className="absolute inset-0" />,
        className: "md:col-span-2 md:row-span-1",
    },
    {
        name: "Client Onboarding",
        description: "Automated email sequences, secure portal creation, and KYC checks triggered instantly.",
        Icon: Users,
        href: "/contact",
        cta: "Learn more",
        background: <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />,
        className: "md:col-span-4 md:row-span-1",
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24 max-w-7xl mx-auto px-6 bg-background">
            <div className="mb-16 md:mb-24">
                <h2 className="text-3xl md:text-4xl font-medium text-foreground tracking-tight mb-4">
                    Engineering efficiency for legal minds.
                </h2>
                <p className="text-muted-foreground max-w-xl text-lg">
                    Stop copying and pasting data between spreadsheets and contracts. Our systems handle the busy work.
                </p>
            </div>

            <BentoGrid className="grid-cols-1 md:grid-cols-4 auto-rows-[12rem]">
                {services.map((service, idx) => (
                    <BentoCard key={idx} {...service} />
                ))}
            </BentoGrid>
        </section>
    );
}
