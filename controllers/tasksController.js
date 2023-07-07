const express = require("express");

// Encargado de armar las rutas de los endpoints
const router = express.Router();

const taskService = require('../services/tasks.js');

const validateID = (id) => {
  let idx = null;
  if (id === undefined || id === null || id <= 0) {
    return false;
  } else {
    idx = tasks.findIndex((task) => {
      return task.id == id;
    });
    return (!idx) ? false : true; 
  }
};




//* GET

// Muestra todas las tareas
// Se ejecuta en http://localhost:3000/tasks
router.get("/", async (req, res) => {
  // Aca se escribe la lógica de negocios
  const tasks = await taskService.getAll()
  res.send(tasks);
});


// Muesta una tarea segun el id
// Se ejecuta en http://localhost:3000/tasks/id
router.get("/:id", async (req, res) => {
  const taskId = req.params.id;
  let task = await taskService.getById(taskId)
  res.send(task);
});

//* POST

// Ingresa una nueva tarea
// Se ejecuta en http://localhost:3000/tasks
router.post("/", (req, res) => {
  const taskDetails = req.body; // Obtener los detalles de la tarea del cuerpo de la solicitud
  taskService.addTask(taskDetails)
    .then(() => {
      res.status(201).send("Tarea agregada exitosamente");
    })
    .catch((error) => {
      res.status(400).send("Error al agregar la tarea: " + error);
    });
});

//* PUT

// Actualiza una tarea
// Se ejecuta en http://localhost:3000/tasks/id
router.put("/:id", (req, res) => {
  const taskId = req.params.id; 
  const updatedTaskDetails = req.body; 
  taskService.updateTaskById(taskId, updatedTaskDetails)
    .then(() => {
      res.status(200).send("Tarea actualizada exitosamente");
    })
    .catch((error) => {
      res.status(400).send("Error al actualizar la tarea: " + error);
    });
});

//* DELETE

// Borra una tarea
// Se ejecuta en http://localhost:3000/tasks/id
router.delete("/:id", (req, res) => {
  const taskId = req.params.id; 
  taskService.deleteTaskById(taskId)
    .then(() => {
      res.status(200).send("Tarea eliminada exitosamente");
    })
    .catch((error) => {
      res.status(400).send("Error al eliminar la tarea: " + error);
    });
});

module.exports = router;