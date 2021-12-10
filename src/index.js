const express = require('express')
const morgan = require('morgan')
const exphbs  = require('express-handlebars')

const path = require('path')
const app = express()
const port = 3000

const route = require ('./routes')
const db = require('./config/db')

db.connect()

app.use(morgan('combined'))

//use CSS
app.use(express.static(path.join(__dirname,'public')))

app.engine('hbs', exphbs.engine({extname: '.hbs'}));

app.set('view engine', 'hbs')
app.set('views',path.join(__dirname,'resources','views'))

route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})