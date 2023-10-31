const inputNombre = document.querySelector("#input-nombre");
const inputApellido = document.querySelector("#input-apellido");
const inputEdad = document.querySelector("#input-edad");
const btnEnviar = document.querySelector(".btnEnviar");

btnEnviar.addEventListener("click", () => {
    const nombre = inputNombre.value;
    const apellido = inputApellido.value;
    const edad = inputEdad.value;
    
    let persona = {
        nombre: nombre,
        apellido: apellido,
        edad: edad
    }

    fetch("http://localhost:3000/personas", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(persona)
    })
})