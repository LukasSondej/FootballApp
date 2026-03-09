import express from 'express'
import { addMatch, deleteMatch, getMatches, updatedMatch } from '../controllers/matchesController.js'
import { matchSchema } from '../schemas/index.js'
import { validateRequestBody } from 'zod-express-middleware'
const router = express.Router()
router.get('/', getMatches)
router.post('/', addMatch)
router.patch('/id',validateRequestBody(matchSchema), updatedMatch)
router.delete('/:id',validateRequestBody(matchSchema), deleteMatch)
export default router