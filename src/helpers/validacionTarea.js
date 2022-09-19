import { check } from 'express-validator'
import resultadosValidacion from './resultadoValidacion'

const validacionTarea = [
    check('tarea')
        .notEmpty()
        .withMessage('Es obligatorio poner una tarea')
        .isLength({min:2, max:60})
        .withMessage('La tarea debe terner entre 2 y 60 caracteres'),
    (req,res,next)=>{
        resultadosValidacion(req,res,next)
    }
]

export default validacionTarea;