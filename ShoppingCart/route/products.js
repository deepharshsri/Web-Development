let route=require('express').Router()

let product=require('../db.js').Product

route.get('/',(req,res)=>{
    product.findAll()
    .then((product)=>{
         res.status(200).send(product)
    })
    .catch((err)=>{
        res.status(400).send({
            error: "Error to connect Database"
        })
})
})

route.post('/',(req,res)=>{

    product.create({

        name: req.body.name,

        manufacturer: req.body.manufacturer,

        price: parseFloat(req.body.price)
        
    }).then((products)=>{
      res.status(200).send(products)
    })
    .catch((err)=>{
        console.log(err)
        res.status(400).send({
            error: err
        })
    })
})

exports=module.exports={
    route
}
