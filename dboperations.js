//agregamos configuracion de la BD SQL server
var config = require ('./dbconfig');
//agregamos el modulo mssql que administrala BD SQL server
const sql = require('mssql');

//obtener alumnos desde sql a node

async function getAlumnos(){
    try{
        let pool = await sql.connect(config);
        let alumnos = await pool.request().query("select * from alumnos");
        return alumnos.recordsets;
    }catch(error){
        console.log(error);
    }
}

//obtener clientes desde sql a node

async function getClientes(){
    try{
        let pool = await sql.connect(config);
        let clientes = await pool.request().query("select * from clientes2");
        return clientes.recordsets;
    }catch(error){
        console.log(error);
    }
}
//obtener productos desde sql a node

async function getProductos(){
    try{
        let pool = await sql.connect(config);
        let productos = await pool.request().query("select * from productos");
        return productos.recordsets;
    }catch(error){
        console.log(error);
    }
}

//obtener categoria desde sql a node


async function getCategoria(){
    try{
        let pool = await sql.connect(config);
        let categoria = await pool.request().query("select * from categoria");
        return categoria.recordsets;
    }catch(error){
        console.log(error);
    }
}

//obtener comentarios desde sql a node


async function getComentarios(){
    try{
        let pool = await sql.connect(config);
        let comentarios = await pool.request().query("select * from comentarios");
        return comentarios.recordsets;
    }catch(error){
        console.log(error);
    }
}

//obtener chat desde sql a node


async function getChat(){
    try{
        let pool = await sql.connect(config);
        let chat = await pool.request().query("select * from chat");
        return chat.recordsets;
    }catch(error){
        console.log(error);
    }
}

//obtener equipo desde sql a node


async function getEquipo(){
    try{
        let pool = await sql.connect(config);
        let equipo = await pool.request().query("select * from equipo");
        return equipo.recordsets;
    }catch(error){
        console.log(error);
    }
}

//obtener locales desde sql a node


async function getLocales(){
    try{
        let pool = await sql.connect(config);
        let locales = await pool.request().query("select * from locales");
        return locales.recordsets;
    }catch(error){
        console.log(error);
    }
}

module.exports={
    getAlumnos : getAlumnos,
    getClientes:getClientes,
    getProductos:getProductos,
    getCategoria:getCategoria,
    getComentarios:getComentarios,
    getChat:getChat,
    getEquipo:getEquipo,
    getLocales:getLocales
    
}