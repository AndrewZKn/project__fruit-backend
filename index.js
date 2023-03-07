require("dotenv").config()
require("./config/database").connect()
const express = require("express")
const app = express()
const http = require("http")
const server = http.createServer(app)
const { PORT } = process.env

app.use(express.json())
app.get('/api/user', (req,res)=>{
    
} )
server.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})