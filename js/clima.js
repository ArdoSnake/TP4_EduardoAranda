// RECUERDA: reemplaza "TU_API_KEY" con tu clave de OpenWeather
const API_KEY = "2cac7394f9fcc58ca6035f87b25767a7";  
// El API KEY SE PONEEE AHIIIII Aleluyaaa
const botonBuscar = document.getElementById("buscar");
const resultado = document.getElementById("resultado");

botonBuscar.addEventListener("click", () => {
    const ciudad = document.getElementById("ciudad").value.trim();

    if (!ciudad) {
        alert("Por favor ingresa una ciudad.");
        return;
    }

    // URL de la API
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API_KEY}&units=metric&lang=es`;
    
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Ciudad no encontrada");
            }
            return response.json();
        })
        .then(data => {
            // Construimos el resultado
            resultado.innerHTML = `
                <h2>Clima en ${data.name}</h2>
                <p><strong>Temperatura:</strong> ${data.main.temp} °C</p>
                <p><strong>Humedad:</strong> ${data.main.humidity}%</p>
                <p><strong>Descripción:</strong> ${data.weather[0].description}</p>
            `;
        })
        .catch(error => {
            resultado.innerHTML = `<p style="color:red;">${error.message}</p>`;
        });
});
