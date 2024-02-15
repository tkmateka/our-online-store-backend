const express = require('express');
const router = express.Router();

const UserController = require('../controllers/UserController')

// Default Route
router.get('/', UserController.defaultRoute);

// User routes
router.post('/sign-in', UserController.signIn);
router.post('/add-user', UserController.addUser);
router.get('/get-user/:email', UserController.getUser);

module.exports = router;