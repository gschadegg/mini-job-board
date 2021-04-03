const jobRouter = require('express').Router(),
    Job = require('../models/job')


//Get All
jobRouter.get('/', (req, res) => {
    Job.find({})
        .then(results => {
            res.status(200).json(results)
        })
        .catch(error => {
            res.status(404).json({ error: 'Could not find any job positions' })
        })
    
})    

// Create
jobRouter.post('/', async (req, res) => {
    const newJob = new Job(req.body)
    newJob.save()
        .then(async result => {
            res.status(201).json(result)
        })
        .catch(error => {
            res.status(400).json(error)
        })
})

//Delete
jobRouter.delete('/:id', (req, res) => {
    Job.findByIdAndDelete(req.params.id)
        .then( result => {
            res.status(200).json(result)
        })
        .catch(error => {
            res.status(404).json({ error: error})
        })
})

module.exports = jobRouter