const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const datasetSchema = new mongoose.Schema({

    

    film_id: {type: Number, unique: true },
    title: String,
    body: String,
    date: {type: Date, default: Date.now()},
    reviews: [new Schema({
        review_id: Number,
        title: String,
        body: String,
        date: {type: Date, default: Date.now()}
    })]

});

const Dataset = mongoose.model('Dataset', datasetSchema);

module.exports = Dataset;
