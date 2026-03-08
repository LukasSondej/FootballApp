import express from 'express'
import { addMatch, deleteMatch, getMatches, updatedMatch } from '../controllers/matchesController.js'
const router = express.Router()
router.get('/', getMatches)
router.get('/', addMatch)
router.get('/id', updatedMatch)
router.get('/:id', deleteMatch)
export default router