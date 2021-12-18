const journeyRouter = require('./journeys')
const siteRouter = require('./site')
const pointRouter = require('./point')

function route (app) {
    app.use('/points', pointRouter)
    app.use('/journeys', journeyRouter)
    app.use ('/', siteRouter)   
}

module.exports = route