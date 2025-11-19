const botonPais = document.getElementById("buscarPais");
const resultadoPais = document.getElementById("resultadoPais");

botonPais.addEventListener("click", () => {
    const nombrePais = document.getElementById("pais").value.trim();

    if (!nombrePais) {
        alert("Por favor ingresa el nombre del país.");
        return;
    }

    const url = `https://restcountries.com/v3.1/name/${nombrePais}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("País no encontrado");
            }
            return response.json();
        })
        .then(data => {
            resultadoPais.innerHTML = ""; // limpiar resultados anteriores
            data.forEach(pais => {
                const paisHTML = `
                    <div class="pais-card">
                        <h2>${pais.name.common}</h2>
                        <p><strong>Capital:</strong> ${pais.capital ? pais.capital[0] : "No disponible"}</p>
                        <p><strong>Población:</strong> ${pais.population.toLocaleString()}</p>
                        <img src="${pais.flags.svg}" alt="Bandera de ${pais.name.common}" width="200">
                    </div>
                `;
                resultadoPais.innerHTML += paisHTML;
            });
        })
        .catch(error => {
            resultadoPais.innerHTML = `<p style="color:red;">${error.message}</p>`;
        });
});
