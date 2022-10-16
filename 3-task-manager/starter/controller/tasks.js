const Task = require('../model/task')

const getAllTask = (req, res) => {
    res.status(200).send('allItem')
}

const createTask = async (req, res) => {
    let data = req.body
    try {
        const task = await Task.create(data)
        res.status(200).json(task)
    } catch (error) {
        res.status(404).send(error)
    }

}


const updateTask = (req, res) => {
    res.status(200).send('update task')
}


const deleteTask = (req, res) => {
    res.status(200).send('delete task')
}

const getTask = (req, res) => {
    console.log(req.params)
    res.status(200).send('get task id')

}
module.exports = { getAllTask, createTask, updateTask, deleteTask, getTask, Task }