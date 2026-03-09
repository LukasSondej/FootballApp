import type { Request, Response } from "express"
import prisma from "../db.js"

export const getTeams = async(req: Request, res: Response) => {
    const teams = await prisma.team.findMany()
    res.json(teams)
}
    
export const addTeam = async(req: Request, res: Response) => {
    const team = await prisma.team.create({data: req.body})
    res.json(team)
}
    
export const updatedTeam = async(req: Request, res: Response) => {
    const teamId = req.params.id
    if (!teamId || typeof teamId !== 'string') {
    throw new Error("Nieprawidłowe ID drużyny!"); 
  }
    const updatedData = req.body
    const updatedTeam = await prisma.team.update({
        where: {id: teamId}, 
        data: updatedData})
    res.json(updatedTeam)
}
export const deletedTeam = async(req: Request, res: Response) => {
    const teamId = req.params.id
    if(!teamId || typeof teamId != 'string'){
    throw new Error("Nieprawidłowe ID teamu!")
   }
    const team = await prisma.team.delete({
        where: {id: teamId}
    })
    res.json(team)
}
    