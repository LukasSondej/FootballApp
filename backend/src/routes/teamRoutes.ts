import express  from "express";
import { addTeam, deleteTeam, getTeams, updateTeam } from "../controllers/teamsController.js";

const router = express.Router();
router.get('/',getTeams)
router.post('/',addTeam)
router.patch('/:id',updateTeam)
router.patch('/:id',deleteTeam)
export default router