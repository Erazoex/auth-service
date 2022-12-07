const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const fs = require('fs')
const secret = fs.readFileSync('./rsa_key_pair/private.pem')

router.post('/login', (req, res) => {
    const user = req.body
    // TODO: here should go the database query search for the user that is making the request 

    jwt.sign({user}, secret, (err, token) => {
        res.json({
            token
        })
    })
})

module.exports = router;