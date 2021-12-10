const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const Schema = mongoose.Schema

const Journey = new Schema({
    _id: {type: Number, required: true},
    name: { type: String, required: true ,maxLength: 255 },
    category: { type: String, maxLength:20},
    priceticket: { type: String, maxLength: 600},
    lenght: {type: String, maxLength: 600  },
    first_last: { type: String, maxLength: 600},
    time: { type: String, maxLength: 600  },
    turn: { type: String, maxLength: 1000},
    return: { type: String, maxLength: 1000},
    slug: { type: String, slug: 'name',unique:true  },
  }, {
    //_id: false,
    timestamps: true
  });

mongoose.plugin(slug)

//Journey.plugin(AutoIncrement)


module.exports = mongoose.model('Journey', Journey);