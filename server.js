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

// Add new user (api)
app.post('/add-user', async (req, res) => {
    if (!req.body.email) {
        return res.status(500).send({
            error: 'Email address is required...'
        })
    }

    const newUser = new User({...req.body})
    const result = await newUser.save()
    res.status(201).send(result)
})

// Listen to port 3000
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}...`)
})