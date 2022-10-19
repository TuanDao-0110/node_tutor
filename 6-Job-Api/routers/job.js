const express = require('express')
const router = express.Router()


// import job controller 

const { getAllJobs, getJob, createJob, updateJob, deleteJob } = require('../controller/jobs')

router.route('/').post(createJob).get(getAllJobs)
router.route('/:id').get(getJob).delete(deleteJob).patch(updateJob)


module.exports = router