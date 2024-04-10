require('dotenv').config();
const express = require(`express`)
const app = express()
const databaseUrl = process.env.MONGO_URI
const connect = require("./database/connectDB")
const port = process.env.PORT || 3000
const  router = require("./router/event-router")
app.use(express.json)
app.use('api/v1/event')
connect(databaseUrl)
.then(()=>{
    app.listen(port,()=>{

    })
}).catch((error)=>{
    console.log(error)
})
