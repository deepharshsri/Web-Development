let express =require('express')

let srv=express()

let todolist=require('./route/todos')


srv.use(express.json())
srv.use(express.urlencoded({extended:true}))

srv.use('/public',express.static("./public"))

srv.use('/todos',todolist)

srv.listen(1234)