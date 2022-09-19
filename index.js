import express from 'express';

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

// rutas
app.get('/', (req,res)=>{
    res.send('Primera peticion get')
})

app.get('/prueba', (req,res)=>{
    res.send('Otra peticion get')
})



