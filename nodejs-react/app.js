const express = require('express')
const request = require('request')
const app = express()
const port =5000;
app.get('/',(req,res)=>{
    res.send('hello world')
})
app.get('/weather',(req,res)=>{
  
    res.send('anantapur:32c')
   
})
app.listen(port,()=>{
    console.log(`express app listening on port${port}!`)
})