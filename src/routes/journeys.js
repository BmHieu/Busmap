const express = require('express')
const router = express.Router()

const journeyController = require('../app/controllers/JourneyController')

router.get('/create', journeyController.create)
router.get('/manage', journeyController.manage)
router.post('/store', journeyController.store)
router.get('/:slug',journeyController.showdetail)

module.exports = router