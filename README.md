# John Doe – Full Stack Developer Portfolio

![Deploy](https://github.com/YOUR_USERNAME/portfolio/actions/workflows/deploy.yml/badge.svg)
![PR Checks](https://github.com/YOUR_USERNAME/portfolio/actions/workflows/pr-checks.yml/badge.svg)

A modern, full-stack portfolio website built with **React + Vite (frontend)** and **Node.js + Express (backend)**.

📖 **See [DEPLOYMENT.md](./DEPLOYMENT.md) for the full step-by-step guide to deploy to GitHub Pages with a custom domain.**

---

## 📁 Project Structure

```
portfolio/
├── frontend/               # React + Vite + Tailwind CSS
│   ├── public/
│   └── src/
│       ├── assets/         # Images, icons
│       ├── components/
│       │   ├── layout/     # Navbar, Footer, Loader
│       │   ├── sections/   # Hero, About, Skills, Experience, Awards, Certs, Contact
│       │   └── ui/         # Button, Card, Badge, Tag, SectionHeader
│       ├── data/           # All portfolio content (centralised)
│       ├── hooks/          # Custom React hooks
│       ├── styles/         # Global CSS / Tailwind config
│       └── utils/          # Helper functions
│
├── backend/                # Node.js + Express REST API
│   └── src/
│       ├── config/         # Environment config, constants
│       ├── controllers/    # Route handler logic
│       ├── middleware/      # Auth, error handling, rate limiting
│       ├── models/         # Data models / schemas
│       ├── routes/         # API route definitions
│       └── utils/          # Shared utilities, mailer
│
├── package.json            # Root scripts (run both with concurrently)
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js >= 18
- npm >= 9

### Install all dependencies
```bash
npm run install:all
```

### Run in development (frontend + backend together)
```bash
npm run dev
```

- Frontend: http://localhost:5173
- Backend API: http://localhost:4000

### Build frontend for production
```bash
npm run build
```

---

## 🌐 API Endpoints

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/api/health` | Health check |
| GET | `/api/portfolio` | Full portfolio data |
| GET | `/api/portfolio/experience` | Work experience |
| GET | `/api/portfolio/skills` | Skills list |
| GET | `/api/portfolio/awards` | Awards |
| GET | `/api/portfolio/certifications` | Certifications |
| POST | `/api/contact` | Send contact message |

---

## 🛠 Tech Stack

### Frontend
- React 18 + Vite
- Tailwind CSS
- React Router v6
- Axios
- Lucide React (icons)

### Backend
- Node.js + Express
- Nodemailer (contact form)
- Express Rate Limit
- CORS
- dotenv

---

## 📄 Environment Variables

Copy `.env.example` to `.env` in the `backend/` folder:

```env
PORT=4000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your@email.com
EMAIL_PASS=your_app_password
CONTACT_RECEIVER=john.doe@example.com
```
