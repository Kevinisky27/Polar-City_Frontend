var form = `
  <div class="container">
    <form>
      <label for="name">ID: Producto</label>
      <input type="text" id="name" placeholder="id: 1025" 
      <label for="name">Nombre Producto</label>
      <input type="text" id="name" placeholder="Lapiceros Big - Medianos color azul">
      <label for="email">Precio</label>
      <input type="email" id="email" placeholder="Q. 2.50">
      <input type="submit" value="Enviar Producto">
      
  </div>
`
var formulario = document.getElementById('table-main')
formulario.innerHTML = form;