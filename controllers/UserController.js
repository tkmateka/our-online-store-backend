
const User = require('../models/User')

module.exports = {
    defaultRoute: async (req, res) => {
        try {
            res.send('Welcome to NODE.JS');
        } catch (error) {
            res.status(500).send(error)
        }
    },
    addUser: async (req, res) => {
        try {
            const newUser = new User({ ...req.body })
            const result = await newUser.save()
            res.status(201).send(result)
        } catch (error) {
            res.status(500).send(error)
        }
    }
}