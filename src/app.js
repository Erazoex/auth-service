const express = require('express')
const app = express()
const port = 5000

app.use(express.json())

app.get('/', (req, res) => {
    res.json({ res: "Hello Wolrd!"})
})

app.use('/', require('./routes/login'));
app.use('/auth', require('./routes/authorized'));

app.listen(port, () => {
    console.log(`listening port=${port}`)
})