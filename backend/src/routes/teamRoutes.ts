import express from 'express'
import { addTeam, deleteTeam, getTeams, updateTeam } from '../controllers/teamsController.js'
import { validateRequestBody } from 'zod-express-middleware'
import { teamSchema } from '../schemas/index.js'

const router = express.Router()
router.get('/', getTeams)
router.post('/', validateRequestBody(teamSchema), addTeam)
router.patch('/:id', validateRequestBody(teamSchema), updateTeam)
router.delete('/:id', deleteTeam)
export default router
