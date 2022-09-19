import express from 'express';

// const express = require('express');

// instancia de express
const app = express();

// tomamos un puerto
app.set('port', process.env.PORT || 4000);

// Backend escuchando el puerto
app.listen(app.get('port'), ()=>{

    console.log('Estamos en el puerto ' + app.get('port'));
})



