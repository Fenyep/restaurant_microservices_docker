const mongoose = require('mongoose');
// Creating the Food Schema
const FoodSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true
    }
})

const Food = mongoose.model("food", FoodSchema);
module.exports = Food;