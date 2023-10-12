const mongoose = require('mongoose')
const schema = mongoose.Schema

const SellerSchema = new schema({

    Name : {
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
    }

})

module.exports = mongoose.model('Seller', SellerSchema)