const mongoose = require('mongoose')

const schema = mongoose.Schema

const  CompanySchema = new schema({

    Name: {
        type: String,
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

    contact: {
        type: String,
        required: true

    },

    profe: {
        type: String,
        required: true

    }

})

module.exports = mongoose.model('Company', CompanySchema)