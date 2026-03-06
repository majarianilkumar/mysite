import request from 'supertest'
import app from '../src/server.js'

describe('Portfolio API', () => {
  it('GET /api/health → 200', async () => {
    const res = await request(app).get('/api/health')
    expect(res.statusCode).toBe(200)
    expect(res.body.success).toBe(true)
  })

  it('GET /api/portfolio → full data', async () => {
    const res = await request(app).get('/api/portfolio')
    expect(res.statusCode).toBe(200)
    expect(res.body.data).toHaveProperty('experience')
    expect(res.body.data).toHaveProperty('skills')
  })

  it('GET /api/portfolio/experience → array', async () => {
    const res = await request(app).get('/api/portfolio/experience')
    expect(Array.isArray(res.body.data)).toBe(true)
  })

  it('POST /api/contact → 422 on empty body', async () => {
    const res = await request(app).post('/api/contact').send({})
    expect(res.statusCode).toBe(422)
  })

  it('POST /api/contact → 200 on valid body', async () => {
    const res = await request(app).post('/api/contact').send({
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane@example.com',
      subject: 'Hello',
      message: 'This is a test message from the test suite.',
    })
    expect(res.statusCode).toBe(200)
    expect(res.body.success).toBe(true)
  })
})
