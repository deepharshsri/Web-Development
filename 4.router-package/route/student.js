const route=require('express').Router()

let students=[
    {name : 'Deepansh', Collage : 'Galgotias', Year: 'IV'},
    {name : 'Ritik', Collage : 'Galgotias', Year: 'IV Cloud'},
    {name : 'Kunal ', Collage : 'Mait', Year: 'III'},
    {name : 'Rahul', Collage : 'DTU', Year: 'II'},
    {name : 'Abhishek', Collage : 'IIT', Year: 'I'},
    
]

// route.get('/',(req,res)=>res.send(students))


// route.get('/add',(req,res)=>{
//    students.push({
//         name: req.query.name,
//         Collage: req.query.collage,
//         Year: req.query.year
//     })

//        res.send(students)
// })

// route.get('/:id',(req,res)=>res.send(students[req.params.id]))

route.get('/',(req,res)=>res.send(students))

route.post('/',(req,res)=>{
    students.push({
        name: req.body.name,
        Collage : req.body.collage,
        Year: req.body.year
})
res.send(students)
})


route.get('/:id',(req,res)=>res.send(students[req.params.id]))

module.exports=route



