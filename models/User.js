const mongoose = require('mongoose')

const Address = new mongoose.Schema({
    streetName: { type: String, required: true },
    streetNumber: { type: Number, required: true },
    suburb: { type: String, required: true },
    city: { type: String, required: true },
    code: { type: Number, required: true }
})

const User = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, lowercase: true, index: { unique: true } },
    cellNumber: { type: String, required: true },
    address: Address,
    role: { type: String, required: true },
    offerDelivery: { type: Boolean },
    password: { type: String, required: true }
})

module.exports = mongoose.model('User', User);