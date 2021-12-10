const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const Schema = mongoose.Schema

const Point = new Schema({
    _id: {type: Number, required: true},
    name: { type: String, required: true ,maxLength: 255 },
    description: { type: String, maxLength: 600  },
    fisrt_last: { type: String, maxLength: 600  },
    time: { type: String, maxLength: 600  },
  }, {
    //_id: false,
    timestamps: true
  });

mongoose.plugin(slug)
//Point.plugin(AutoIncrement)


module.exports = mongoose.model('Point', Point);