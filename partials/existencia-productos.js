var inventario = `
<h1>Inventario de productos</h1>
<h2>productos en existencia</h2>
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
		<tr>
			<td>1003</td>
			<td>Lapicero Big</td>
			<td>Q 1.50</td>
			<td>16</td>
		</tr>
		<tr>
			<td>1004</td>
			<td>Sacapuntas Fas</td>
			<td>Q 1.00</td>
			<td>17</td>
		</tr>
    <tr>
			<td>1005</td>
			<td>Borrador Big</td>
			<td>Q 1.50</td>
			<td>20</td>
		</tr>
    <tr>
			<td>1006</td>
			<td>Dispensador de cinta adhesiva</td>
			<td>Q 50.00</td>
			<td>22</td>
		</tr>
    <tr>
			<td>1007</td>
			<td>Pegamento Tucan 4oz.</td>
			<td>Q 5.00</td>
			<td>23</td>
		</tr>
	</tbody>
</table>
`
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
var buscador = document.getElementById('buscador');
buscador.innerHTML = template;


var main = document.getElementById('table-main');
main.innerHTML = inventario;
