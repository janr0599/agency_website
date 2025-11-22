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
}

export const successCases: CaseStudy[] = [
    {
        id: "niw-lead-qual",
        clientName: "Elite Global Counsel",
        title: "Instant Qualification: Screening Out Non-NIW Leads",
        industry: "Business Immigration",
        challenge:
            "The firm spent valuable attorney time on discovery calls with leads who ultimately did not meet the stringent EB-2 NIW criteria. The firm needed to automate the screening and intake process to only focus on high-value prospects.",
        solution:
            "We created an intelligent, automated **lead qualification workflow** using **n8n**. A detailed pre-screening form collects critical eligibility data. **n8n immediately processes the responses** against firm-defined eligibility rules. Qualified leads are auto-scheduled for a discovery call and pre-populated into the firm's CRM, while unqualified leads receive a personalized, helpful referral email—saving attorney time and offering a positive client experience for everyone.",
        results: [
            "Elimination of 95% of unqualified discovery calls",
            "Attorneys recovered **10 hours of non-billable time per week**",
            "Time-to-engagement for high-value leads reduced by 72 hours",
            "Client satisfaction maintained with personalized rejection/referral paths"
        ],
        testimonial:
            "Before PraxisFlow, my calendar was full of time-wasting calls. Now, every consultation is a genuinely qualified opportunity. Our capacity isn't limited by lead volume; it's limited only by our strategic legal bandwidth.",
        testimonialAuthor: "Adrian Lee",
        testimonialRole: "Managing Partner",
    },
    {
        id: "summit-legal-group",
        clientName: "Summit Legal Group",
        title: "End-to-End Intake Automation with n8n",
        industry: "Family Law",
        challenge:
            "Summit Legal Group was overwhelmed by manual lead qualification and data entry. Paralegals spent over 15 hours a week manually transferring data from web forms to Clio Manage, leading to data entry errors and delayed client engagement.",
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
        testimonialAuthor: "Sarah Jenkins",
        testimonialRole: "Managing Partner",
    },
    {
        id: "lex-partners-llp",
        clientName: "Lex Partners LLP",
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
        testimonialAuthor: "Michael Chang",
        testimonialRole: "Senior Associate",
    },
    {
        id: "vanguard-litigation",
        clientName: "Vanguard Litigation",
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
        testimonialAuthor: "Elena Rodriguez",
        testimonialRole: "Operations Director",
    },
];

export async function getSuccessCaseData(id: string): Promise<CaseStudy | undefined> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 100));
    return successCases.find((c) => c.id === id);
}
