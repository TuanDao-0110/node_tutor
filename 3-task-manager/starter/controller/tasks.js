

const getAllTask = (req, res) => {
    res.status(200).send('allItem')
}

const createTask = (req, res) => {
    console.log(req.body)
    res.status(200).send('create task')

}


const updateTask = (req, res) => {
    res.status(200).send('update task')
}


const deleteTask = (req, res) => {
    res.status(200).send('delete task')
}

const getTask =(req,res)=> { 
    console.log(req.params)
    res.status(200).send('get task id')

}
module.exports = { getAllTask, createTask, updateTask, deleteTask,getTask }