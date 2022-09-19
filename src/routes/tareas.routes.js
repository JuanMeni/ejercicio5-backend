import { Router } from "express";
import { borrarTareas, crearTarea, listarTareas} from "../controllers/tareas.controllers";
import validacionTarea from "../helpers/validacionTarea";

const router = Router();

// creamos las rutas de las tareas
// dominio + /apitareas +/
router
.route('/')
.get(listarTareas)
.post(validacionTarea,crearTarea)

router
.route('/:id')
.delete(borrarTareas)


export default router;
