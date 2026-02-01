import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const { name, email, firm, message } = await req.json();

        if (!name || !email || !firm || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 're_123456789') {
            return NextResponse.json(
                { error: 'Resend API key is not configured' },
                { status: 500 }
            );
        }

        const { data, error } = await resend.emails.send({
            from: 'PraxisFlow Contact <onboarding@resend.dev>',
            to: ['javier@smartnode.solutions'],
            subject: `New Contact Form Submission: ${firm}`,
            replyTo: email,
            html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Firm:</strong> ${firm}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
        });

        if (error) {
            console.error('Resend API Error:', error);
            return NextResponse.json({ error: error.message || 'Failed to send email' }, { status: 500 });
        }

        return NextResponse.json({ success: true, data });
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
