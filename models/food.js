const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const foodSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    ingredients: {
        type: String,
        required: false
    },
    qty: {
        type: Number,
        required: true
    },
    cost: {
        type: Number,
        required: true
    }
}, { timestamps: true });

const Food = mongoose.model('food', foodSchema);
module.exports = Food;