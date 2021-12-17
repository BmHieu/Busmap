const Point = require('../models/Point')
const Journey = require('../models/Journey')
const { mutipleMongooseToObject } = require('../../util/mongoose')
const { mongooseToObject } = require('../../util/mongoose')

class JourneyController {

    //[GET] /journeys/create
    create(req, res, next) {
        res.render('journeys/create')
    }

    //[POST] /journeys/store
    store(req, res, next) {
        //res.json(req.body)
        const small = new Journey(req.body);
        small.save();

        res.render('home');
    }

    //[GET] /journeys/:slug
    showdetail(req, res, next) {
        
        Promise.all([Journey.findOne({ slug: req.params.slug }), Point.find({journeyslug: req.params.slug})])
        .then(([journey, points]) => res.render('journeys/showdetail', {
            journey: mongooseToObject(journey),
            points: mutipleMongooseToObject(points)
        }))
        .catch(next);

        /*
        Journey.findOne({ slug: req.params.slug })
            .then(journey => res.render('journeys/showdetail', { journey: mongooseToObject(journey) }))
            .catch(next)*/
    }

}
module.exports = new JourneyController
