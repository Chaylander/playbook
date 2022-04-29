// Usando objeto express
const express = require('express')
// App de Express
const app = express()
app.use(express.json()) // Indicamos que usaremos JSON
// Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000

// Con esto inicializamos esta app
app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
})

//rutas
//ESTO ES UN ENDPOINT
//metodos http get, post, put, delete
//GET (obtener datos)
app.get('/v1/explorers', (req, res) => {
    console.log("API Explorers GET all request " + new Date())
    const explorer1 = {id: 1, name: "Explorer1"}
    const explorer2 = {id: 2, name: "Explorer2"}
    const explorer3 = {id: 3, name: "Explorer3"}
    const explorers = [explorer1, explorer2, explorer3]
    //200 = OK
    res.status(200).json(explorers)

})

//GET BY ID
app.get('/v1/explorers/:id', (req, res) => {
    console.log("GET BY ID  explorers V1 API " + new Date())
    const explorer1 = {id: 1, name: "Explorer1"}
    //200 = OK
    res.status(200).json(explorer1)
})

//POST (CREATE NEW)
//el codigo 201 significa que se ha creado una nueva entidad
app.post('/v1/explorers/', (req, res) => {
    console.log("API explorers POST request " + new Date());
    const requestBody = req.body; // parametros del request
    console.log(req.body)
    res.status(201).json({message: "Creado exitosamente"});
})  

//PUT (UPDATE)
//puede regresar un 201, pero el correcto es el 200
app.put('/v1/explorers/:id', (req, res) => {
    console.log('API explorers PUT request ' + new Date())
    console.log("Update explorer with id " + req.params.id)
    const requestBody = req.body; // parametros para actualizar
    console.log(req.body)
    console.log(req.params.id)// query params
    res.status(200).json({message: "Actualizado exitosamente"});
})
