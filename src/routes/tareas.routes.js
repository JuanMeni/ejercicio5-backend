import { Router } from "express";
import { borrarTareas, crearTarea, listarTareas} from "../controllers/tareas.controllers";

const router = Router();

// creamos las rutas de las tareas
// dominio + /apitareas +/
router
.route('/')
.get(listarTareas)
.post(crearTarea)

router
.route('/:id')
.delete(borrarTareas)


export default router;

// app.get('/prueba', (req,res)=>{
//     res.send('Otra peticion get')
// })