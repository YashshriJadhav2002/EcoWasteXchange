const express = require('express')
const Buyer = require('../models/buyerModel')
const router = express.Router()
const bcrypt = require('bcrypt')
const {validationResult, body} = require('express-validator')

//routes
router.post('/',[

    body('Email','Enter valid Email').isEmail(),
    body('Password','Password field cannot be empty').notEmpty()

    ],async(req, res) => {

        const error = validationResult(req)

        if(!error.isEmpty()) {

            res.status(400).json({error: error.array() })

        }

        else {
            const buyer = await Buyer.findOne({Email:req.body.Email}) 
            if(!buyer)
                res.status(400).json({error:[{path:"Email",msg:"Buyer not registered"}]})
            else {
    
                const password = req.body.Password
                bcrypt.compare(password, buyer.Password,function(err, response) {
    
                    if(response) {
                        res.status(200).json({message: "Login Successful"})
                    }
                    else {
                        res.status(400).json({error:[{path:"Password",msg:"Incorrect Password"}]})
                    }
                })
    
            }

        }
        

})

module.exports = router
