function modificarProducto(){
    
    let product = {}
    product.id = 200
    product.name = "Pelota"
    product.price = 250

    let id = 2030;

    fetch('https://polarcity.herokuapp.com/api/products/'+id,{
        method:'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'Application/json'
        },
        body: JSON.stringify(product)
    }).then((res) => res.json())
    .then(data => console.log(data))
}