import axios from 'axios'

// In production, VITE_API_URL points to your deployed backend (e.g. Render / Railway)
// In development, Vite's proxy rewrites /api → http://localhost:4000
const baseURL = import.meta.env.VITE_API_URL
    ? `${import.meta.env.VITE_API_URL}/api`
    : '/api'

const api = axios.create({
    baseURL,
    timeout: 10000,
    headers: { 'Content-Type': 'application/json' },
})

export const sendContactMessage = async (formData) => {
    const { data } = await api.post('/contact', formData)
    return data
}

export const fetchPortfolio = async () => {
    const { data } = await api.get('/portfolio')
    return data
}

export default api