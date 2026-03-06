import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'

import { config } from './config/config.js'
import portfolioRoutes from './routes/portfolioRoutes.js'
import contactRoutes from './routes/contactRoutes.js'
import { globalLimiter, contactLimiter } from './middleware/rateLimiter.js'
import { notFound, errorHandler } from './middleware/errorHandler.js'

const app = express()

// ── Security & parsing ──────────────────────────────────────
app.use(helmet())
app.use(cors({ origin: config.frontendUrl, credentials: true }))
app.use(express.json({ limit: '10kb' }))
app.use(express.urlencoded({ extended: true }))
app.use(morgan(config.nodeEnv === 'development' ? 'dev' : 'combined'))
app.use(globalLimiter)

// ── Health check ────────────────────────────────────────────
app.get('/api/health', (_req, res) => {
  res.json({ success: true, status: 'ok', timestamp: new Date().toISOString() })
})

// ── API routes ───────────────────────────────────────────────
app.use('/api/portfolio', portfolioRoutes)
app.use('/api/contact', contactLimiter, contactRoutes)

// ── Error handling ───────────────────────────────────────────
app.use(notFound)
app.use(errorHandler)

// ── Start ────────────────────────────────────────────────────
app.listen(config.port, () => {
  console.log(`\n🚀 Portfolio API running on http://localhost:${config.port}`)
  console.log(`   ENV : ${config.nodeEnv}`)
  console.log(`   CORS: ${config.frontendUrl}\n`)
})

export default app
