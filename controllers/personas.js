const Persona = require('../models/persona');

async function verPersonas(req, res) {
    const personas = await Persona.find();
    let personasHtml = "";
    for (let i = 0; i < personas.length; i++) {
        personasHtml += `
        <div>
            <p>Nombre: ${personas[i].nombre}</p>
            <p>Apellido: ${personas[i].apellido}</p>
            <p>Edad: ${personas[i].edad}</p>
        </div>
        `
    }
    res.json(personas);    
};

async function crearPersona(req, res){
    const persona = new Persona({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        edad: req.body.edad,
    });
    await persona.save();
    res.json("persona creada");
}

async function eliminarPersona(req, res){
    await Persona.findByIdAndDelete(req.params.id);
    res.json("Persona eliminada");
}

module.exports = {
    verPersonas, crearPersona, eliminarPersona
}