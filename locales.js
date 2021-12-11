const config = require("./dbconfig")

class locales{
    constructor(id,nombre, direccion, region, local1){
        this.id=id;
        this.nombre=nombre;
        this.direccion=direccion;
        this.region=region;
        this.local1=local1;
    }
}

module.exports = locales;