const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

const mongoose = require('mongoose')

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/our-online-store')
    .catch(err => console.log('Something went wrong...', err))

// Middleware
app.use(express.json())

// Routes
const routes = require('./routes/routes');
app.use(routes);

// Listen to port 3000
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}...`)
})