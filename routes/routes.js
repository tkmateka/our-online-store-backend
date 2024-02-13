const express = require('express');
const router = express.Router();

const UserController = require('../controllers/UserController')

// Default Route
router.get('/', UserController.defaultRoute);

// User routes
router.post('/add-user', UserController.addUser);

module.exports = router;