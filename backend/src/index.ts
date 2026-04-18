import express, { type Request, type Response, type NextFunction } from 'express';
import cors from 'cors';
import 'dotenv/config'; 
import playerRoutes from './routes/playerRoutes.js';
import teamRoutes from './routes/teamRoutes.js';
import matchRoutes from './routes/matchRoutes.js';

const app = express();

app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://football-app-sondej.netlify.app'
  ],
  credentials: true
})); 

app.use(express.json()); 

app.use('/players', playerRoutes);
app.use('/matches', matchRoutes);
app.use('/teams', teamRoutes);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  const status = err.statusCode || 500;
  res.status(status).json({ error: err.message || "something broke" });
});

const PORT = 3000;
app.listen(Number(PORT), '0.0.0.0', () => {
  console.log(`The server runs on port ${PORT} 🚀`);
});