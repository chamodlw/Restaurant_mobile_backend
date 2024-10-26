//model1.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const billSchema = new Schema({
    id: Number,
    date_time: Date,
    items: [{
        id: Number,
        name: String,
        price: Number,
        quantity: Number,
    }],
    total: Number,
});

const Bill = mongoose.model('Bill', billSchema);

module.exports = Bill;