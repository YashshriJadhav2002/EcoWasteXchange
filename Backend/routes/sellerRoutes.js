const express = require('express')
const Seller = require('../models/sellerModel')

const router = express.Router()

//routes
router.get('/', (req, res) => {

    res.json({msg: 'GET all workouts'})

})

//POST
router.post('/',async (req,res) => {

    const {Name, Phone, Address, Email} = req.body

    try{

        const seller = await Seller.create({Name, Phone, Address, Email})
        res.status(200).json(seller)

    }catch(error) {

        res.status(400).json({error : error.message})

    }

})

module.exports = router