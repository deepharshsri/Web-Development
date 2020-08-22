const route=require('express').Router()

let teachers=[
    {name : 'arnav', subject: 'WebDev'},
    {name :'Prateek', subject:'CompetetiveCoding'},
    {name : 'Anuj' , subject : 'javaCrux'}
]



// route.get('/',(req,res)=>res.send(teachers))

// route.get('/add',(req,res)=>{
//     teachers.push({
//         name: req.query.name,
//         subject: req.query.subject})

//        res.send(teachers)
// })


// route.get('/:id',(req,res)=>res.send(teachers[req.params.id]))


// Second Way : 


route.get('/',(req,res)=>res.send(teachers))

route.get('/:id',(req,res,next)=>
{
  if(isNaN(parseInt(req.params.id))){
      next();
  }

  res.send(teachers[req.params.id])
 

})

route.get('/add',(req,res)=>{
    teachers.push({
        name: req.query.name,
        subject: req.query.subject})

       res.send(teachers)
})




module.exports=route



