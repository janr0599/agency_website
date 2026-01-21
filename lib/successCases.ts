import { Target, Wrench, BarChart3, MessageSquareQuote } from "lucide-react";

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
    software: string[];
    timeline: string;
    keyResult: string;
}

export const successCases: CaseStudy[] = [
    {
        id: "family-law-automation",
        clientName: "Family Law Boutique",
        title: "End-to-End Intake Automation with n8n",
        industry: "Family Law",
        challenge:
            "The firm was overwhelmed by manual lead qualification and data entry. Paralegals spent over 15 hours a week manually transferring data from web forms to Clio Manage, leading to data entry errors and delayed client engagement.",
        solution:
            "We architected a comprehensive n8n workflow to handle the entire intake lifecycle. Now, when a lead submits a form, n8n automatically performs a conflict check, creates a new contact and matter in Clio, generates a custom engagement letter via DocuSign, and notifies the assigned attorney via Slack—all in under 30 seconds.",
        results: [
            "90% reduction in manual data entry",
            "Instant engagement letter generation",
            "Zero data transfer errors",
            "15+ hours of paralegal time saved weekly"
        ],
        testimonial:
            "The n8n workflow PraxisFlow built didn't just save us time; it completely professionalized our client onboarding. We're converting leads faster than ever because we're the first to respond with a contract.",
        testimonialAuthor: "Managing Partner",
        testimonialRole: "Family Law Boutique",
        software: ["n8n", "Clio Manage", "DocuSign", "Slack", "Typeform"],
        timeline: "4 weeks implementation",
        keyResult: "15+ Hours Saved Weekly"
    },
    {
        id: "estate-planning-engine",
        clientName: "Estate Planning Practice",
        title: "AI-Powered Document Drafting Engine",
        industry: "Estate Planning",
        challenge:
            "Drafting complex estate plans was a major bottleneck. Attorneys were spending hours copy-pasting clauses and manually formatting documents, which limited the firm's capacity to take on new clients.",
        solution:
            "We built a custom document generation engine using n8n and OpenAI. The system parses client intake questionnaires, structures the data, and uses an LLM to draft personalized estate documents. n8n then compiles these into a formatted PDF, saves it to SharePoint, and drafts a review email for the attorney.",
        results: [
            "Drafting time reduced from 4 hours to 5 minutes",
            "100% consistency in clause usage",
            "Doubled monthly client capacity",
            "Seamless integration with SharePoint"
        ],
        testimonial:
            "I was skeptical about AI, but this system is a game-changer. It does the heavy lifting of drafting, allowing me to focus on the legal strategy and client relationship.",
        testimonialAuthor: "Senior Associate",
        testimonialRole: "Estate Planning Firm",
        software: ["n8n", "OpenAI API", "SharePoint", "Outlook"],
        timeline: "6 weeks implementation",
        keyResult: "98% Faster Drafting"
    },
    {
        id: "civil-litigation-comms",
        clientName: "Civil Litigation Firm",
        title: "Automated Client Communication Loop",
        industry: "Civil Litigation",
        challenge:
            "The firm was plagued by constant inbound calls from clients asking for status updates. Additionally, they were missing opportunities to collect reviews and referrals after successful case closures.",
        solution:
            "We implemented a 'Client Pulse' system using n8n. Whenever a case status changes in their CRM, n8n triggers a personalized SMS and email update to the client via Twilio and SendGrid. Upon case closure, a separate workflow automatically requests feedback and guides happy clients to leave a Google review.",
        results: [
            "60% reduction in inbound status calls",
            "4.8/5 star average rating (up from 3.5)",
            "30% increase in referral business",
            "Improved client satisfaction scores"
        ],
        testimonial:
            "Our clients feel more informed and cared for, and our staff isn't tied up on the phone answering the same questions all day. The automated review requests have also significantly boosted our online reputation.",
        testimonialAuthor: "Operations Director",
        testimonialRole: "Civil Litigation Firm",
        software: ["n8n", "Twilio", "SendGrid", "Salesforce"],
        timeline: "3 weeks implementation",
        keyResult: "60% Fewer Inbound Calls"
    },
];

export async function getSuccessCaseData(id: string): Promise<CaseStudy | undefined> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 100));
    return successCases.find((c) => c.id === id);
}
