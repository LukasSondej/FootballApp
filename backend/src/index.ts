import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';
import 'dotenv/config'; 

const { Pool } = pg;
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);

const app = express();
const prisma = new PrismaClient({ adapter });

app.use(cors()); 
app.use(express.json()); 

app.get('/teams', async (req, res) => {
  const teams = await prisma.team.findMany();
  res.json(teams);
});
app.get('/players', async(req,res) => {
  const players = await prisma.player.findMany()
res.json(players)
})
app.get('/matches', async(req,res) => {
  const matches = await prisma.match.findMany()
res.json(matches)
})
app.post('/players', async(req, res)=> {
   const newPlayer = await prisma.player.create({data: req.body})
   res.json(newPlayer)
})
app.post('/teams', async(req, res)=> {
   const newTeam = await prisma.team.create({data: req.body})
   res.json(newTeam)
})
app.post('/matches', async(req, res)=> {
   const newMatch = await prisma.match.create({data: req.body})
   res.json(newMatch)
})
app.patch('/teams/:id', async(req, res)=> {
  const teamId = req.params.id;
  const updatedData = req.body
   const updatedTeam = await prisma.team.update({
    where: {id: teamId},
    data: updatedData
  
  })
   res.json(updatedTeam)
})

app.patch('/players/:id', async(req, res)=> {
  const playerId = req.params.id;
  const updatedData = req.body
   const updatedPlayer= await prisma.player.update({
where: {id: playerId},
data: updatedData

   })
   res.json(updatedPlayer)
})
app.patch('/matches/:id', async(req, res)=> {
  const matchId = req.params.id;
  const updatedData = req.body
   const updatedMatch= await prisma.match.update({
where: {id: matchId},
data: updatedData

   })
   res.json(updatedMatch)
})

app.delete('/matches/:id', async(req, res)=> {
const matchId = req.params.id
   const deletedMatch= await prisma.match.delete({
where: {id: matchId},

   })
   res.json(deletedMatch)
})
app.delete('/teams/:id', async(req, res)=> {
const teamsId = req.params.id
   const deletedTeam= await prisma.team.delete({
where: {id: teamsId},

   })
   res.json(deletedTeam)
})
app.delete('/players/:id', async(req, res)=> {
const playerId = req.params.id
   const deletedPlayer= await prisma.player.delete({
where: {id: playerId},

   })
   res.json(deletedPlayer)
})

app.listen(3000, () => {
  console.log('Serwer działa na http://localhost:3000 🚀');
});