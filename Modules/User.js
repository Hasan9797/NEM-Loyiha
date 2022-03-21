const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

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

// UserSchema.pre("save", function(next){
//     const user = this
//     bcrypt.hash("user.password", 10, function(err, encrypted){
//         user.password = encrypted;
//         next();
//     })
// })

const User = mongoose.model("User", UserSchema);

module.exports = User;