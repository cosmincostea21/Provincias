fetch("provincias.json")
    .then(response => response.json())
    .then(data => {
        const comunidades = data.ComunidadesAutonomas;
        const regiones = document.getElementById("regiones");

        // Llenar el select de regiones
        comunidades.forEach(element => {
            regiones.innerHTML += `<option value="${element.nombre}">${element.nombre}</option>`;
        });

        // Escuchar cambios en el select de regiones
        regiones.addEventListener("change", () => {
            const provinciasSelect = document.getElementById("provincias");
            const opcion = regiones.value;

            // Limpiar las opciones previas de provincias
            provinciasSelect.innerHTML = "";

            // Buscar la comunidad seleccionada y llenar el select de provincias
            const comunidadSeleccionada = comunidades.find(comunidad => comunidad.nombre === opcion); 
            // Devuelve un booleano (TRUE) si el valor se encuentra en el array
            if (comunidadSeleccionada) {
                comunidadSeleccionada.provincias.forEach(provincia => {
                    const option = document.createElement("option");
                    option.innerHTML = provincia.nombre;
                    provinciasSelect.appendChild(option);
                });
            }
        });
    })
