import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import fs from 'fs';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
import { connectDB } from './config/db.js';
import profileRoutes from './routes/profileRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = [
  'http://localhost:5173',
  'http://127.0.0.1:5173',
  'http://localhost:5174',
  'http://127.0.0.1:5174',
  'http://localhost:4173',
  'http://127.0.0.1:4173',
  'http://localhost:3000',
  'https://kaushal-singh-dh7e.vercel.app'
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: false
  })
);
app.use(express.json());
app.use(morgan('dev'));

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api/profile', profileRoutes);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const clientDist = path.resolve(__dirname, '../../client/dist');

if (fs.existsSync(clientDist)) {
  app.use(express.static(clientDist));
  app.get('*', (_req, res) => res.sendFile(path.join(clientDist, 'index.html')));
}

connectDB(process.env.MONGODB_URI).finally(() => {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
});

