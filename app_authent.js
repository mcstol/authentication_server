const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
app.use(cors())
app.use(bodyParser.json())
app.listen(port, () => {
    console.log(`Servidor rodando no endereço http//localhost:${port}`)
})

app.post('/', (req,res) =>{
    console.log('passou no teste')
    console.log(req.body)
    res.send("OK")
    res.status(200)
})


