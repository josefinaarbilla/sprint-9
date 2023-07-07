// Llamar al dotenv para que cargue los valores establecidos en el .env
require('dotenv').config();

// Llamar al express
const express = require('express')

// Controller que tiene las rutas de los endpoints
const router = require('./controllers/tasksController.js')

// Ejecutar la función express
const app = express()

// Indicar que el express va a ejecutar .json
app.use(express.json());

// Estabecemos el puerto para la app
const port = process.env.APP_PORT

// Endpoint principal: el inicio de la app
app.get('/', (req, res) => {
    res.send('Bienvenidos a la lista de tareas')
})

// Se utilizan los endopoints establecidos en el controller
// Se ejecuta en // Se ejecuta en http://localhost:3000/tasks
app.use('/tasks', router);


app.listen(port, () => {
    console.log(`La app se ejecuta en http://localhost:${port}`)
})