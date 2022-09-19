import mongoose from 'mongoose';

const url = 'mongodb+srv://JuanMeni:37105385zoster@clusterc2i.gn72gyw.mongodb.net/tareas';

mongoose.connect(url)

const connection = mongoose.connection;

connection.once('open',()=>{
    console.log('BD conectada')
})