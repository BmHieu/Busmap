const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const Schema = mongoose.Schema

const Point = new Schema({
    name: { type: String, required: true ,maxLength: 255 },
    latitude: { type: String, maxLength: 600  },
    longitude: { type: String, maxLength: 600  },
    routes: { type: String, maxLength: 600  },
    journeyslug: { type: String, maxLength: 600  },
  }, {
    //_id: false,
    timestamps: true
  });

mongoose.plugin(slug)
//Point.plugin(AutoIncrement)


module.exports = mongoose.model('Point', Point);