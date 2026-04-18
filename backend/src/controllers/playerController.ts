import type { NextFunction, Request, Response } from 'express'
import prisma from '../db.js'

export const getPlayers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const players = await prisma.player.findMany({
      include: {
        team: true,
      },
    })
    res.json(players)
  } catch (error) {
    next(error)
  }
}
export const addPlayer = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newPlayer = await prisma.player.create({ data: req.body })
    res.status(201).json(newPlayer)
  } catch (error) {
    next(error)
  }
}
export const updatePlayer = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const playerId = req.params.id as string
    const updatedData = req.body
    const updatedPlayer = await prisma.player.update({
      where: { id: playerId },
      data: updatedData,
    })
    res.json(updatedPlayer)
  } catch (error) {
    next(error)
  }
}
export const deletePlayer = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const playerId = req.params.id as string
    const deletedPlayer = await prisma.player.delete({
      where: { id: playerId },
    })
    res.json(deletedPlayer)
  } catch (error) {
    next(error)
  }
}
