document.addEventListener("DOMContentLoaded", () => {
    function preguntarNombre() {
        let nombre = prompt("Ingrese su nombre:");
        let apellido = prompt("Ingrese su apellido:");
        return `${nombre} ${apellido}`;
    }

    // Pedir nombre siempre al cargar
    const nombreCompleto = preguntarNombre();

    // Mostrar mensaje de bienvenida
    const mensajeBienvenida = document.getElementById("mensaje-bienvenida");
    mensajeBienvenida.textContent = `¡Bienvenido, ${nombreCompleto}!`;
});
