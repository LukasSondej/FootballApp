import type { Request, Response } from "express";
import prisma from "../db.js";

export const getPlayers = async(req: Request, res: Response) => {
const players = await prisma.player.findMany();
res.json(players)

}
export const addPlayer = async(req: Request, res: Response) => {
const newPlayer = await prisma.player.create({data: req.body});
res.status(201).json(newPlayer)

}
export const updatedPlayer = async(req: Request, res: Response) => {
   const playerId = req.params.id;
   if(!playerId || typeof playerId != 'string'){
   res.status(400).json({ error: "Invalid player ID!" });
   return
   }
  const updatedData = req.body
   const updatedPlayer= await prisma.player.update({
where: {id: playerId},
data: updatedData

   })
   res.json(updatedPlayer)
}
export const deletePlayer = async(req: Request, res: Response) => {
   const playerId = req.params.id;
   if(!playerId || typeof playerId != 'string'){
    res.status(400).json({ error: "Invalid player ID!" });
    return
   }
   const deletedPlayer= await prisma.player.delete({
where: {id: playerId}
   })
   res.json(deletedPlayer)
}


