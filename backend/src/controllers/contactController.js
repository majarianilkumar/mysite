import { validationResult } from 'express-validator'
import { sendContactEmail } from '../utils/mailer.js'

export const submitContact = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(422).json({ success: false, errors: errors.array() })
  }

  try {
    const { firstName, lastName, email, subject, message } = req.body
    await sendContactEmail({ firstName, lastName, email, subject, message })
    res.json({ success: true, message: 'Message received! I\'ll be in touch soon.' })
  } catch (err) {
    console.error('Contact email error:', err)
    res.status(500).json({ success: false, message: 'Failed to send message. Please try again.' })
  }
}
