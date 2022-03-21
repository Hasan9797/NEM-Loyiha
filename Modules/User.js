const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Pleas, provide your Username"]
    },
    email: {
        type: String,
        required: [true, "Pleas, provide your email"]
    },
    password: {
        type: String,
        required: [true, "Pleas, provide your Password"]
    }
})

const User = mongoose.model("User", UserSchema);

module.exports = User;