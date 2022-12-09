const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const fs = require('fs')
const secret = fs.readFileSync('./rsa_key_pair/private.pem')

router.post('/login', (req, res) => {
    const user = req.body
    // TODO: here should go the database query search for the user that is making the request 
    jwt.sign({user}, secret, { algorithm: 'RS256' }, (err, token) => {
        if (err) {
            console.log(err)
            res.sendStatus(500)
        } else {
            res.json({
                token
            })
        }
    })
})

module.exports = router;