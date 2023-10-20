const mongoose = require('mongoose')

const schema = mongoose.Schema

const ProductSchema = new schema({

    Name: {
        type: String
      
    },

    BuyingPrice: {
        type: Number,
        
        
    },

    Age: {
        type: Number
        

    },

    SellingPrice: {
        type: Number,
        default:2000
    },

    

    isDisplay: {
        type: String
    },

    isCond: {
        type: String

    },
    isSecond: {
        type: String

    },
    Avatar:{
        type:String,
        default:"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",

    },
    Status1: {
        type: Number,
        default:-1
    },
    Status2: {
        type: Number,
        default:false

    },
 


})

module.exports = mongoose.model('Product', ProductSchema)