const {Router} = require('express');
const { check } = require('express-validator');
const { getProducto, 
        postProducto, 
        putProducto, 
        deleteProducto } = require('../controllers/producto');
const { validarNombreProducto, validarCategoria,existeProductoPorId } = require('../helpers/db-validator');
const { validarCampos } = require('../middlewares/validar-campos');


const router = Router();

router.get('/',getProducto);

router.post('/',[
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('nombre').custom(validarNombreProducto),
    check('precio','El precio es obligatorio').not().isEmpty(),
    check('precio','El precio debe ser un número').isNumeric(),
    check('stock','El stock es obligatorio').not().isEmpty(),
    check('stock','El stock debe ser un número').isNumeric(),
    check('categoria','La categoria es obligatoria').not().isEmpty(),
    check('categoria').custom(validarCategoria),
    validarCampos
],postProducto);

router.put('/:id',[
    check('id','No es un ID valido').isMongoId(),
    check('id').custom(existeProductoPorId),
    check('nombre').custom(validarNombreProducto),
    check('precio','El precio debe ser un número').isNumeric(),
    check('stock','El stock debe ser un número').isNumeric(),
    check('categoria').custom(validarCategoria),
    validarCampos
],putProducto);

router.delete('/:id',[
    check('id','No es un ID valido').isMongoId(),
    check('id').custom(existeProductoPorId),
    validarCampos
],deleteProducto);

module.exports = router;