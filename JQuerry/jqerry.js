
let pre=$('#prepend')
let app=$('#append')
pre.click(()=>{
    let list=$('#list')
    let val=$('#text').val()
    
    list.prepend($(`<li>${val}</li>`))
}) 
app.click(()=>{
    let list=$('#list')
    let val=$('#text').val()

    
    let item=$(`<li>`,{
        
        text: val
    })
   
    
    item.click(()=>{
        console.log('click')
        item.toggleClass('hfsaello')
    })
    list.append(item)
})   
