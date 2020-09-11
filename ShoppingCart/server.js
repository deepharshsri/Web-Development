let express=require('express')

let srv=express()

srv.use(express.json())

srv.use(express.urlencoded({extended:true}))

let path=require('path')

let userRoute=require('./route/user.js')

let proRoute=require('./route/products.js')

srv.use('/',express.static(path.join(__dirname,'public')))

srv.use('/add',express.static(path.join(__dirname,'public','AddProduct.html')))

srv.use('/user/shop',userRoute.route)

srv.use('/product/shop',proRoute.route)

srv.listen(1234)