import { Star } from "lucide-react";
import { Marquee } from "../ui/marquee";
import { FadeIn } from "../ui/fade-in";

const testimonials = [
    {
        quote: "Before PraxisFlow, our intake process was a mess of sticky notes and lost emails. Now, a client signs up and the entire case file is built before I've even had my morning coffee.",
        name: "Elena Sterling",
        title: "Partner, Sterling & Co.",
        initials: "ES"
    },
    {
        quote: "The ROI was immediate. We reduced non-billable administrative time by 40% in the first month. The custom dashboards give us clarity we never had.",
        name: "Marcus James",
        title: "Managing Director, James Legal Group",
        initials: "MJ"
    },
    {
        quote: "PraxisFlow transformed our document generation process. What used to take hours now takes minutes, and the accuracy is perfect every time.",
        name: "Sarah Chen",
        title: "Senior Attorney, Chen & Associates",
        initials: "SC"
    },
    {
        quote: "The automation workflows are incredibly intuitive. Our team was up and running in less than a week, and we've already saved countless hours.",
        name: "David Rodriguez",
        title: "Operations Manager, Rodriguez Law Firm",
        initials: "DR"
    },
    {
        quote: "Client onboarding used to be our biggest bottleneck. PraxisFlow streamlined everything, and our clients love the professional experience.",
        name: "Jennifer Park",
        title: "Founding Partner, Park Legal Services",
        initials: "JP"
    },
    {
        quote: "The integration with our existing tools was seamless. PraxisFlow fits perfectly into our workflow without disrupting our processes.",
        name: "Michael Thompson",
        title: "Managing Partner, Thompson & Associates",
        initials: "MT"
    },
    {
        quote: "We've been able to take on 30% more clients without hiring additional staff. PraxisFlow handles the administrative work so we can focus on legal strategy.",
        name: "Rachel Martinez",
        title: "Partner, Martinez Law Group",
        initials: "RM"
    },
    {
        quote: "The support team is outstanding. They helped us customize workflows specific to our practice areas, and the results have been phenomenal.",
        name: "James Wilson",
        title: "Senior Partner, Wilson & Partners",
        initials: "JW"
    },
];

const firstRow = testimonials.slice(0, 4);
const secondRow = testimonials.slice(4, 8);

const TestimonialCard = ({ quote, name, title, initials }: typeof testimonials[0]) => (
    <div className="bg-card p-6 rounded-2xl shadow-sm border border-border w-[400px] mx-4">
        <div className="flex text-accent mb-4">
            {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
            ))}
        </div>
        <p className="text-foreground/80 text-base leading-relaxed mb-6">{quote}</p>
        <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center font-bold text-muted-foreground">
                {initials}
            </div>
            <div>
                <p className="text-sm font-semibold text-foreground">{name}</p>
                <p className="text-xs text-muted-foreground">{title}</p>
            </div>
        </div>
    </div>
);

export default function Testimonials() {
    return (
        <section className="py-24 bg-secondary/50 border-y border-border overflow-hidden">
            <FadeIn>
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-medium text-foreground tracking-tight mb-16 text-center">
                        Partners trust us.
                    </h2>

                    <div className="space-y-8">
                        {/* First Row - Scrolling Left to Right */}
                        <FadeIn delay={0.2}>
                            <Marquee pauseOnHover className="[--duration:50s]">
                                {firstRow.map((testimonial, idx) => (
                                    <TestimonialCard key={idx} {...testimonial} />
                                ))}
                            </Marquee>
                        </FadeIn>

                        {/* Second Row - Scrolling Right to Left */}
                        <FadeIn delay={0.4}>
                            <Marquee pauseOnHover reverse className="[--duration:50s]">
                                {secondRow.map((testimonial, idx) => (
                                    <TestimonialCard key={idx} {...testimonial} />
                                ))}
                            </Marquee>
                        </FadeIn>
                    </div>
                </div>
            </FadeIn>
        </section>
    );
}
