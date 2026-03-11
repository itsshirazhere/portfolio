import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const { name, email, subject, message } = await req.json();

        if (!name || !email || !subject || !message) {
            return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_APP_PASSWORD,
            },
        });

        await transporter.sendMail({
            from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
            to: 'shirazyousuf2017@gmail.com',
            replyTo: `"${name}" <${email}>`,
            subject: `[Portfolio] ${subject}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #0a0a0a; color: #e0e0e0; border-radius: 12px;">
                    <h2 style="color: #ffffff; margin-top: 0; font-size: 22px;">New message from your portfolio</h2>
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 10px 0; border-bottom: 1px solid #222; width: 120px; color: #888; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">Name</td>
                            <td style="padding: 10px 0; border-bottom: 1px solid #222; color: #fff; font-weight: 600;">${name}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 0; border-bottom: 1px solid #222; color: #888; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">Email</td>
                            <td style="padding: 10px 0; border-bottom: 1px solid #222;"><a href="mailto:${email}" style="color: #4ade80;">${email}</a></td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 0; border-bottom: 1px solid #222; color: #888; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">Subject</td>
                            <td style="padding: 10px 0; border-bottom: 1px solid #222; color: #fff;">${subject}</td>
                        </tr>
                    </table>
                    <div style="margin-top: 20px;">
                        <p style="color: #888; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px;">Message</p>
                        <p style="color: #e0e0e0; line-height: 1.7; white-space: pre-wrap; background: #111; padding: 16px; border-radius: 8px; margin: 0;">${message}</p>
                    </div>
                    <p style="margin-top: 24px; font-size: 12px; color: #555;">Sent from shirazhere.com</p>
                </div>
            `,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Contact email error:', error);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}
