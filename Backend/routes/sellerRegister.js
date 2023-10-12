const express = require('express')
const Seller = require('../models/sellerModel')
//For validation import express validator
const { validationResult, body } = require('express-validator')
const router = express.Router()
const bcrypt=require('bcrypt')


//POST
router.post('/', [
    body('Email', 'Enter valid email-address').isEmail(),
    body('Phone', 'Enter valid phone-no').isLength({ min: 10 }),
    body('Password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long').matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)
        .withMessage('Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character (@$!%*?&)'),
    body('Name', 'Name field cannot be blank').notEmpty(),
    body('Address', 'Address Field cannot be blank').notEmpty(),
    body('City', 'City Field cannot be blank').notEmpty(),
    body('State', 'State Field cannot be blank').notEmpty()

],
    async (req, res) => {

        const error = validationResult(req)
        if (!error.isEmpty()) {
            res.status(200).json({ error: error.array() })
        }
        else 
        {
            const reqpassword=req.body.Password
            const salt=await bcrypt.genSalt(10)
            const securepass=await bcrypt.hash(reqpassword,salt)
            req.body.Password=securepass;
            const { Name, Phone, Address, Email,Password,City,State } = req.body

            try {

                const seller = await Seller.create({ Name, Phone, Address, Email ,Password,City,State})
                res.status(200).json({message:"Data Inserted Successfully"})

            } catch (error) {

                res.status(400).json({ error: error.message })

            }
        }

    })

module.exports = router