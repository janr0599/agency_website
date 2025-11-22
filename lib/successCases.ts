export interface CaseStudy {
    id: string;
    clientName: string;
    title: string;
    industry: string;
    challenge: string;
    solution: string;
    results: string[];
    testimonial?: string;
    testimonialAuthor?: string;
    testimonialRole?: string;
}

const caseStudies: CaseStudy[] = [
    {
        id: "summit-legal-group",
        clientName: "Summit Legal Group",
        title: "Reducing Client Onboarding Time by 75%",
        industry: "Family Law",
        challenge:
            "Summit Legal Group was struggling with a manual intake process that consumed over 15 hours of paralegal time per week. Data entry errors were common, and potential clients often dropped off due to the slow response time.",
        solution:
            "We implemented a fully automated intake system using Typeform and Zapier, integrated directly with their Clio Manage practice management software. The system automatically creates contacts, matters, and generates engagement letters upon form submission.",
        results: [
            "75% reduction in onboarding time",
            "15+ hours saved per week",
            "Zero data entry errors since launch",
            "20% increase in lead conversion rate",
        ],
        testimonial:
            "PraxisFlow transformed our practice. We used to drown in paperwork; now, new clients are onboarded while we sleep. It's been a game-changer for our profitability.",
        testimonialAuthor: "Sarah Jenkins",
        testimonialRole: "Managing Partner",
    },
    {
        id: "lex-partners-llp",
        clientName: "Lex Partners LLP",
        title: "Automating Complex Estate Planning Documents",
        industry: "Estate Planning",
        challenge:
            "Drafting complex estate plans was a bottleneck. Attorneys spent hours copy-pasting clauses, leading to burnout and a cap on the number of clients they could serve.",
        solution:
            "We built a custom document generation engine using Gavel (formerly Documate). By standardizing their logic into a smart questionnaire, we enabled the generation of 50+ page estate plans in under 3 minutes.",
        results: [
            "Document drafting time reduced from 4 hours to 3 minutes",
            "Double the client capacity without hiring new staff",
            "100% consistency in document language",
        ],
        testimonial:
            "I was skeptical that automation could handle the nuance of our work. I was wrong. The quality is perfect, and I have my weekends back.",
        testimonialAuthor: "Michael Ross",
        testimonialRole: "Senior Associate",
    },
    {
        id: "vanguard-litigation",
        clientName: "Vanguard Litigation",
        title: "Seamless Discovery Management",
        industry: "Litigation",
        challenge:
            "Managing thousands of evidence files for class-action lawsuits was chaotic. Files were scattered across email, Dropbox, and local servers, making discovery a nightmare.",
        solution:
            "We developed a secure, custom client portal for evidence upload. Files are automatically renamed, categorized, and synced to the correct matter in their case management system, with a searchable index generated automatically.",
        results: [
            "Discovery processing time cut by 60%",
            "Instant retrieval of any file",
            "Improved client security and compliance",
        ],
        testimonial:
            "The organization this system brought to our firm is invaluable. We can focus on strategy instead of searching for missing PDFs.",
        testimonialAuthor: "David Chen",
        testimonialRole: "Partner",
    },
];

export async function getSuccessCaseData(id: string): Promise<CaseStudy | null> {
    // Simulate network delay if needed, but for now just return static data
    const study = caseStudies.find((s) => s.id === id);
    return study || null;
}
