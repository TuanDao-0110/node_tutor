// import job model 
const JobModel = require('../models/jobs')
const { StatusCodes } = require('http-status-codes')
const { BadRequest, NotFoundError } = require('../errors')

// 1 this is where we send data from server

const getAllJobs = async (req, res, next) => {
    res.send('get all job')
}


const getJob = async (req, res, next) => {
    res.send('get job')
}
const createJob = async (req, res, next) => {
    req.body.createBy = req.user.userId
    try {
        const job = await JobModel.create(req.body)
        res.status(StatusCodes.CREATED).json(job)

    } catch (error) {

    }
}
const updateJob = async (req, res, next) => {
    res.send('update job')
}
const deleteJob = async (req, res, next) => {
    res.send('delete Job')
}



module.exports = { getAllJobs, getJob, createJob, updateJob, deleteJob }