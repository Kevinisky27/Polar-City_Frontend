function crearProducto(){


  let product = {}
  product.id = 2030
  product.name = "Clanchas"
  product.price = 200

  let stock = {}
  stock.product = product
  stock.quantity = 250

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

var productos = `
<table class="container">
    <thead>
      <tr>
        <th><h1>ID</h1></th>
        <th><h1>Nombre</h1></th>
        <th><h1>Precio</h1></th>
        <th><h1>Existencia</h1></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1002</td>
        <td>Lápiz Mongol</td>
        <td>Q 1.75</td>
        <td>15</td>
      </tr>
    </tbody>
  </table>
`

var form = `
  <div class="container">
  <form>
    <label for="name">ID: Producto</label>
    <input type="text" id="name" placeholder="id: 1025" 
    <label for="name">Nombre Producto Producto</label>
    <input type="text" id="name" placeholder="Lapiceros Big -Medianos color azul">
    <label for="email">Precio</label>
    <input type="email" id="email" placeholder="Q 2.50">
    <input type="submit" value="Crear Producto">
  </div>
`
var formulario = document.getElementById('table-main')
formulario.innerHTML = form;