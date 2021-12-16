import { Router } from "express";
const router = Router()

import {
  addTarea,
  newTarea,
  viewTareas,
  getTarea,
} from '../controllers/tareas.js'

router.route('/').get(addTarea) 
router.route('/nuevatareas').post(newTarea).get(viewTareas)
router.route('/nuevatareas/:tareaId').get(getTarea)

export default router