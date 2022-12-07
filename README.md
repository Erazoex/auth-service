# Usage
before you start the aplication you need to create a directory called `/rsa_key_pair` and then
create the private and public key.

## Generate a private key 
openssl genrsa -des3 -out `<name of the private key file you want to create>` `<the size of the key>` 

## Generate a public key out of the private key
openssl rsa -in `<here goes the name of the private key>` -outform PEM -pubout -out `<here goes the private key file name>`

### Start the aplication
if you want to execute the express aplication you need to type `npm start` in the command line. There is a develop start of
this aplication which is if you type `npm run dev`.

