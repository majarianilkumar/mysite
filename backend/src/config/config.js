import 'dotenv/config'

// FRONTEND_URL can be a comma-separated list:
// e.g. "https://johndoe.dev,https://www.johndoe.dev"
const parseFrontendUrls = (raw) => {
  if (!raw) return ['http://localhost:5173']
  return raw.split(',').map((u) => u.trim())
}

export const config = {
  port: process.env.PORT || 4000,
  nodeEnv: process.env.NODE_ENV || 'development',
  frontendUrls: parseFrontendUrls(process.env.FRONTEND_URL),
  frontendUrl: process.env.FRONTEND_URL?.split(',')[0]?.trim() || 'http://localhost:5173',

  // Resend API key — get yours free at resend.com
  resendApiKey: process.env.RESEND_API_KEY || '',

  email: {
    // Only CONTACT_RECEIVER is needed now — where emails are delivered to
    receiver: process.env.CONTACT_RECEIVER || 'john.doe@example.com',
  },
}
