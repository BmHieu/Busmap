const Line = require ('../models/Line')
const Point = require ('../models/Point')
const Journey = require ('../models/Journey')
const {mutipleMongooseToObject} = require ('../../util/mongoose')
const { mongooseToObject } = require('../../util/mongoose')

class JourneyController{

//[GET] /journeys/create
create(req, res, next) {
    res.render('journeys/create')
}

//[POST] /journeys/store
store(req, res, next) {
    //res.json(req.body)
    const small = new Journey(req.body)
    small.save()
    
    res.send("Success")
}

//[GET] /journeys/:slug
showdetail(req, res, next) {
    Journey.findOne({slug: req.params.slug})
    .then(journey => res.render('journeys/showdetail',{journey: mongooseToObject(journey)}))
    .catch(next)
}

}
module.exports = new JourneyController
