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

//obtener cateogira desde sql a node


async function getCategoria(){
    try{
        let pool = await sql.connect(config);
        let categoria = await pool.request().query("select * from categoria");
        return categoria.recordsets;
    }catch(error){
        console.log(error);
    }
}

module.exports={
    getAlumnos : getAlumnos,
    getClientes:getClientes,
    getProductos:getProductos,
    getCategoria:getCategoria
}