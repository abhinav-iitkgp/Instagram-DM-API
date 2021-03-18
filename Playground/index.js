const express=require('express')
const messageService=require('./direct-message')

const app=express()

const port=3000||process.env.PORT


app.listen(port,()=>{
    console.log('Listening at port 3000')
    messageService.login
    
})