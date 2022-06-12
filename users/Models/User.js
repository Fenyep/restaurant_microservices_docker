const mongoose = require('mongoose');
// creating the User Schema 
const UserSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    }
})

const User = mongoose.model("user", UserSchema);
module.exports = User;