const express=require('express')

const server=express()

server.use(express.json())
server.use(express.urlencoded({extended: true}))

let todos=[]

server.get('/todos',(req,res)=>{
    res.send(todos)
})

server.post('/todos',(req,res)=>{
    todos.push([
        req.body.task,req.body.status
    ])
    res.send( todos)
})

server.delete('/todos/:id',(req,res)=>{
    todos.splice(req.params.id,1)
    res.send(todos)
})

server.patch('/todos/:id',(req,res)=>{
    todos.splice(req.params.id,1);
    todos.push([
        req.body.task, req.body.status
    ])
    res.send(todos)
})

server.get('/todos/:id',(req,res)=>{
    res.send(todos[req.params.id])
})


server.listen(1234)