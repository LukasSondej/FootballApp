import type { NextFunction, Request, Response } from "express"
import prisma from "../db.js"
import type { Prisma } from "@prisma/client"

export const getTeams = async(req: Request, res: Response,next: NextFunction) => {
    try{

const teams = await prisma.team.findMany()
    res.json(teams)

    }catch(error){
        next(error)
    }
    
}
    
export const addTeam = async(req: Request, res: Response,next: NextFunction) => {
    try{
    const {playerIds,  ...teamData} = req.body
    const createPayload: Prisma.TeamCreateInput = {...teamData}
    if(playerIds && Array.isArray(playerIds) && playerIds.length > 0){
        createPayload.players = {
    connect: playerIds.map((playerId: string) => ({id: playerId}))
}
    }

    const team = await prisma.team.create({data: createPayload })
    res.json(team)

    }catch(error){
next(error)
    }

}
    
export const updatedTeam = async(req: Request, res: Response, next: NextFunction) => {
    try{
    const {playerIds,  ...teamData} = req.body
    const teamId = req.params.id as string
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
}catch(error){
    next(error)
}
}
export const deletedTeam = async(req: Request, res: Response, next: NextFunction) => {
    try{
    const teamId = req.params.id as string
    const team = await prisma.team.delete({
        where: {id: teamId}
    })
    res.json(team)
}catch(error){
next(error)
}
}
    