const express= require ("express");
const router= express.Router();
const productoController= require ("../controllers/productoController.js");
const guestMiddleware = require("../middlewares/guestMiddleware.js");
const authMiddleware = require("../middlewares/authMiddleware") 
const registerController= require ("../controllers/registerController.js")
const validateCreate =[
    body("name").notEmpty().isLenght({min: 5}).withMessage("Ingresar un nombre valido"),
    body("desc").isLenght({min: 20}).withMessage("Ingresar una descripcion de al menos 20 caracteres"),
];


<<<<<<< HEAD
router.get("/lista",productoController.list)
router.get("/producto",productoController.entrarproducto);
router.get("/create",authMiddleware, productoController.create);
router.post("/create", productoController.storage);
router.get('/:id/', productoController.detail);
router.get('/',productoController.producto1)
router.get('/:id/edit/',authMiddleware, productoController.edit);
router.put('/:id/',productoController.upload);
router.delete('/:id/delete/', productoController.destroy);
=======
router.get ("/lista",productoController.list)
router.get ("/producto",productoController.entrarproducto);
router.get ("/create",authMiddleware, productoController.create);
router.post ("/create",validateCreate,productoController.storage);
router.get ('/:id/', productoController.detail);
router.get ('/',productoController.producto1)
router.get ('/:id/edit/',authMiddleware, productoController.edit);
router.put ('/:id/',productoController.upload);
router.delete ('/:id/delete/', productoController.destroy);
>>>>>>> 66bee905b840bb0b81116b63b49c9776a4d7bcc9


module.exports = router;