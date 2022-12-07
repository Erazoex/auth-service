const express = require('express')
const router = express.Router()
const { verifyToken } = require('../auth/verifyToken.auth')
const jwt = require('jsonwebtoken')
const fs = require('fs')
const secret = fs.readFileSync('./rsa_key_pair/private.pem')


router.post('/authorized', verifyToken, (req, res) => {
    jwt.verify(req.token, secret, (err, authData) => {
        if(err) {
            res.sendStatus(401)
        } else {
            res.json({
                mensaje: "user authorized",
                authData
            })
        }
    })
})

module.exports = router;