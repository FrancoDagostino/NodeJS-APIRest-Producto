const {request,response} = require('express');

const Producto = require('../models/producto');



const getProducto = async (req = request, res = response) =>{

    const {limite} = req.query;
    const producto = await Producto.find({estado:true})
                    .limit(Number(limite));


    res.json({
        producto
    });

}

const postProducto = async (req = request, res = response) =>{
    
    const datos = req.body;

    const producto = new Producto(datos);


    await producto.save();
    res.json({
        msg:'prueba post',
        producto
    });
    
}
const putProducto = async (req = request, res = response) =>{
    
    const {id} = req.params;

    const {_id,estado,...resto} = req.body;

     const producto = await Producto.findByIdAndUpdate(id,resto);

     res.json(producto);
    
}
const deleteProducto = async(req = request, res = response) =>{
    const {id} = req.params;


    const producto = await Producto.findByIdAndUpdate(id,{estado:false});
    res.json({
        msg:'prueba delete',
        producto
    });

}


module.exports = {
    getProducto,
    postProducto,
    deleteProducto,
    putProducto
}