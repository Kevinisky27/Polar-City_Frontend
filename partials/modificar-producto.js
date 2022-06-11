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

var template = `
<fieldset class="field-container">
    <input type="text" placeholder="Producto: 1025" class="field" />
    <div class="icons-container">
      <div class="icon-search"></div>
      <div class="icon-close">
        <div class="x-up"></div>
        <div class="x-down"></div>
      </div>
    </div>
  </fieldset>
`
var form = `
  <div class="container">
    <form>
      <label for="name">Nombre Producto</label>
      <input type="text" id="name" placeholder="Lapiceros Big - Medianos color azul">
      <label for="email">Precio</label>
      <input type="email" id="email" placeholder="Q. 2.50">
      <input type="submit" value="Modificar Producto">
      
  </div>
`
var formulario = document.getElementById('table-main')
formulario.innerHTML = form;

var buscador = document.getElementById('buscador');
buscador.innerHTML = template;


