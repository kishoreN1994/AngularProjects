const express = require('express');
const bodyParser = require('body-parser')
const PORT = 3000

const app = express()
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.send("Hello this is SERVER")
})

app.listen(PORT,()=>{
    console.log("Server is Running "+ PORT)
})
