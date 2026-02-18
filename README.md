# smart-pdm-platform

Monorepo for the SMART-PDM platform UI apps.

## Apps

- `apps/admin-dashboard` — Admin Dashboard
- `apps/student-portal` — Scholarship Portal (student-facing)
- `apps/mobile-app` — Scholarship App (mobile UI)

## Getting started

Prerequisites:
- Node.js (LTS recommended)
- npm (comes with Node)

From an app directory:

```bash
npm i
npm run dev
```

## Repo structure

```text
apps/
  admin-dashboard/
  student-portal/
  mobile-app/
```

## Notes

- Each app currently has its own dependencies and dev server (`npm i` + `npm run dev` inside the app folder).

