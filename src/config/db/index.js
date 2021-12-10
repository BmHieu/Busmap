const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb+srv://busmap:busmap@cluster0.wyln4.mongodb.net/busmap_dev?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            //useFindAndModify: false,
            //useCreateIndex: true
        });
        console.log('connect db successfully');
    } catch (error) {
        console.log('connect db failed');
    }
}

module.exports = { connect }