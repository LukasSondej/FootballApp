import express  from "express";
import { addTeam, deletedTeam, getTeams, updatedTeam } from "../controllers/teamsController.js";
import { validateRequestBody } from "zod-express-middleware";
import { teamSchema } from "../schemas/index.js";


const router = express.Router();
router.get('/',getTeams)
router.post('/', validateRequestBody(teamSchema), addTeam)
router.patch('/:id',validateRequestBody(teamSchema),updatedTeam)
router.delete('/:id',deletedTeam)
export default router