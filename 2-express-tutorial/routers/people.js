const express = require('express')
const router = express.Router()
const { people } = require('../data')


// 1-get method
router.get('/', (req, res) => {
    res.status(200).json({ success: true, data: people })
})
router.post('/', (req, res) => {
    const { name } = req.body
    if (!name) {
        return res.status(400).json({ success: false, msg: "please provide name" })
    }
    res.status(201).json({ success: 'success', person: name })
})
router.post('/postman', (req, res) => {
    const { name } = req.body
    if (!name) {
        return res.status(400).json({ success: false, msg: "please provide name" })
    }
    res.status(201).json({ success: 'success', person: name })
})

// 3. PUT method

router.put('/:id', (req, res) => {
    // 1. get id from params
    const { id } = req.params
    // 2. put the new name to data
    const { name } = req.body
    console.log(name)
    // 3. now check it:
    const personIndex = people.findIndex((person) => person.id === Number(id))
    if (personIndex !== -1) {
        people[personIndex].name = name
        return res.status(200).json({ success: true, data: people })
    }
    return res.status(400).json({ success: false, msg: `can not find matching person with id : ${id}` })

})

// 4. delete:

router.delete('/:id', (req, res) => {
    // 1. get the id ==> 
    const { id } = req.params
    const personIndex = people.findIndex(person => person.id === Number(id))
    if (personIndex > -1) {
        console.log(people.splice(personIndex, 1))
        // console.log(people)
        return res.status(200).json({ success: true, data: people })
    }
    return res.status(400).send({ success: false, msg: `can not find matching person with id : ${id}` })

})


module.exports = router