import { Resend } from 'resend'
import { config } from '../config/config.js'

export async function sendContactEmail({ firstName, lastName, email, subject, message }) {
    // Dev mode — log to console if no Resend API key configured
    if (!config.resendApiKey) {
        console.log('\n📧 Contact form submission (dev mode — no RESEND_API_KEY set):')
        console.log({ firstName, lastName, email, subject, message })
        return { id: 'dev-' + Date.now() }
    }

    const resend = new Resend(config.resendApiKey)

    const { data, error } = await resend.emails.send({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: config.email.receiver,
        reply_to: email,
        subject: `[Portfolio] ${subject}`,
        html: `
      <div style="font-family:sans-serif;max-width:560px;margin:0 auto;">
        <h2 style="color:#6c63ff;margin-bottom:4px;">New message from your portfolio</h2>
        <hr style="border:1px solid #e2e8f0;margin:16px 0"/>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr style="border:1px solid #e2e8f0;margin:16px 0"/>
        <p style="white-space:pre-line;">${message}</p>
      </div>
    `,
    })

    if (error) throw new Error(error.message)
    return data
}