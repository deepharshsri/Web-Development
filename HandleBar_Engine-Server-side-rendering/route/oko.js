let route=require('express').Router()


route.get('/',(req,res)=>{
    res.render('new')
})

module.exports=route