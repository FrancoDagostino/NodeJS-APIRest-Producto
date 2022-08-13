const {Schema,model} = require('mongoose');



const productoSchema = Schema({
    nombre:{
        type: String,
        required:[true,'el nombre es obligatorio'],
        uniqued:true
    },

    precio:{
        type:Number,
        required:[true,'el precio es obligatorio']
    },

    img:{
        type:String
    },

    stock:{
        type:Number,
        required:[true,'el stock es obligatorio']
    },

    estado:{
        type:Boolean,
        default:true
    },
    categoria:{
        type:String,
        required:[true,'La categoria es obligatoria']
    }
})

productoSchema.methods.toJSON = function () {
    const{__v,...producto} = this.toObject();
    return producto;
}

module.exports = model('Producto',productoSchema);