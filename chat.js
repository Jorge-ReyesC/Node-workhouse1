const config = require("./dbconfig")

class chat{
    constructor(id,nombres_apelidos,estado){
        this.id=id;
        this.nombres_apelidos=nombres_apelidos;
        this.estado=estado;
    }
}

module.exports = chat;