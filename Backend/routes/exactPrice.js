const express = require('express')

const Product = require('../models/productModel')

const router = express.Router()

router.post('/', async(req, res) => {


        const product = await Product.findById(req.body._id)

        console.log(product);
        if(product) {

            res.status(200).json({message:product})
            
            

        }



})

module.exports = router