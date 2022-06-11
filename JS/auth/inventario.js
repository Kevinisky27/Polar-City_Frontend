function traerInventario(){

  fetch('https://polarcity.herokuapp.com/api/stocks',{
  }).then((res) => res.json())
  .then(data => console.log(data))

  console.log(data)
}

