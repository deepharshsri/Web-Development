$(()=>{
  let name=$('#name')
  let manuf=$('#manufacturer')
  let price=$('#price')
  let btn=$('#btn') 
   
    btn.click(()=>{
   $.post('/product/shop',
   {
   name:name.val(),
   manufacturer:manuf.val(),
   price:price.val()

   },
   ()=>{
      window.alert("Item Added Successfully")
     window.location.replace('http://localhost:1234/')
   }
   )
})

})