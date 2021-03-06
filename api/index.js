const express = require("express");
const app = express(); 
const fs = require('fs'); 

console.log('última línea del programa');

let baseUrl = '/api/characters/';
let luke='luke';
let vader='darth-vader';
app.get('/', function (req, res) {
    res.send('Saludos desde express');
});
//Luke
app.get(baseUrl+luke, function (req, res) {
    fs.readFile('./characters/'+luke+'.json', (error, datos) => {
        if (error)
        console.log(error);
        else
        res.send(JSON.parse(datos));
    });
});
//Darth-Vader
app.get(baseUrl+vader, function (req, res) {
    fs.readFile('./characters/'+vader+'.json', (error, datos) => {
        if (error)
        console.log(error);
        else
        res.send(JSON.parse(datos));
    });
});

app.listen(9990, () => {
    console.log("El servidor se encuentra en el puerto 9990");
});