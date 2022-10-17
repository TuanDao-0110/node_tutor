// 1. Import mongoose model.
const Task = require('../model/task')

const asyncWrapper =require('../middleware/async')


// 2. get all the task 
const getAllTask =asyncWrapper(  async (req, res) => {
    
        const tasks = await Task.find({})
        res.status(200).json({ tasks })
        // 1 this way likely recommend
        // res.status(200).json({status:'success',data: {tasks,nbHits:tasks.length}})
})


// 3. create data task

const createTask =asyncWrapper( async (req, res) => {
    let data = req.body
   
        const task = await Task.create(data)
        res.status(200).json({ task })

}
)
// 4. update task 

const updateTask =asyncWrapper( async (req, res) => {
    let { id: taskID } = req.params
    let taskEdit = req.body
        const task = await Task.findByIdAndUpdate(taskID, taskEdit)
        if (!task) {
            return res.status(404).json({ msg: `no task with id : ${taskID}` })
        }
        res.status(200).json({ task })

})

// 4.1 editask

const editTask =asyncWrapper( async (req, res) => {
    let { id: taskID } = req.params
    let taskEdit = req.body
        const task = await Task.findByIdAndUpdate(taskID, taskEdit, {
            new: true,
            runValidators: true,
            overwrite: true,
        })
        if (!task) {
            return res.status(404).json({ msg: `no task with id : ${taskID}` })
        }
        res.status(200).json({ task })
})
// 5. deleteTask
const deleteTask =asyncWrapper( async (req, res) => {
    let { id } = req.params
        const deleteTask = await Task.findByIdAndRemove(id)
        res.status(200).json({ deleteTask })
   
})

// 6. get task
const getTask = async (req, res) => {
    // this how we destructive a value from object and also can named it
    // by name that is taskID vs it's value is detructive in req.params
    let { id: taskID } = req.params
    try {
        // const getTaskID = await Task.findById(id)
        // we can write 
        const task = await Task.findOne({ _id: taskID })
        if (!task) {
            return res.status(404).json({ msg: `no task with id : ${taskID}` })
        }
        // 1 the way we write {getTaskID} ==> that mean we return an object that 
        // have key name: 'getTaskID' vs 
        // vs it value : will be getTaskID's value
        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }

}
module.exports = { getAllTask, createTask, updateTask, deleteTask, getTask, editTask }