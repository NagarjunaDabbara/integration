const express = require('express')
const request = require('request')
const app = express()
const port =5000;
app.get('/',(req,res)=>{
    res.send('hello world')
})
const url = 'https://api.darksky.net/forecast/fdd7be8b7eff1feca504871f1948ec13/37.8267,-122.4233'

app.get('/weather',(req,res)=>{
    request({url:url,json:true},(error,response)=>{
      res.send(response.body.currently)
        })
    
})
app.listen(port,()=>{
    console.log(`express app listening on port${port}!`)
})