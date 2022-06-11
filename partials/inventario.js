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

async function traerInventario(){

	const request = await fetch('https://polarcity.herokuapp.com/api/stocks',{
		method: 'GET',
		headers:{
			'Accept': 'application/json',
     		'Content-Type': 'application/json'
		}
	})

	const inventories = await request.json();

	let inventoryList = '';

	for(let inventory of inventories){
		let productHtml = "<tr><td>"+inventory.product.id+"</td><td>"+inventory.product.name+"</td><td>Q "+inventory.product.price+"</td><td>"+inventory.quantity+"</td></tr>"
		inventoryList += productHtml;
	}
	document.querySelector('#inventory-container tbody').outerHTML = inventoryList;
  }
  
  traerInventario()
  

// var main = document.getElementById('main');
// main.innerHTML = inventario;
