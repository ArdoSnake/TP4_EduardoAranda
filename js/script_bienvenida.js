// Revisar si ya hay nombre guardado
let nombreCompleto = localStorage.getItem("nombreCompleto");

if (!nombreCompleto) {
    let nombre = prompt("Ingrese su nombre:");
    let apellido = prompt("Ingrese su apellido:");
    nombreCompleto = `${nombre} ${apellido}`;
    localStorage.setItem("nombreCompleto", nombreCompleto);
}

// Mostrar mensaje de bienvenida en la página
const mensajeBienvenida = document.getElementById("mensaje-bienvenida");
mensajeBienvenida.textContent = `¡Bienvenido, ${nombreCompleto}!`;
