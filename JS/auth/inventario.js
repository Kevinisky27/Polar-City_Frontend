const url = 'https://polarcity.herokuapp.com/api/products'

function obtenetLocalStorage () {
  if (localStorage.getItem('token')) {
    const token = localStorage.getItem('token')

    fetch(url, {
      method: "GET",
        headers: {
          "Authorization": `${token}`,
          "Accept": "application/json",
          "Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(login)
    })
    .then(res =>  res.json())
    .catch(err => console.log(err))
  } 
  else {
    console.log("Token no existente en el local Storage")
  }
}

obtenetLocalStorage()

