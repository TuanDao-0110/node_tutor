// import express module
const express = require('express')
const router = express.Router()

// Import function 
const { deletePerson, editPerson, createPerson, createPersonPostMan, getPeople } = require('../controller/people')

// 1-get method
// router.get('/', getPeople)
// router.post('/', createPerson)
// router.post('/postman', createPersonPostMan)

// 3. PUT method

// router.put('/:id', editPerson)

// 4. delete:

// router.delete('/:id', deletePerson)


router.route('/').get(getPeople).post(createPerson)
router.route('/postman').post(createPersonPostMan)
router.route('/:id').delete(deletePerson).put(editPerson)


module.exports = router