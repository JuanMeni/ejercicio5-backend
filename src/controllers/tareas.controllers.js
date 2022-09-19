import Tarea from "../models/tarea";

export const crearTarea = async(req,res)=>{
    try {
        console.log(req.body)
        // validaciones
        // crear el obj para guardar en BD
        const tareaNueva = new Tarea(req.body); //pq solo tengo una sola cosa
        // guardar en BD
        await tareaNueva.save();
        // enviar resp a frontend
        res.status(201).json({
            mensaje:'La tarea se creo exitosamente'
        })
        // si algo falla mostrar una respuesta
        
    } catch (error) {
        console.log(error)
        res.status(400).json({
            mensaje:'La tarea enviada no pudo ser creada'
        })
    }
}

export const listarTareas = async(req, res)=>{
    try {
        // buscar en la BD la colecction de tareas
        const listaTareas = await Tarea.find();
        // enviar la respuesta a frontend
        res.status(200).json(listaTareas);
    } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje:'Error al buscar las tareas'
        })
    }
}


export const borrarTareas = (req, res)=>{
    res.send('aqui se borra una tarea')
}