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

    Phone: {
        type: String,
        required: true

    },

    Password: {
        type: String,
        
    }

    

})

module.exports = mongoose.model('Company', CompanySchema)