## Generate a private key 
openssl genrsa -des3 -out `<name of the private key file you want to create>` `<the size of the key>` 

## Generate a public key out of the private key
openssl rsa -in `<here goes the name of the private key>` -outform PEM -pubout -out `<here goes the private key file name>`
