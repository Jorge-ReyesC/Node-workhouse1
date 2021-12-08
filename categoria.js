const config = require("./dbconfig")

class categoria{
    constructor(idcategoria,nombrecategoria,descripcioncategoria,estadocategoria,idproductos){
        this.idcategoria=idcategoria;
        this.nombrecategoria=nombrecategoria;
        this.descripcioncategoria=descripcioncategoria;
        this.estadoproductos = estadoproductos;
        this.estadocategoria=estadocategoria;
        this.idproductos=idproductos;
    }
}

module.exports = categoria;