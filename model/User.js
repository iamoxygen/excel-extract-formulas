const { Schema, model } = require("mongoose");

const User = new Schema({
    fullname: {
        type: String,
        trim: true,
        required: true,
    },
    googleId: {
        type: String,
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: true,
    },
    imageUri: {
        type: String,
        default: "https://robohash.org/stefan-one"
    },
    password: {
        type: String,
    },
    role: {
        type: String,
        required: true,
        enum: ["admin", "user", "mod"],
        default: "user",
    },
});

module.exports = model("user", User);