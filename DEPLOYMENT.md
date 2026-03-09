# 🚀 Deployment Guide — John Doe Portfolio (Vercel)

This guide walks you through deploying both the frontend and backend
to **Vercel** with your code hosted on **GitHub**.

---

## Architecture

```
GitHub (source code)
       │
       │  git push → Vercel detects change automatically
       ▼
┌──────────────────────────────────────────────────────┐
│  Vercel                                              │
│                                                      │
│  Frontend (React SPA)    Backend (Serverless API)    │
│  johndoe.vercel.app  →   portfolio-api.vercel.app    │
│  or yourdomain.com       /api/health                 │
│                          /api/contact                │
│                          /api/portfolio              │
└──────────────────────────────────────────────────────┘
         │                        │
    Custom domain            Resend (email)
    (optional)               resend.com
```

---

## Step 1 — Push code to GitHub

```bash
cd portfolio
git init
git add .
git commit -m "feat: initial portfolio — Vercel setup"
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

---

## Step 2 — Deploy the Backend to Vercel

1. Go to **vercel.com** → Sign up with GitHub
2. Click **Add New → Project**
3. Import your `portfolio` repository
4. On the configuration screen:
   - **Root Directory:** click Edit → type `backend`
   - **Framework Preset:** Other
   - **Build Command:** leave empty
   - **Output Directory:** leave empty
   - **Install Command:** `npm install`
5. Add Environment Variables:

| Name | Value |
|---|---|
| `NODE_ENV` | `production` |
| `FRONTEND_URL` | `https://portfolio-frontend-johndoe.vercel.app` (update after Step 3) |
| `RESEND_API_KEY` | `re_your_key_from_resend.com` |
| `CONTACT_RECEIVER` | `your@email.com` |

6. Click **Deploy** → copy the URL (e.g. `https://portfolio-backend-johndoe.vercel.app`)

---

## Step 3 — Deploy the Frontend to Vercel

1. Click **Add New → Project** again → import the same repo
2. Configuration screen:
   - **Root Directory:** `frontend`
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
3. Add Environment Variables:

| Name | Value |
|---|---|
| `VITE_API_URL` | `https://portfolio-backend-johndoe.vercel.app` (URL from Step 2) |

4. Click **Deploy** → copy the frontend URL

---

## Step 4 — Update FRONTEND_URL in the backend

Go to Vercel → backend project → Settings → Environment Variables →
update `FRONTEND_URL` to the real frontend URL from Step 3 → Redeploy.

---

## Step 5 — Add a Custom Domain (optional)

Vercel → frontend project → Settings → Domains → type your domain → Add.
Vercel gives you DNS records to add at your registrar and handles SSL automatically.

---

## Verify Everything Works

```
✅ Backend  → https://portfolio-backend-johndoe.vercel.app/api/health
✅ Frontend → https://portfolio-frontend-johndoe.vercel.app
✅ Contact  → fill form on site → check your inbox
✅ HTTPS    → padlock icon in browser
✅ CI       → GitHub → Actions tab → green checkmarks
```
