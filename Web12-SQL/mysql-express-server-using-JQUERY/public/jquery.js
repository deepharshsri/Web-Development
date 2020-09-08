$(()=>{
    let btn=$('#btn')
    let name=$('#name')
    let age=$('#age')
    let city=$('#city')
    let table=$('#table') 

    // (function reloadPage(){
    //     location.reload(true);
    // })()
    
     function getPerson(persons){
       table.empty()
       table.append( 
           `<tr>
        <th>NAME</th>
        <th>AGE</th>
        <th>CITY</th>

        </tr>`)
            for ( d of persons) {
                table.append(
                `<tr>
                <td>${d.name}</td>
                <td>${d.age}</td>
                <td>${d.city}</td>
                </tr>`
             )
            }
      
     }

     $.get('/api/person/',function(persons){
         console.log('Jquerry get')
        getPerson(persons)
        

     })
      
    btn.click(()=>{
        $.post(
            '/api/person',
            {
                name:name.val(),
                age:age.val(),
                city:city.val()
            },
           (data)=>{
               console.log("jquery post")
               getPerson(data);
               (()=>{
                window.location.replace("http://localhost:4444");
              })()
           }
          
        )
        
    })
})