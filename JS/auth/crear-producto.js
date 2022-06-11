function crearProducto(){

    let product = {}
    product.id = document.getElementById('id').value;
    product.name = document.getElementById('nombre').value;
    product.price = document.getElementById('precio').value;
  
    let stock = {}
    stock.product = product
    stock.quantity = document.getElementById('cantidad').value;
  
    fetch('https://polarcity.herokuapp.com/api/stocks',{
        method:'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'Application/json'
        },
        body: JSON.stringify(stock)
      }).then((res) => res.json())
      .then(data => console.log(data))
  }