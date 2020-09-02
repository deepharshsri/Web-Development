let route=require('express').Router();

let todo=[];

route.get('/',(req,res)=>{
    res.send(todo)
})

route.post('/',(req,res)=>{
    todo.push({
      task: req.body.task
    })
    res.send(todo)
})

module.exports=route