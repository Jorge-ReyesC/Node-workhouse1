const config = require("./dbconfig")

class locales{
    constructor(id,nombre, direccion, region){
        this.id=id;
        this.nombre=nombre;
        this.direccion=direccion;
        this.region=region;
    }
}

module.exports = locales;