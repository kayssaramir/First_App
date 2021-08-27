const port=8080;
const address = "localhost";

const routes = require('./routes')
const express = require('express')
const app = express()

app.use(express.json())
app.use(routes) 

app.listen(port,()=>{
    console.log(`servidor startado na porta ${port}`)
})