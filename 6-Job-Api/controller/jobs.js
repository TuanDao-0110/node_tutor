// 1 this is where we send data from server

const getAllJobs = async (req, res) => {
    res.send('get all job')
}


const getJob = async (req, res) => {
    res.send('get job')
}
const createJob = async (req, res) => {
    res.send('create job')
}
const updateJob = async (req, res) => {
    res.send('update job')
}
const deleteJob = async (req, res) => {
    res.send('delete Job')
}



module.exports = { getAllJobs, getJob,createJob,updateJob,deleteJob }