const express=require('express')

const server =express()

server.use(express.json())
// server.use(express.urlencoded({extended:true}))

let teachersRoute=require('./route/teachers')
let studentsRoute=require('./route/student')


server.use('/teachers',teachersRoute)
server.use('/students',studentsRoute)


server.listen(3456)