# Kitchen Showroom (Minimal Starter)

This is a lean monolithic Next.js + Prisma starter for a 2-branch kitchen showroom CRM.

Quick start (local):

1. Copy `.env.example` to `.env` and set `DATABASE_URL` and `NEXTAUTH_SECRET`.

2. Install deps:

```bash
npm install
```

Notes for this demo (frontend-only):

- This repository contains a frontend-only mock demo. No database or backend is required.
- Recommended Node: use `nvm use 22` before installing.

Run locally:

```bash
npm install
npm run dev
```

Open http://localhost:3000/login to view the demo. All data is mocked in `src/lib/mock.ts`.

Notes:
- Auth is wired for NextAuth; seed creates an OWNER user (admin@showroom.local / password123).
- This scaffold focuses on core models, permissions helper, visitor create flow, and minimal UI.
