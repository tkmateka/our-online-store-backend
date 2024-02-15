
const User = require('../models/User')
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
    defaultRoute: async (req, res) => {
        try {
            res.send('Welcome to NODE.JS');
        } catch (error) {
            res.status(500).send(error)
        }
    },
    addUser: (req, res) => {
        let payload = { ...req.body };

        bcrypt.genSalt(saltRounds, (err, salt) => {
            bcrypt.hash(payload.password, salt, async (err, hash) => {
                try {
                    // Store hash in your password DB.
                    payload['password'] = hash;

                    const newUser = new User(payload)
                    const result = await newUser.save()
                    res.status(201).send(result)
                } catch (error) {
                    res.status(500).send(error)
                }
            });
        });
    },
    getUser: async (req, res) => {
        try {
            const result = await User.findOne(req.params)
            res.status(200).send(result)
        } catch (error) {
            res.status(500).send(error)
        }
    },
    signIn: async (req, res) => {
        try {
            const foundUser = await User.findOne({ email: req.body.email })

            // Check if user exists
            if (foundUser) {
                // Load hash from your password DB. (Decrypt)
                bcrypt.compare(req.body.password, foundUser.password, (err, result) => {
                    if (result) {
                        res.status(200).send(foundUser)
                    } else {
                        res.status(403).send({ error: 'Password is invalid' })
                    }
                });
            } else {
                res.status(500).send({ error: 'User not found' })
            }
        } catch (error) {
            res.status(403).send(error)
        }
    }
}