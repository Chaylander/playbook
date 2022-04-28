//Usando el objeto de express
const express = require('express');
// app de express
const app = express();
//Puerto en el que se vera la app en el navegador, localhost:3000
const port = 3000;

//Ctrl + C para parar el servidor

//path inicial, respondera a la url localhost:3000
app.get('/', (req, res) => {
    res.send("Hello World!");
})

//Agregar una nueva ruta
//localhost:3000/launchx
app.get('/launchx', (req, res) => {
    res.send("Bienvenidos a LaunchX!");
})




//con esto iniciamos el servidor
app.listen(port, () => {
    console.log(`Server listo en el puerto ${port}!`);
})