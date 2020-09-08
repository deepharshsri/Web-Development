let route=require('express').Router()

const dB=require('../database/dB.js')



route.get('/person',(req,res)=>{
    console.log('api get')
   dB.getPerson()
   .then((result)=>{
     res.send(result)
   }).catch((err)=>{
       res.send(err)
   })

})

route.post('/person',(req,res)=>{
  dB.addPerson(req.body.name,req.body.age,req.body.city)
  .then(()=>{
    console.log('api post')
    res.redirect('/api/person')
  })
  .catch((err)=>{
    res.send(err)
  })
})

exports=module.exports={
  route
}