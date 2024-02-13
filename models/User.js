const mongoose = require('mongoose')

const User = new mongoose.Schema({
    name: { type: String, required: true },
    surname: { type: String, required: true },
    email: { type: String, required: true, lowercase: true, index: { unique: true } },
})

module.exports = mongoose.model('User', User);