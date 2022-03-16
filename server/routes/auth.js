const express = require('express')
const router = express.Router()
const { check } = require('express-validator')
const authController = require('../controllers/authController')

//User authentication 
//Endpoint: api/auth

router.post('/', 
    [
        check('email', 'Add a valid email').isEmail(),
        check('password', 'The password should be 6 characters at least').isLength({min: 6})
    ],authController.authUser

);
module.exports = router