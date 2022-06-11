// Datos para registrar un nuevo usurio
const form = document.getElementById('form-signUp');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  
  // creación de las constantes a utilizar
  const url = 'https://polarcity.herokuapp.com/api/auth/signup'
  const username = document.getElementById('username');
  const email = document.getElementById('email');
  const password = document.getElementById('password');

  let signup = {}
  signup.username = username.value;
  signup.email = email.value;
  signup.password = password.value;

  fetch(url, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-type": "application/json; charset=UTF-8"},
    body: JSON.stringify(signup)
  }, form.reset(), alert("Usuario creado exitosamente 🤟🏻"))
  .then((res) => res.json())
  .catch(err => console.log(err))
})

// Datos para logiar a un usuario existente
const formLogin = document.getElementById('login-user');
formLogin.addEventListener('submit', function (e) {
  e.preventDefault();

  // creacion de las constantes a utilizar en el login
  const url = 'https://polarcity.herokuapp.com/api/auth/login'
  const email = document.getElementById('email-login');
  const password = document.getElementById('password-login')
  

  let login = {}
  login.email = email.value;
  login.password = password.value;


  fetch(url, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-type": "application/json; charset=UTF-8"},
    body: JSON.stringify(login)
  })
  .then((res) =>  res.json())
  .catch(err => console.log(err))

})

function ingresar (){
  location.href = 'Source/home.html'
}





// guardando el token en el localStorage
let token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJwb2xhckNpdHlAZ21haWwuY29tIiwiaWF0IjoxNjU0OTE5MzQzLCJleHAiOjE2NTU1MjQxNDN9.xhYGvazgcFcj1qDONM7iK5xci7lV1Lq-Rd_37Uo1lFsBalVDJEsjmz1i0PhiyDeqOdNc82mX_rHmA-74NbuQOg'
localStorage.setItem('token', token);




// validación del LocalStorage, para determinar si es compatible en otro navegador. 
if (typeof(Storage) !== 'undefined') {

} else {
  alert("Este navegador no soporta esta aplicación, se recomienda Google Chrome o Safari")
}
