require('dotenv').config() //attach the environment variables to process object

const express = require('express')
const mongoose = require('mongoose')
const app = express()

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
