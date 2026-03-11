import type { NextFunction, Request, Response } from "express";
import prisma from "../db.js";

export const getMatches = async(req: Request, res: Response) => {
    const matches = await prisma.match.findMany()
    res.json(matches)

}
export const addMatch = async(req: Request, res: Response, next: NextFunction) => {
   
 const match = await prisma.match.create({data: req.body})
    res.json(match)
   
}
export const updatedMatch = async(req: Request, res: Response) => {
   const matchId = req.params.id;
      if(!matchId || typeof matchId != 'string'){
    res.status(400).json({ error: "Invalid match ID!" });
    return
   }
  const updatedData = req.body
   const updatedMatch= await prisma.match.update({
where: {id: matchId},
data: updatedData

   })
   res.json(updatedMatch)
}
export const deleteMatch = async(req: Request, res: Response) => {
    const matchId = req.params.id
    if(!matchId || typeof matchId != 'string'){
   res.status(400).json({ error: "Invalid match ID!" });
   return
   }
    const match = await prisma.match.delete({
        where: {id: matchId}
    })
    res.json(match)
}