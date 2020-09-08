let express=require('express')

let srv=express()

let personRoute=require('./route/api.js')

let path=require('path')
srv.use(express.json())
srv.use(express.urlencoded({extended:true}))


srv.use('/',express.static( 'public'))

srv.use('/add',express.static(path.join(__dirname, 'public','/addPerson.html')))

srv.use('/api',personRoute.route)

srv.listen(4444)