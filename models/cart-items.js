const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({
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

const Cart = mongoose.model('cart-item', cartSchema);
module.exports = Cart;