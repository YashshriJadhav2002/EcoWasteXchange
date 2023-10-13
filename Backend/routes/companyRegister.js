const express = require('express')

const Company = require('../models/companyModel')

const router = express.Router()
const { validationResult, body } = require('express-validator')
const bcrypt = require('bcrypt')

//routes
router.post('/',[


    body('Email','Enter valid Email').isEmail(),
    body('Phone','Enter valid Contact').isLength({equal:10}),
    body('Password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long').matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)
        .withMessage('Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character (@$!%*?&)'),
    body('Name', 'Name field cannot be blank').notEmpty(),
    body('Address','Address field cannot be blank').notEmpty()




    ],async(req,res) => {


        const error = validationResult(req)
        if(!error.isEmpty()) {

            res.status(400).json({error: error.array()})

        }
        else {

            const reqpassword=req.body.Password
            const salt=await bcrypt.genSalt(10)
            const securepass=await bcrypt.hash(reqpassword,salt)
            req.body.Password=securepass;
            const {Name, Address, Email, Phone, Password} = req.body

            try {

                const company = await Company.create({Name, Address, Email, Phone, Password})
                res.status(400).json({message:"Data Registered Successfully"})

            }catch(error) {

                res.status(200).json({error:error.message})

            }

        }
        
})

module.exports = router