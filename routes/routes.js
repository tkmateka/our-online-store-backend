const express = require('express');
const router = express.Router();

const UserController = require('../controllers/UserController')

// Default Route
router.get('/', UserController.defaultRoute);

module.exports = router;