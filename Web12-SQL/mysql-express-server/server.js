const express=require('express')

const srv=express()

srv.use(express.json())

srv.use(express.urlencoded({extended:true}))

srv.set('view engine','hbs')

let data=require('./db.js')


srv.get('/add',(req,res)=>{
    res.render('add_p')
})




srv.get('/person',(req,res)=>{
    data.getperson().then((persons)=>{
        res.render('person',{persons})
    }).catch((err)=>{
        res.send(err)
    })
   
})

srv.post('/add',(req,res)=>{
    data.addperson(req.body.name,req.body.age,req.body.city)
    .then(()=>{
        res.redirect('/person')
    
    }).catch((err)=>{
          res.send(err)
    })
    
})
srv.listen(2222)