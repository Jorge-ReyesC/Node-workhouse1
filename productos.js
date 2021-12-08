const config = require("./dbconfig")

class productos{
    constructor(idproductos,nombreproductos,descripcionproductos,estadoproductos,tamanoproducto,valor){
        this.idproductos=idproductos;
        this.nombreproductos=nombreproductos;
        this.descripcionproductos=descripcionproductos;
        this.estadoproductos = estadoproductos;
        this.tamanoproducto=tamanoproducto;
        this.valor=valor;
    }
}

module.exports = productos;