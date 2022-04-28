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

//Agregar una nueva ruta y regresar un objeto
app.get('/explorersInNode', (req, res) => {
    const explorer1 = {name : "Explorer", msg : "Hello!!"};
    const explorer2 = {name : "Explorer2", msg : "Hello!!"};
    res.send([explorer1, explorer2]);
})


//con esto iniciamos el servidor
app.listen(port, () => {
    console.log(`Server listo en el puerto ${port}!`);
})