const routerPersonas = require('express').Router();
const {verPersonas, crearPersona, eliminarPersona} = require('../controllers/personas');

routerPersonas.get('/', verPersonas);
routerPersonas.post('/', crearPersona);
routerPersonas.delete('/:id', eliminarPersona);

module.exports = routerPersonas;
