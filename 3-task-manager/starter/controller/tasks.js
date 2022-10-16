// 1. Import mongoose model.
const Task = require('../model/task')
// 2. get all the task 
const getAllTask = async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.status(200).json({ tasks })
    } catch (error) {
        res.status(500).json(error)
    }
}


// 3. create data task

const createTask = async (req, res) => {
    let data = req.body
    try {
        const task = await Task.create(data)
        res.status(200).json({ task })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

// 4. update task 

const updateTask = async (req, res) => {
    let {id} = req.params
    let taskEdit = req.body
    try {
        const updateTask = await Task.findByIdAndUpdate(id, taskEdit)
        res.status(200).json(taskEdit)
    } catch (error) {
        res.status(500).json(error)
    }
}
// 5. deleteTask
const deleteTask = async (req, res) => {
    let {id} = req.params
    try {
        const deleteTask = await Task.findByIdAndRemove(id)
        res.status(200).json(deleteTask)
    } catch (error) {
        res.status(500).json(error)
    }
}

// 6. get task
const getTask = async (req, res) => {
    let {id} = req.params
    console.log(id)
    try {
        const getTaskID = await Task.findById(id)
        res.status(200).json(getTaskID)
    } catch (error) {
        res.status(500).json(error)
    }

}
module.exports = { getAllTask, createTask, updateTask, deleteTask, getTask, }