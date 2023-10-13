const mongoose = require('mongoose')

const schema = mongoose.Schema

const BuyerSchema = new schema({

    Name: {
        type: String
      
    },

    Phone: {
        type: Number,
        unique:true
        
    },

    Address: {
        type: String
        

    },

    Email: {
        type: String,
        unique:true
       

    },

    Password: {
        type: String
    },

    City: {
        type: String
    },

    State: {
        type: String

    }


})

module.exports = mongoose.model('Buyer', BuyerSchema)