const config = require("./dbconfig")

class comentarios{
    constructor(id,nombre,comentario,estado,fecha){
        this.id=id;
        this.nombre=nombre;
        this.comentario=comentario;
        this.estado = estado;
        this.fecha=fecha;
    }
}

module.exports = comentarios;