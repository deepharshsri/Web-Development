
$(()=>{
 let product=$('#card')

  $.get('/product/shop',(products)=>{
      createProduct(products)
  })

  function createProduct(products){
      for(data of products){
      product.append(
      $(` <div class="card col-3" style="width: 18rem;">
      <img src="https://images-na.ssl-images-amazon.com/images/I/51kGDXeFZKL._SL1024_.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <p class="card-text">${data.name}</p>
        <p class="card-text">${data.manufacturer}</p>
        <p class="card-text">Rs.${data.price}</p>
        <a href="#" class="btn btn-primary">Buy</a>
      </div>
    </div>`)
      )
      }
  }
})