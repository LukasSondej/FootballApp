import express from 'express'
import { addPlayer, deletePlayer, getPlayers, updatedPlayer } from '../controllers/playerController.js'
import { validateRequestBody } from 'zod-express-middleware'
import { playerSchema } from '../schemas/index.js'
    const router = express.Router()
    router.get('/', getPlayers)
    router.post('/', validateRequestBody(playerSchema) , addPlayer)
    router.patch('/:id', validateRequestBody(playerSchema),updatedPlayer)
    router.delete('/:id', deletePlayer)

export default router