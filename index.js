const express = require("express")
const app = express()

app.get("/",(req,res)=>{
    value=>10
    res.send("success!")
})

app.listen(4500,()=>{
    console.log("running at server 4500")
})