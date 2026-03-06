# 🚀 Deployment Guide — John Doe Portfolio

This guide walks you through publishing your code to GitHub, deploying the
frontend to GitHub Pages, deploying the backend to a free cloud service,
and connecting a custom domain.

---

## 📋 Table of Contents

1. [Push Code to GitHub](#1-push-code-to-github)
2. [Enable GitHub Pages](#2-enable-github-pages)
3. [Deploy Backend (Free)](#3-deploy-backend-free)
4. [Set GitHub Secrets](#4-set-github-secrets)
5. [Connect a Custom Domain](#5-connect-a-custom-domain)
6. [Domain Providers — Free & Cheap](#6-domain-providers--free--cheap)
7. [DNS Configuration](#7-dns-configuration)
8. [Verify Everything Works](#8-verify-everything-works)

---

## 1. Push Code to GitHub

### Create the repository

1. Go to https://github.com/new
2. Name it `portfolio` (or `johndoe.github.io` for a root Pages domain)
3. Set it to **Public** (required for free GitHub Pages)
4. Do **not** add a README — you already have one
5. Click **Create repository**

### Push from your machine

```bash
cd portfolio

# Initialise git
git init
git add .
git commit -m "feat: initial portfolio setup"

# Connect to GitHub (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

---

## 2. Enable GitHub Pages

1. Go to your repo → **Settings** → **Pages** (left sidebar)
2. Under **Source**, select **GitHub Actions**
3. Save

The `deploy.yml` workflow will automatically build and deploy on every push
to `main`. Your site will be live at:

```
https://YOUR_USERNAME.github.io/portfolio/
```

Or, once you add a custom domain:

```
https://yourdomain.com
```

---

## 3. Deploy Backend (Free)

The frontend is static and lives on GitHub Pages.
The backend (Express API) needs a separate host. Here are the best **free** options:

### Option A — Render (Recommended ⭐)

1. Sign up at https://render.com
2. Click **New → Web Service**
3. Connect your GitHub repo
4. Configure:
   - **Root directory:** `backend`
   - **Build command:** `npm install`
   - **Start command:** `node src/server.js`
   - **Environment:** Node 20
5. Add environment variables (see Section 4)
6. Click **Deploy**

Free tier: 750 hrs/month, spins down after 15 min inactivity (cold start ~30s).

### Option B — Railway

1. Sign up at https://railway.app
2. **New Project → Deploy from GitHub**
3. Select your repo, set root to `backend`
4. Add env vars
5. Deploy

Free tier: $5 of compute/month (roughly always-on for a small API).

### Option C — Fly.io

```bash
# Install flyctl
curl -L https://fly.io/install.sh | sh

# In the backend directory
cd backend
fly launch     # follow prompts
fly deploy
```

Free tier: 3 shared VMs, 256 MB RAM each.

---

## 4. Set GitHub Secrets

Go to your repo → **Settings** → **Secrets and variables** → **Actions** →
click **New repository secret** for each:

| Secret name | Value | Used by |
|---|---|---|
| `VITE_API_URL` | `https://your-backend.onrender.com` | Frontend build |

The backend's secrets (email credentials etc.) are set directly in your
hosting provider's dashboard (Render / Railway / Fly.io), **not** in GitHub.

Backend env vars to set on your host:

```
NODE_ENV=production
PORT=4000
FRONTEND_URL=https://yourdomain.com
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your@gmail.com
EMAIL_PASS=your_app_password
CONTACT_RECEIVER=john.doe@example.com
```

---

## 5. Connect a Custom Domain

### Step 1 — Update the CNAME file

Edit `frontend/public/CNAME` — replace the content with your domain:

```
yourdomain.com
```

Commit and push. GitHub Pages will pick this up automatically.

### Step 2 — Add the domain in GitHub

1. Repo → **Settings** → **Pages**
2. Under **Custom domain**, type `yourdomain.com`
3. Click **Save**
4. Tick **Enforce HTTPS** (once DNS propagates — can take up to 24 hrs)

### Step 3 — Point DNS to GitHub Pages

Log into your domain registrar and add these DNS records:

#### For an apex domain (yourdomain.com) — add 4 A records:

| Type | Name | Value |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

#### For www subdomain — add a CNAME:

| Type | Name | Value |
|---|---|---|
| CNAME | www | YOUR_USERNAME.github.io |

---

## 6. Domain Providers — Free & Cheap

### 🆓 Completely Free Domains

| Provider | Free domains | Notes |
|---|---|---|
| **Freenom** | `.tk` `.ml` `.ga` `.cf` `.gq` | Free for 12 months, renewable. Less professional. |
| **is-a.dev** | `yourname.is-a.dev` | Free subdomain for developers. Open-source registry on GitHub. |
| **js.org** | `yourname.js.org` | Free subdomain for JS projects. |
| **GitHub Pages default** | `username.github.io` | Always free, no setup needed. |

**Recommended free option for a portfolio:**
➡️ Register `yourname.is-a.dev` at https://github.com/is-a-dev/register

### 💰 Cheap Paid Domains (most professional)

| Provider | Price (approx) | Notes |
|---|---|---|
| **Namecheap** | $1–$3/yr first year | Frequent sales on `.dev`, `.me`, `.io`. Best UI. |
| **Porkbun** | $1–$5/yr | Very transparent pricing. Free WHOIS privacy always. |
| **Cloudflare Registrar** | ~$8–$10/yr | At-cost pricing (no markup). Best for `.com`. |
| **Google Domains** (now Squarespace) | ~$12/yr | Clean UI, good DNS management. |
| **GoDaddy** | $1/yr first year | Cheap intro, renews expensive — watch out. |

### 🏆 Best recommendation for a developer portfolio

- **Most professional & affordable:** Get a `.dev` domain on **Namecheap** or
  **Porkbun** — typically $2–5 for the first year.
  Example: `johndoe.dev` or `johndoedev.com`

- **Completely free:** Use `yourname.is-a.dev` — recognised in the developer
  community and looks intentional.

- **`.io` domains** ($25–35/yr) are popular in tech but expensive — skip
  unless you really want one.

---

## 7. DNS Configuration

### Cloudflare (recommended — free CDN + SSL)

1. Sign up at https://cloudflare.com (free plan)
2. Add your domain
3. Copy the two Cloudflare nameservers shown
4. Go to your registrar → update nameservers to Cloudflare's
5. In Cloudflare DNS, add the GitHub Pages A records and CNAME (Section 5)
6. Set all records to **DNS only** (grey cloud), not proxied — GitHub Pages
   manages its own SSL

Benefits: free DDoS protection, analytics, faster DNS propagation.

---

## 8. Verify Everything Works

After pushing to `main`:

```
✅ GitHub Actions  → repo → Actions tab → "Build & Deploy Portfolio" → green
✅ Frontend live   → https://yourdomain.com
✅ Backend live    → https://your-backend.onrender.com/api/health
✅ Contact form    → fill out form on site → check your email
✅ HTTPS           → padlock icon in browser
```

### Useful commands for local verification

```bash
# Check DNS propagation
nslookup yourdomain.com

# Test backend health
curl https://your-backend.onrender.com/api/health

# Test portfolio data endpoint
curl https://your-backend.onrender.com/api/portfolio
```

---

## 🗂️ Summary — Full Architecture

```
GitHub (source code)
       │
       │  git push → triggers GitHub Actions
       ▼
┌──────────────────────────────────────────────────────┐
│  GitHub Actions (.github/workflows/deploy.yml)       │
│  1. Test backend (Jest)                              │
│  2. Build frontend (Vite)                            │
│  3. Deploy to GitHub Pages                           │
└──────────────────────────────────────────────────────┘
       │                          │
       ▼                          ▼
GitHub Pages                 Render / Railway
(React SPA)                  (Express API)
yourdomain.com               api.yourdomain.com
       │                          ▲
       └──── VITE_API_URL ────────┘
              (API calls)
```
