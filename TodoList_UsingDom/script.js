window.onload=function(){
    let newtask=document.getElementById('task')
    let btn=document.getElementById('add')
    let list=document.getElementById('list')
    
     btn.onclick=()=>{
        let li=document.createElement('li');
         
        let taskSpan=document.createElement('span')

        taskSpan.innerText=newtask.value
         
        let delBtn=document.createElement('button')

        delBtn.innerHTML= '❌';

        let moveup=document.createElement('button')

        moveup.innerText='🔺';
        
        let movedown=document.createElement('button')

        movedown.innerText='🔻';
        
        delBtn.onclick=function(event){
          // event.target= deleteButton  
          // event.target.parentElement  = the <li>...</li>

        event.target.parentElement.remove()

        }
         
        moveup.onclick=(event)=>{
                // event.target= upButton
                // event.target.parentElement = the <li>..</li>
                // event.target.parentElement.parentElement is our list
               
                event.target.parentElement.parentElement.insertBefore(
                    event.target.parentElement,
                    event.target.parentElement.previousElementSibling
                )

                
        }
        movedown.onclick=(event)=>{
            // event.target= downButton
            // event.target.parentElement = the <li>..</li>
            // event.target.parentElement.parentElement is our list
           
            event.target.parentElement.parentElement.insertBefore(
            
                event.target.parentElement.nextElementSibling,
                event.target.parentElement
            )

            
    }
        
        li.appendChild(delBtn)
        li.append(moveup)
        li.appendChild(movedown)
        li.appendChild(taskSpan)
        list.append(li)
     }
}