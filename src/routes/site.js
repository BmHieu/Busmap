const express = require('express')
const router = express.Router()

const journeyController = require('../app/controllers/SiteController')

router.get('/', journeyController.show)

module.exports = router