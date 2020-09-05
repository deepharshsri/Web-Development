let route=require('express').Router()

let todo=[
{task :' One task'}
,{
task:'One More task'
}]

route.get('/',(req,res)=>{
    res.render('todos',{todo})
})
route.post('/',(req,res)=>{
todo.push({
    task:req.body.newtask
})

    res.redirect('/todos')
})

module.exports=route