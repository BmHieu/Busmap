const express = require('express')
const router = express.Router()

const pointController = require('../app/controllers/PointController')

router.get('/create', pointController.create)
router.post('/store', pointController.store)

module.exports = router