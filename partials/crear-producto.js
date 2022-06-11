
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
    <input type="text" id="id" placeholder="id: 1025" 

    <label for="name">Nombre Producto Producto</label>
    <input type="text" id="nombre" placeholder="Lapiceros Big -Medianos color azul">

    <label for="precio">Precio</label>
    <input type="text" id="precio" placeholder="Q 2.50">

    <label for="cantidad">Cantidad</label>
    <input type="text" id="cantidad" placeholder="cant: 15">

    <input type="button" onclick="crearProducto()" value="Crear Producto" >
  </div>
`
var formulario = document.getElementById('table-main')
// formulario.innerHTML = form;