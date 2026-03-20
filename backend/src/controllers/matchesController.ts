import type { NextFunction, Request, Response } from "express";
import prisma from "../db.js";

export const getMatches = async(req: Request, res: Response,next: NextFunction) => {
    try{
  const matches = await prisma.match.findMany()
    res.json(matches)

    }catch(error){
        next(error)
    }
  

}
export const addMatch = async(req: Request, res: Response, next: NextFunction) => {
   try{

    const match = await prisma.match.create({data: req.body})
    res.json(match)
   
   }catch(error){
    next(error)
   }
 
}
export const updateMatch = async(req: Request, res: Response, next: NextFunction) => {
    try{
   const matchId = req.params.id as string;
  const updatedData = req.body
   const updatedMatch= await prisma.match.update({
where: {id: matchId},
data: updatedData

   })
   res.json(updatedMatch)
}catch(error) {
next(error)
}
}
export const deleteMatch = async(req: Request, res: Response, next: NextFunction) => {
    try{
    const matchId = req.params.id as string;
    const match = await prisma.match.delete({
        where: {id: matchId}
    })
    res.json(match)
}catch(error){
next(error)
}
}