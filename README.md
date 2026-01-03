# Kaushal Singh Portfolio (MERN)

React + Vite front-end with an Express/MongoDB API serving the portfolio content.

## Project structure
- `client/` – React front-end (Vite). Assets live in `client/public/assets`.
- `server/` – Express API. Falls back to static data in `server/src/data/profile.js` when MongoDB is not configured.
- Legacy static files remain in the repo for reference.

## Quick start
1) Install dependencies  
   - `cd server && npm install`  
   - `cd ../client && npm install`

2) Environment  
   - Create `server/.env` with:
     ```
     MONGODB_URI=mongodb://127.0.0.1:27017/kaushal-portfolio
     PORT=5000
     ```
   - Optionally set `VITE_API_BASE_URL` in `client/.env` (defaults to `http://localhost:5000/api`).

3) Run in development  
   - API: `cd server && npm run dev`
   - Front-end: `cd client && npm run dev`

4) Production build  
   - `cd client && npm run build`
   - Serve `client/dist` via the API server (auto-served when the `dist` folder exists).

## API
- `GET /api/health` – health check
- `GET /api/profile` – portfolio data (from MongoDB if present, otherwise fallback data)

## Notes
- MongoDB is optional; the site will still render using fallback JSON.
- Update `server/src/data/profile.js` or the MongoDB `profiles` collection to change portfolio content.