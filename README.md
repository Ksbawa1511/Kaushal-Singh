# Kaushal Singh Portfolio

React + Vite front-end portfolio. All content is in the client.

## Project structure
- `client/` – React front-end (Vite). Assets in `client/public/assets`. Profile data in `client/src/data/profile.js`.

## Quick start
1. Install dependencies: `cd client && npm install`
2. Run: `cd client && npm run dev`
3. Build: `cd client && npm run build` → output in `client/dist`

## Updating content
Edit `client/src/data/profile.js` to change hero, about, skills, education, trainings, projects, and footer.

## Deploy on Vercel
- **Option A:** In Vercel → Project Settings → General → **Root Directory** set to `client`. Deploy. (Uses `client/vercel.json` for SPA rewrites.)
- **Option B:** Leave Root Directory empty. The repo root `vercel.json` runs the client build and serves `client/dist`.
