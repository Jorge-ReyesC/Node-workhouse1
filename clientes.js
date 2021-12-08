const config = require("./dbconfig")

class clientes{
    constructor(id,nombre,appelido,sueldo){
        this.id=id;
        this.nombre=nombre;
        this.appelido=appelido;
        this.sueldo=sueldo;
    }
}

module.exports = clientes;