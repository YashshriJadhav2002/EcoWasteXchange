require('dotenv').config() //attach the environment variables to process object

const express = require('express')
const mongoose = require('mongoose')

//Importing routes
const buyerRoutes = require('./routes/sellerRoutes')
const sellerRoutes = require('./routes/sellerRoutes')
const companyModel = require('./models/companyModel')

const app = express()

//middleware
app.use(express.json())
app.use((req, res, next) => {

    console.log(req.path, req.method)
    next()

})

//route for seller
app.use('/api/sellers', sellerRoutes)

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
