import type { Request, Response } from "express"
import prisma from "../db.js"
import type { Prisma } from "@prisma/client"

export const getTeams = async(req: Request, res: Response) => {
    const teams = await prisma.team.findMany()
    res.json(teams)
}
    
export const addTeam = async(req: Request, res: Response) => {
    const {playerIds,  ...teamData} = req.body
    const createPayload: Prisma.TeamCreateInput = {...teamData}
    if(playerIds && Array.isArray(playerIds) && playerIds.length > 0){
        createPayload.players = {
    connect: playerIds.map((playerId: string) => ({id: playerId}))
}
    }

    const team = await prisma.team.create({data: createPayload })
    res.json(team)
}
    
export const updatedTeam = async(req: Request, res: Response) => {
    const {playerIds,  ...teamData} = req.body
    const teamId = req.params.id
    if (!teamId || typeof teamId !== 'string') {
    res.status(400).json({error: "nie prawidlowe Id druzyny"})
    return
  }
     const updatePayload: Prisma.TeamUpdateInput = {...teamData}
       if(playerIds && Array.isArray(playerIds)){
     updatePayload.players = {
        set: playerIds.map((playerId: string) => ({id: playerId}))
     }
    }
    const updatedTeam = await prisma.team.update({
        where: {id: teamId}, 
        data: updatePayload
    })
    res.json(updatedTeam)
}
export const deletedTeam = async(req: Request, res: Response) => {
    const teamId = req.params.id
    if(!teamId || typeof teamId != 'string'){
    res.status(400).json({error: "Nieprawidłowe ID teamu!"})
    return
}
    const team = await prisma.team.delete({
        where: {id: teamId}
    })
    res.json(team)
}
    