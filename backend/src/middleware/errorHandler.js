export const notFound = (req, res) => {
  res.status(404).json({ success: false, message: `Route ${req.originalUrl} not found` })
}

export const errorHandler = (err, _req, res, _next) => {
  const status = err.statusCode || 500
  console.error(`[Error] ${err.message}`)
  res.status(status).json({
    success: false,
    message: err.message || 'Internal server error',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  })
}
