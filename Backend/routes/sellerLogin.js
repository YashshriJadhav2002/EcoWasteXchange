const express = require('express')

const Seller = require('../models/sellerModel')
const router = express.Router()
const bcrypt=require('bcrypt')
const { validationResult, body } = require('express-validator')
//routes
router.post('/',[
    body('Email','Enter valid Email').isEmail(),
    body('Password','Password field cannot be empty').notEmpty()

],async(req,res)=>{


    const error = validationResult(req)
    if(!error.isEmpty()) {

        return res.status(400).json({error: error.array() })


    }
    const seller=await Seller.findOne({Email:req.body.Email})
    if(!seller)
    {
        console.log("not success")
        return res.status(400).json({error:"Seller not registered"})
        
    }
   
    else{
        const password=req.body.Password
        bcrypt.compare(password,seller.Password,function(err,response){
        if(response)
        return res.status(200).json({message:"Login Successfull"})
        else
        return res.status(400).json({message:"Incorrect Password"})
                
        })
    }
})


module.exports = router
