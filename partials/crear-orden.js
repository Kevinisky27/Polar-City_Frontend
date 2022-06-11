var form = `
  <div class="container">
    <form>
      <label for="name">Nombre del Cliente</label>
      <input type="text" id="name" placeholder="José Javier Marroquín" 
      <label for="name">ID: Producto</label>
      <input type="text" id="name" placeholder="id: 1025">
      <label for="email">Cantidad</label>
      <input type="email" id="email" placeholder="cant: 15">
      <input type="submit" value="Generar Orden">
      
      
  </div>
`
var formulario = document.getElementById('table-main')
formulario.innerHTML = form;