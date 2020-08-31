$(()=>
{
    let addBtn=$('#addBtn')
    let resetBtn=$('#resetBtn')
    let list=$('.list-group')
    let task=$('#task')
    let sortBtn=$('#sortBtn')
    let clrBtn=$('#clrBtn')

    task.on('input',()=>{
       toggleBtn();
    })



    function clearDoneTask(){
        $('#ulTask .done').remove()
    }
 

    function sortDoneTask(){
        $('#ulTask .done').appendTo(list)
    }


    function toggleBtn(){
        addBtn.prop('disabled',task.val()=='')
        resetBtn.prop('disabled',task.val()=='') 
        clrBtn.prop('disabled',$('#ulTask .done').length<1)
        sortBtn.prop('disabled',$('#ulTask .done').length<1)
    }



    addBtn.click(()=>{
        
        let item=$(`<li>`,{
            'class':'list-group-item',
             text: task.val()
        })
        
        item.click(()=>{
            console.log("clicked")
            item.toggleClass("done")
             toggleBtn()
        })
       
       

        list.append(item);
      
    })



    resetBtn.click(()=> {
        task.val("")
        toggleBtn()      
    })

    sortBtn.click(()=>{
        sortDoneTask()    
     })


    clrBtn.click(()=>{
        clearDoneTask()
        toggleBtn()
    })



    })