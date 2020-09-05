let express=require('express')

let srv=express()
let todoRoute=require('./route/todolist.js')
let newtask=require('./route/oko.js')
srv.use(express.json())
srv.use(express.urlencoded({extended:true}))

srv.set('view engine','hbs')

srv.set('views','public')

srv.use('/todos',todoRoute)
srv.use('/todos/bye',newtask)

srv.listen(7896)

