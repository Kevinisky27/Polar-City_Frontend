const url = 'https://polarcity.herokuapp.com/api/products'

function obtenetLocalStorage () {
  if (localStorage.getItem('token')) {
    const token = localStorage.getItem('token')
    traerDatos(token)
  } 
  else {
    console.log("Token no existente en el local Storage")
  }
}

function traerDatos (token) {
  fetch(url,{
    method: 'GET',
    headers: { 
      "Authorization": `Bearer ${token}`,
      "Accept": "application/json",
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then((res) => res.json())
  .catch(err => console.log(err))
}
obtenetLocalStorage()

