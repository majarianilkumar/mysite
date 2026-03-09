// backend/api/index.js
// Vercel looks for this file as the serverless function entry point.
// It wraps the existing Express app — no changes needed to any other backend file.
import app from '../src/server.js'

export default app
