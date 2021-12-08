const config = require("./dbconfig")

class equipo{
    constructor(id,nombre, apellido, usuario, rol){
        this.id=id;
        this.nombre=nombre;
        this.apellido=apellido;
        this.usuario=usuario;
        this.rol=rol;
    }
}

module.exports = equipo;