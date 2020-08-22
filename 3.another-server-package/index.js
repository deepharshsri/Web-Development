const express=require('express')

const server=express()


let m1=(req,res,next)=>{
    console.log("Hello I am in middleware 1 ")
    next();
}
let m2=(req,res,next)=>{
    console.log("Hello I am in middleware 2 ")
    next();
}
let m3=(req,res,next)=>{
    console.log("Hello I am in middleware 3 ")
    next();
}

server.use(m1);
server.use(m2);

server.get('/a',(req,res,next)=>{
    res.send("Hello World hehe")
})

server.use(m3)


server.listen(3333)