document.addEventListener("DOMContentLoaded", () => {
    function preguntarNombre() {
        let nombre = prompt("Ingrese su nombre:");
        let apellido = prompt("Ingrese su apellido:");
        return `${nombre} ${apellido}`;
    }

    // Revisar si ya hay nombre en la sesión
    let nombreCompleto = sessionStorage.getItem("nombreCompleto");
    if (!nombreCompleto) {
        nombreCompleto = preguntarNombre();
        sessionStorage.setItem("nombreCompleto", nombreCompleto);
    }

    // Mostrar mensaje de bienvenida
    const mensajeBienvenida = document.getElementById("mensaje-bienvenida");
    mensajeBienvenida.textContent = `¡Bienvenido, ${nombreCompleto}!`;
});
