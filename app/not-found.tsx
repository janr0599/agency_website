import Link from "next/link";
import { FadeIn } from "@/components/ui/fade-in";
import { DotPattern } from "@/components/ui/dot-pattern";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <div className="w-full min-h-screen bg-background flex flex-col items-center justify-center relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <DotPattern
                    width={20}
                    height={20}
                    cx={1}
                    cy={1}
                    cr={1}
                    className={cn(
                        "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
                        "text-accent/10"
                    )}
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]"></div>
            </div>

            <div className="container mx-auto px-4 text-center relative z-10">
                <FadeIn>
                    <h1 className="text-6xl md:text-9xl font-bold text-foreground tracking-tighter mb-6">
                        404
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-6">
                        Page Not Found
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-lg mx-auto mb-10 leading-relaxed">
                        The page you are looking for doesn't exist or has been moved. Let's get you back on track.
                    </p>
                </FadeIn>

                <FadeIn>
                    <Link
                        href="/"
                        className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 group font-medium transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
                        Return Home
                    </Link>
                </FadeIn>
            </div>
        </div>
    );
}
