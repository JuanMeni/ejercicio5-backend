import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import './src/database';
import router from './src/routes/tareas.routes';

// const express = require('express');

// instancia de express
const app = express();

// tomamos un puerto
app.set('port', process.env.PORT || 4000);

// Backend escuchando el puerto
app.listen(app.get('port'), ()=>{

    console.log('Mi backend esta en el puerto ' + app.get('port'));
})
// middlewares
app.use(morgan('dev')); //da informacion en la terminal
app.use(cors()); //permite recibir peticiones remotas de otras pc
// los dos middlewares sgtes. sirven para procesar un obj json
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//cargar un archivo estatico
app.use(express.static('./public'));


// rutas
app.use('/apitareas', router)



