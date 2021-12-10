const journeyRouter = require('./journeys')
const siteRouter = require('./site')


function route (app) {
    app.use('/journeys', journeyRouter)
    app.use ('/', siteRouter)   
}

module.exports = route