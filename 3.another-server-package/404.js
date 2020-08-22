const express=require('express')

const server=express()

server.get('/a',(req,res)=>res.send(" Hello AAAAA"))

server.get('/b',(req,res)=>res.send(" Hello BBBBB"))


server.use((req,res)=>res.send("<h1> 404 not found </h1"))

server.listen(1234)