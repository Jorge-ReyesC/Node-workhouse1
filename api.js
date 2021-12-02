var db = require ('./dboperations');
var Alumno = require ('./alumno');
var clientes = require ('./clientes');
var productos = require ('./productos');
var categoria = require('./productos');

const dboperations = require ('./dboperations');


var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const { request, response } = require('express');
var app =express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api',router);


router.use((request,response,next) => {
    console.log('Server listo?');
    next();
})

async function obtenerAlumnos(request,response){
    var resultado = await dboperations.getAlumnos();
    response.send(resultado);    
 }
app.get('/alumnos', obtenerAlumnos)

async function obtenerClientes(request,response){
    var resultado = await dboperations.getClientes();
    response.send(resultado);    
 }
app.get('/clientes', obtenerClientes)

async function obtenerProductos(request,response){
    var resultado = await dboperations.getProductos();
    response.send(resultado);    
 }
app.get('/productos', obtenerProductos)

async function obtenerCategoria(request,response){
    var resultado = await dboperations.getCategoria();
    response.send(resultado);    
 }
app.get('/categoria', obtenerCategoria)

var port = process.env.PORT || 8091;
app.listen(port);
console.log('La api funciona y esta en el puerto'+ port);