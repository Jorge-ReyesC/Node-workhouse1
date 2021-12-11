var db = require ('./dboperations');
var Alumno = require ('./alumno');
var clientes = require ('./clientes');
var productos = require ('./productos');
var categoria = require('./productos');
var comentarios = require('./comentarios');
var chat = require('./chat');
var equipo = require('./equipo');
var locales = require('./locales');


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

async function obtenerComentarios(request,response){
    var resultado = await dboperations.getComentarios();
    response.send(resultado);    
 }
app.get('/comentarios', obtenerComentarios)

async function obtenerChat(request,response){
    var resultado = await dboperations.getChat();
    response.send(resultado);    
 }
app.get('/chat', obtenerChat)

async function obtenerEquipo(request,response){
    var resultado = await dboperations.getEquipo();
    response.send(resultado);    
 }
app.get('/equipo', obtenerEquipo)

async function obtenerLocales(request,response){
    var resultado = await dboperations.getLocales();
    response.send(resultado);    
 }
app.get('/locales', obtenerLocales)




var port = process.env.PORT || 8091;
app.listen(port);
console.log('La api funciona y esta en el puerto: '+ port);