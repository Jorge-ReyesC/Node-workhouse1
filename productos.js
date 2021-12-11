const config = require("./dbconfig")

class productos{
    constructor(idproductos,nombreproductos,descripcionproductos,estadoproductos,tamanoproducto,valor,producto1){
        this.idproductos=idproductos;
        this.nombreproductos=nombreproductos;
        this.descripcionproductos=descripcionproductos;
        this.estadoproductos = estadoproductos;
        this.tamanoproducto=tamanoproducto;
        this.valor=valor;
        this.producto1=producto1;
    }
}

module.exports = productos;