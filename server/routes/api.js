const express = require('express')
const router = express.Router()
const fakedataController = require('../controllers/fakedata.controller')

router.get('/cards', fakedataController.getCards)
router.get('/users', fakedataController.getUsers)
router.get('/emails', fakedataController.getEmails)
router.get('/sales', fakedataController.getSales)
router.get('/data', fakedataController.index)

module.exports = router
