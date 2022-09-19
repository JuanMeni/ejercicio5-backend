import mongoose, {Schema} from 'mongoose';

const tareaSchema = new Schema ({
    tarea: {
        type: String,
        required: true,
        minlenght: 2,
        maxlenght: 60,
        unique: true
    }
})

const Tarea = mongoose.model('tarea', tareaSchema);

export default Tarea;