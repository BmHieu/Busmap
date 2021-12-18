const Point = require('../models/Point')
const Journey = require('../models/Journey')
const { mutipleMongooseToObject } = require('../../util/mongoose')
const { mongooseToObject } = require('../../util/mongoose')

class JourneyController {
    create(req, res, next) {
        Journey.find()
        .then(journeys =>  res.render('points/create', {
            journeys: mutipleMongooseToObject(journeys)
        }))
        .catch(next)       
    }

    store(req, res, next) {
        const small = new Point(req.body);
        small.save();
        res.redirect('/');
    }
}
module.exports = new JourneyController