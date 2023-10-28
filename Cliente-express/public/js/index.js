const tbodyPersonas = document.querySelector("#tbody-personas");

async function cargarPersonas(){
    let personas = "";
    await fetch("http://localhost:3000/personas")
    .then(res => {
        return res.json()
    })
    .then((data) => {
        personas = data;
});
    return personas;
}

function tablaPersonas(){
    tbodyPersonas.innerHTML = "";
    cargarPersonas().then(personas => {
        for(let i = 0; i < personas.length; i++){
            tbodyPersonas.innerHTML += 
            `
                    <tr>
                        <td>${personas[i].nombre}</td>
                        <td>${personas[i].apellido}</td>
                        <td>${personas[i].edad}</td>
                        <td><button class="btn-ver">Ver</button><button class="btn-eliminar">Eliminar</button></td>
                    </tr>
            `
        }
        btnVer(personas);
        btnEliminar(personas);
    })
    return "";
}

function btnVer(personas){
    const btnVer = document.querySelectorAll(".btn-ver");
    for(let i = 0; i < btnVer.length; i++){
        btnVer[i].addEventListener("click", () => {
            localStorage.setItem("idpersona", personas[i]._id);
            window.location.replace("ver-persona.html");
            //console.log(localStorage.getItem("idpersona"));
        })
    }
}

function btnEliminar(personas){
    const btnEliminar = document.querySelectorAll(".btn-eliminar");
    for (let i = 0; i < btnEliminar.length; i++){
        btnEliminar[i].addEventListener("click", () => {
            fetch(`http://localhost:3000/personas/${personas[i]._id}`, {
                method: "DELETE",
            })
            .then(res => {
                localStorage.removeItem("idpersona");
                window.location.reload();
            })
        })
    }
}

cargarPersonas();
tablaPersonas();