import nodemailer from 'nodemailer'
import { config } from '../config/config.js'

export async function sendContactEmail({ firstName, lastName, email, subject, message }) {
  // In development, log to console if no credentials configured
  if (!config.email.user || config.email.user === 'your@gmail.com') {
    console.log('\n📧 Contact form submission (dev mode):')
    console.log({ firstName, lastName, email, subject, message })
    return { messageId: 'dev-' + Date.now() }
  }

  const transporter = nodemailer.createTransport({
    host: config.email.host,
    port: config.email.port,
    secure: false,
    auth: { user: config.email.user, pass: config.email.pass },
  })

  const info = await transporter.sendMail({
    from: `"Portfolio Contact" <${config.email.user}>`,
    to: config.email.receiver,
    replyTo: email,
    subject: `[Portfolio] ${subject}`,
    html: `
      <h2>New contact from portfolio</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <hr/>
      <p>${message.replace(/\n/g, '<br/>')}</p>
    `,
  })

  return info
}
