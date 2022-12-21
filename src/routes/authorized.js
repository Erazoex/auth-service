const express = require('express')
const router = express.Router()
const { verifyToken } = require('../auth/verifyToken.auth')
const jwt = require('jsonwebtoken')
const fs = require('fs')
const secret = fs.readFileSync('./rsa_key_pair/public.pem')


router.post('/authorized', verifyToken, (req, res) => {
    jwt.verify(req.token, secret, (err, authData) => {
        if(err) {
            res.sendStatus(500)
        } else {
            res.json({
                message: "user authorized",
                authData
            })
        }
    })
})

module.exports = router;