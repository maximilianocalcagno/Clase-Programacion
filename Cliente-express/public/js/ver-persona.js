const textoNombre = document.querySelector("#nombre");
const textoApellido = document.querySelector("#apellido");
const textoEdad = document.querySelector("#edad");

function cargarPersona(){
   let persona = fetch(`http://localhost:3000/personas/${localStorage.getItem("idpersona")}`)
   .then(res => {
       return res.json()
   })
   .then((data) => {
       return data
   })
   return persona;
}

function mostrarFormulario(){}