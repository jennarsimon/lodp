const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dataSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    date: Date,
    source: String,
    category: String,
    data: [Object]
})

const Dataset = mongoose.model('Dataset', dataSchema);

module.exports = Dataset;