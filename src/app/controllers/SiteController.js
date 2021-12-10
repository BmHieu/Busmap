const Line = require ('../models/Line')
const Point = require ('../models/Point')
const Journey = require ('../models/Journey')
const {mutipleMongooseToObject} = require ('../../util/mongoose')

class SiteController{

    //[GET]  /index
show(req, res, next){
    Journey.find({})
        .then(journeys => {
            res.render('home', { 
                 journeys: mutipleMongooseToObject(journeys)
         })
        })
        .catch(next)

} 

}

module.exports = new SiteController
