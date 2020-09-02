$(()=>{
    let newtodo=$('#task')
    let btn=$('#btn')
    let list=$('#todos')

    btn.click(()=>
    {
        $.post(
            '/todos/',
            {task:newtodo.val()},
            (data)=>{
                list.empty()
                     for (todos of data) {
                         list.append(`<li>${todos.task}</li>`)
                     }
            }
        )
    })
})