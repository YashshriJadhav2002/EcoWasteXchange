const mongoose = require('mongoose')

const schema = mongoose.Schema

const BuyerSchema = new schema({

    Name: {
        type: String,
        required: true
    },

    Phone: {
        type: Number,
        required: true

    },

    Address: {
        type: String,
        required: true

    },

    Email: {
        type: String,
        required: true

    },

    Profe: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('Buyer', BuyerSchema)