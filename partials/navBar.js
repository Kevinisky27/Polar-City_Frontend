var navBar = `
  <section class="navigation">
  <div class="nav-container">
    <!-- Inicio del NavBar -->
    <nav>
      <div class="nav-fostrap">
        <ul>
          <li><a onclick="home()">Inicio</a></li>
          <li><a href="javascript:void(0)">Productos<span class="arrow-down"></span></a>
            <ul class="dropdown">
              <li><a href="#">Crear producto</a></li>
              <li><a href="#">Modificar producto</a></li>
              <li><a href="#">Eliminar producto</a></li>
            </ul>
          <li><a href="javascript:void(0)">Ordenes<span class="arrow-down"></span></a>
            <ul class="dropdown">
              <li><a href="">Crear orden</a></li>
              <li><a href="">Orden autorizada</a></li>
            </ul>
          </li>
          <li><a href="javascript:void(0)">Factura<span class="arrow-down"></span></a>
            <ul class="dropdown">
              <li><a href="#">Buscar Factura</a></li>
            </ul>
          </li>
          <li><a href="javascript:void(0)">Inventario<span class="arrow-down"></span></a>
            <ul class="dropdown">
              <li><a href="#">Visualizar inventario</a></li>
            </ul>
          </li>
          <li><a href="javascript:void(0)">Contacto<span class="arrow-down"></span></a>
            <ul class="dropdown">
              <li><a href="#">Chat bot - WhatsApp</a></li>
            </ul>
          </li>
          <li><a href="https://calendar.google.com/calendar/" target="__blank__">Calendario</a></li>
          <li><a href="https://www.desmos.com/scientific?lang=es" target="__blank__">Calculadora</a></li>
          <li><a onclick="integrantes()">Integrantes</a></li>
          <li class="cerrar-sesion"><a onclick="cerrarSesion()">Cerrar Sesión</a></li>
        </ul>
      </div>
    </nav>

  </div>
  </section>
`
var header = document.getElementById('header');
header.innerHTML = navBar;

// Mensaje principal, inicio de la aplicación
console.log("Derechos Reservados - 2022 Polar City");

// Funcionalidad de la aplicación

function home() { // botón de inicio
  location.href = "../Source/home.html"
}

function cerrarSesion () { // botón de Cerrar Sesión
  location.href = "../index.html"
}

function integrantes() { // botón de integrantes
  location.href = "../Source/integrantes.html"
}


// setTimeout(function () {  //programación por tiempo
//   location.href = "../index.html";
// }, 1000 * 1)

// Botones de la aplicación