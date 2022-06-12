const mongoose = require('mongoose');
//creating the Order Schema
const OrderSchema = mongoose.Schema({
    userID: {
        type: mongoose.SchemaTypes.ObjectId,
        require: true
    },
    foodID: {
        type: mongoose.SchemaTypes.ObjectId,
        require: true
    },
    initialDate: {
        type: Date,
        require: true
    },
    deliveryDate: {
        type: Date,
        require: true
    }
})

const Order = mongoose.model('order', OrderSchema);
module.exports = Order;
