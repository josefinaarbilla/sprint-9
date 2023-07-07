const db = require('./db.js');

const getAll = async () => {
    return await db.select()
    .from('tarea')
};

const getById = async (id) => {
    return await db.select()
    .from('tarea')
    .where({
        id: id
    });
}

const addTask = async (taskDetails) => {
    return await db.insert(taskDetails).into('tarea');
  };


const updateTaskById = async (id, updatedTaskDetails) => {
    return await db('tarea')
      .where({ id: id })
      .update(updatedTaskDetails);
  };

  const deleteTaskById = async (id) => {
    return await db('tarea')
      .where({ id: id })
      .del();
  };


module.exports = {getAll, getById, addTask, updateTaskById, deleteTaskById}