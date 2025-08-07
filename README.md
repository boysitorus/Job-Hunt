# 💼 Job Hunt — Job Search Web Application

**Job Hunt** is a modern job search platform built with **Next.js**, designed to provide job seekers and administrators with the tools they need to find and manage job listings efficiently.

This repository contains two separate applications:
- `user-website/` — Website for job seekers
- `admin-dashboard/` — Admin dashboard for managing jobs and users

---

## 📁 Project Structure
<pre> job-hunt/ ├── README.md ├── user-website/ # Website untuk user pencari kerja │ ├── public/ # Static files (images, favicon, etc) │ ├── src/ │ │ ├── pages/ # Next.js pages (routes) │ │ ├── components/ # Reusable UI components │ │ ├── lib/ # Helper functions (e.g. supabase client, prisma client) │ │ ├── styles/ # Global styles (CSS/Tailwind) │ │ └── ... # Lainnya │ ├── prisma/ # Prisma schema & migrations │ ├── .env # Environment variables │ ├── package.json │ └── ... │ └── admin-dashboard/ # Website admin (dashboard) ├── public/ ├── src/ │ ├── pages/ │ ├── components/ │ ├── lib/ │ ├── styles/ │ └── ... ├── prisma/ ├── .env ├── package.json └── ... </pre>

---

## 🚀 Tech Stack

| Feature          | Tech Used            |
|------------------|----------------------|
| Framework        | Next.js              |
| ORM              | Prisma               |
| Database         | PostgreSQL           |
| Image Storage    | Supabase (Public Storage) |
| Styling (opt.)   | Tailwind CSS, etc.   |

---

## 🔧 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/job-hunt.git
cd job-hunt
```

### 2. Setup Environment Variables
---
make .env file for each project /Job Hunt CMS and /Job Hunt Website.
---
***/Job Hunt CMS***
---
DATABASE_URL=
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLIC_KEY=
NEXTAUTH_SECRET=
---
***/Job Hunt Website***
---
POSTGRES_PRISMA_URL=
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLIC_KEY=
NEXTAUTH_SECRET=
---
### 3. Install Dependencies & Run
---
***/Job Hunt CMS***
---
cd ./Job Hunt CMS
npm install
npx prisma generate
npm run dev
---
***/Job Hunt Website***
---
cd ./Job Hunt Website
npm install
npx prisma generate
npm run dev
---