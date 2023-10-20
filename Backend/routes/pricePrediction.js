const express = require('express')

const Product = require('../models/productModel')
const {validationResult,body}=require('express-validator')
const router = express.Router()

router.post('/',[
    body('Name', 'Name field cannot be blank').notEmpty(),
    body('BuyingPrice', 'Buying Price cannot be empty').notEmpty(),
    body('BuyingPrice', 'Please enter valid buying price').isNumeric(),
    body('Age', 'Enter valid age').isNumeric(),
    body('isDisplay','Display Field cannot be empty').notEmpty(),
    body('isCond','Condition Field cannot be empty').notEmpty(),
    body('isSecond','Second hand Field cannot be empty').notEmpty()

], async(req,res)=> {

    const error = validationResult(req)
    if (!error.isEmpty()) 
    {
        res.status(400).json({ error: error.array() })
    }
   
    else
    {
        const {Name, BuyingPrice, Age,  isDisplay, isCond, isSecond, Avatar} = req.body

        try {

            const product = await Product.create({Name, BuyingPrice, Age,isDisplay, isCond, isSecond, Avatar})
            res.status(200).json({message:"Product Saved Successfully",id:product._id})
           


        } catch(err) {

            res.status(400).json({ error:[{path:"Database",msg:err.message}]})

        }

    }
})


module.exports = router