fetch("provincias.json").then(response=> response.json()).then
(ArrayComunidades=> {
    ArrayComunidades.ComunidadesAutonomas.forEach(element => {
        let regiones = document.getElementById("regiones");
        regiones.innerHTML += `<option value="${element.id}">${element.nombre}</option>`;
    });
});