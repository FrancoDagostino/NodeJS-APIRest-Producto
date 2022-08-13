const {Schema,model} = require('mongoose');



const CategoriaSchema = Schema({
    categoria:{
        type:String,
        required:[true,'La categoria es obligatoria']
    }
});


module.exports = model('Categoria',CategoriaSchema)