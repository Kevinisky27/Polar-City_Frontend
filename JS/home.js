// Mensaje principal, inicio de la aplicación
console.log("Derechos Reservados - 2022 Polar City");

// Funcionalidad de la aplicación
$(document).ready(function () {
  $(".navbar-fostrap").click(function () {
    $(".nav-fostrap").toggleClass("visible");
    $("body").toggleClass("cover-bg");
  });
});

// Botones de la aplicación