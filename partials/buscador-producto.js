function buscarProductoPorId(){
    // let id = document.getElementById("id").value;

    let id = 1002;

    fetch('https://polarcity.herokuapp.com/api/products/'+id,{
    }).then((res) => res.json())
    .then(data => console.log(data))
}

var template = `
<fieldset class="field-container">
    <input type="text" placeholder="Mercedes Azucena López Pérez" class="field" />
    <div class="icons-container">
      <div class="icon-search"></div>
      <div class="icon-close">
        <div class="x-up"></div>
        <div class="x-down"></div>
      </div>
    </div>
  </fieldset>
`
var table = `
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

var buscador = document.getElementById('buscador');
buscador.innerHTML = template;

var tableDatos = document.getElementById('table-main');
tableDatos.innerHTML = table;
