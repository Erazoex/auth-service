const rsa = require('node-rsa')
const fs = require('fs')

const generateKeys = () => {
    const key = new rsa().generateKeyPair()

    const publicKey = key.exportKey("public")
    const privateKey = key.exportKey("private")

    fs.openSync("./rsa_key_pair/public.pem", "w")
    fs.writeFileSync("./rsa_key_pair/public.pem", publicKey, "utf-8")
    
    fs.openSync("./rsa_key_pair/private.pem", "w")
    fs.writeFileSync("./rsa_key_pair/private.pem", privateKey, "utf-8")
}

generateKeys()