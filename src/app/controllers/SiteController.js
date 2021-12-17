const Point = require('../models/Point')
const Journey = require('../models/Journey')
const { mutipleMongooseToObject } = require('../../util/mongoose')

class SiteController {

    //[GET]  /index
    show(req, res, next) {
        
        Promise.all([Journey.find({}), Point.find({})])
        .then(([journeys, points]) => res.render('home', {
            journeys: mutipleMongooseToObject(journeys),
            points: mutipleMongooseToObject(points)
        }))
        .catch(next)

                /**Journey.find({})
                    .then(journeys => {
                        res.render('home', {
                            journeys: mutipleMongooseToObject(journeys)
                        })
                    })
                    .catch(next)*/
        }
}

module.exports = new SiteController
