let route=require('express').Router()

let user=require('../db.js').User

route.get('/user',(req,res)=>{
    user.findAll()
    .then((results)=>{
         res.status(200).send(results)
    })
    .catch((err)=>{
        res.status(400).send({
            error: "Error to connect Database"
        })
})
})

route.post('/user',(req,res)=>{
    user.create({
        name:req.body.name
    }).then((results)=>{
      res.status(200).send(results)
    })
    .catch((err)=>{
        res.status(400).send({
            error: "Error to connect Database"
        })
})
})

exports=module.exports={
    route
}
