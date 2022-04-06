const express = require('express');
const User = require('../models/Users')
const router = express.Router();
const { body, validationResult } = require('express-validator');
var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const JWT_SECRET = "HElloAni$h"

// making a Post request 
router.post('/createuser', [
    body('name').isLength({ min: 3 }),
    body('email').isEmail(),
    body('password').isLength({ min: 5 })
],
    // if there are errors, return bad request and the error
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        //Check weather the email exist already
        try {
            let user = await User.findOne({ email: req.body.email });
            if (user) {
                return res.status(400).json({ error: "Sorry a user with this email already exist" })
            }
            // Securing Password
            const salt = await bcrypt.genSalt(10);
            const secPass = await bcrypt.hash(req.body.password, salt);

            //Creating a new user
            user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: secPass,
            });
            const data = {
                user:{
                    id: user.id
                }
            }
            const authtoken = jwt.sign(data, JWT_SECRET);

            // res.json(user)
            res.json({authtoken});

        } catch (error) {
            console.log(error.message);
            res.status(500).send("Some error occured")
        }
        // .then(user => res.json(user))
        // .catch(err=> {console.log(err)
        // res.json({error: 'Please enter the valid value',message: err.message})})
    })

module.exports = router;