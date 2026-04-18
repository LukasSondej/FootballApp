import express from 'express'
import { addMatch, deleteMatch, getMatches, updateMatch } from '../controllers/matchesController.js'
import { matchSchema } from '../schemas/index.js'
import { validateRequestBody } from 'zod-express-middleware'
const router = express.Router()
router.get('/', getMatches)
router.post('/', validateRequestBody(matchSchema), addMatch)
router.patch('/:id', validateRequestBody(matchSchema), updateMatch)
router.delete('/:id', deleteMatch)
export default router
