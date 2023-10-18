const mongoose = require('mongoose')
const schema = mongoose.Schema
const jwt = require('jsonwebtoken')
const SellerSchema = new schema({

    Name : {
        type: String,
        
    },

    Phone: {
        type: Number,
        
        unique:true
    },

    Address: {
        type: String,
     
    },
    City:
    {
        type:String,
       
    
    },
    State:{
        type:String,
    
    },

    Email:{
        type: String,
        unique:true
    },
    Password:{
        type:String,
        
    },
    Avatar:{
        type:String,
        default:"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    }
    ,
    tokens: [
        {
            token: {

                type:String,
                required:true

            }
        }

    ]
     

})


SellerSchema.methods.generateAuthToken = async function () {

    try {

        let token = jwt.sign({_id:this._id}, process.env.SECRET_KEY)
        this.tokens = this.tokens.concat({token: token});
        await this.save();
        return token;
        
    } catch(err) {
        console.log(err);
    }
}
module.exports = mongoose.model('Seller', SellerSchema)