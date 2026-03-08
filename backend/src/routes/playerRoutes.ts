import express from 'express'
import { addPlayer, deletePlayer, getPlayers, updatePlayer } from '../controllers/playerController.js'
    const router = express.Router()
    router.get('/', getPlayers)
    router.post('/', addPlayer)
    router.patch('/:id', updatePlayer)
    router.patch('/:id', deletePlayer)

export default router