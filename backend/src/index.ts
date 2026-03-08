import express, {type Request, type Response,type NextFunction
} from 'express';
import cors from 'cors';
import 'dotenv/config'; 
import playerRoutes from './routes/playerRoutes.js';
import teamRoutes from './routes/teamRoutes.js';
import matchRoutes from './routes/matchRoutes.js';
const app = express();
app.use(cors()); 
app.use(express.json()); 

app.use('/players', playerRoutes)
app.use('/matches', matchRoutes)
app.use('/teams', teamRoutes)



app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack)
  const status = err.statusCode || 500;
  res.status(status).json({error: err.message || "something broke"})
})




app.listen(3000, () => {
  console.log('Serwer działa na http://localhost:3000 🚀');
});