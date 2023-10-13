const express = require('express')

const Buyer = require('../models/buyerModel')
const router = express.Router()
const { validationResult, body } = require('express-validator')
const bcrypt=require('bcrypt')

//routes
router.post('/',[

    body('Phone','Enter valid phone number').isLength({min:10}),
    body('Email','Enter valid email').isEmail(),
    body('Password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long').matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)
        .withMessage('Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character (@$!%*?&)'),
    body('Name', 'Name field cannot be blank').notEmpty(),
    body('Address', 'Address Field cannot be blank').notEmpty()



    ],async (req,res)=>{

        const error = validationResult(req)
        if (!error.isEmpty()) {
            res.status(200).json({ error: error.array() })
        }
        else{

            const reqpassword=req.body.Password
            const salt=await bcrypt.genSalt(10)
            const securepass=await bcrypt.hash(reqpassword,salt)
            req.body.Password=securepass;
            const {Name, Phone, Address, Email, Password} = req.body

            try{

                const buyer = await Buyer.create({Name, Phone, Address, Email, Password})
                res.status(200).json({message: "Data inserted successfully"})

            }catch(error){

                res.status(400).json({error: error.message})

            }
        }

    

})

module.exports = router
