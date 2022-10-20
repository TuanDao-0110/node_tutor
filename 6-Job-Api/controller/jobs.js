// import job model 
const JobModel = require('../models/jobs')
const { StatusCodes } = require('http-status-codes')
const { BadRequest, NotFoundError } = require('../errors')
const jobs = require('../models/jobs')

// 1 this is where we send data from server

const getAllJobs = async (req, res, next) => {
    // get the job that for this use object id only
    try {
        // only job is create by this userid is shown to 
        const job = await JobModel.find({ createBy: req.user.userId }).sort("createdAt")
        res.status(StatusCodes.OK).json({ job, count: jobs.length })
    } catch (error) {
        next(new BadRequest('job description value wrong'))

    }
}


const getJob = async (req, res, next) => {
    // get the job is get by id
    // 1. get job by params vs user infor
    const { user: { userId }, params: { id: jobId } } = req
    try {
        const job = await JobModel.findOne({ _id: jobId, createBy: userId })
        res.status(StatusCodes.OK).json({ job })
    } catch (error) {
        next(error)
    }
}
const createJob = async (req, res, next) => {
    req.body.createBy = req.user.userId
    try {
        const job = await JobModel.create(req.body)
        res.status(StatusCodes.CREATED).json(job)

    } catch (error) {
        next(new BadRequest('job description value wrong'))
    }
}
const updateJob = async (req, res, next) => {

    const { user: { userId }, params: { id: jobId }, body: { company, position } } = req
    if (!company === "" || !position === "") {
        return next(new BadRequest('company or position is empty'))

    }
    try {
        const job = await JobModel.findOneAndUpdate(
            { _id: jobId, createBy: userId },
            { company, position },
            { new: true, runValidators: true })
        res.status(StatusCodes.OK).json({ job })

    } catch (error) {
        next(new BadRequest('job description value wrong'))

    }
}
const deleteJob = async (req, res, next) => {
    const { user: { userId }, params: { id: jobId } } = req
    try {
        const job = await JobModel.findOneAndRemove(
            { _id: jobId, createBy: userId })
        res.status(StatusCodes.OK).json({ msg: 'job deleted ' })

    } catch (error) {
        next(new BadRequest('job not exist'))

    }
}



module.exports = { getAllJobs, getJob, createJob, updateJob, deleteJob }