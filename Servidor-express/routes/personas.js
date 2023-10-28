const routerPersonas = require('express').Router();
const {verPersonas, crearPersona, eliminarPersona, verPersona, editarPersona,} = require('../controllers/personas');

routerPersonas.get('/', verPersonas);
routerPersonas.post('/', crearPersona);
routerPersonas.delete('/:id', eliminarPersona);
routerPersonas.get('/:id', verPersona);
routerPersonas.put('/:id', editarPersona);

module.exports = routerPersonas;
