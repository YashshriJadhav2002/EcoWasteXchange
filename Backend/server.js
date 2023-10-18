require('dotenv').config() //attach the environment variables to process object

const express = require('express')
const mongoose = require('mongoose')

//Importing routes
const buyerRegister = require('./routes/buyerRegister')
const sellerRegister = require('./routes/sellerRegister')
const companyRegister = require('./routes/companyRegister')
const companyLogin = require('./routes/companyLogin')
const buyerLogin = require('./routes/buyerLogin')
const sellerLogin = require('./routes/sellerLogin')



const app = express()

//middleware
app.use(express.json())
app.use((req, res, next) => {

    console.log(req.path, req.method)
    next()

})

//route 
app.use('/api/seller/register', sellerRegister)
app.use('/api/buyer/register', buyerRegister)
app.use('/api/company/register', companyRegister)
app.use('/api/seller/login', sellerLogin)
app.use('/api/buyer/login', buyerLogin)
app.use('/api/company/login', companyLogin)


mongoose.connect(process.env.MONGO_URI)
    .then(() => {

        //Start the express server
        app.listen(process.env.PORT, () => {
        console.log('Connected to DB and listening on port', process.env.PORT)

})
    })
    .catch((error) => {
        console.log(error)
    })
