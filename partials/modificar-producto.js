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

{/* <input type="email" id="email" placeholder="Email Address">
    <label for="gender">Gender</label>
    <select id="gender">
      <option value="male">Male</option>
      <option value="female">Female</option>
    </select>
    <label for="message">Message</label>
    <textarea id="message" cols="30" rows="10" placeholder="Message"></textarea>
    <input type="submit" value="Submit">
  </form> */}