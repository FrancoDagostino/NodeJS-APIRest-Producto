
const Producto = require('../models/producto');

const Categoria = require('../models/categoria');


const validarNombreProducto = async (nombre = '') => {

    const existeNombreProducto = await Producto.findOne({nombre});
    
    if(existeNombreProducto) throw new Error(`El nombre del producto ${nombre} ya se encuentra registrado`)
}


const validarCategoria = async (categoria = '') => {
    
    const exiteCategoria = await Categoria.findOne({categoria});

    if(!exiteCategoria) throw new Error(`La categoria ${categoria} no se encuentra registrada`);
}

const existeProductoPorId = async (id) => {
    
    const existeProducto = await Producto.findById(id);

    if(!existeProducto){
        throw new Error(`El id ${id} no existe` )
    }
}


module.exports = {
    validarNombreProducto,
    validarCategoria,
    existeProductoPorId
}