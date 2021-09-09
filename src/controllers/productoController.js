const fs = require('fs');
const path = require('path');
const Products = require('../models/product')
function findAll(){
    let todosProductos = fs.readFileSync(path.join(__dirname, "../data/arrayProductos.json"))
    let data = JSON.parse(todosProductos)
    return data
}
const productoController=
        {
            detail: (req, res) => {
            let product = Products.findById(req.params.id)
            if(product){
                res.render('detail',{
                    product: product,
                });
            }else{
                res.redirect('/')
            }
        },
            producto1:(req,res)=>{
            res.render('home')
        },
            edit: (req, res) => {
            let product = Products.findById(req.params.id)
            res.render('productoform',{
                productToEdit: product
            });
        },
            upload: (req, res) => {
            let products_copy = Products.getAll().map(product => {
                    if (product.id == req.params.id) {
                        product.nombreJuego = req.body.nombreJuego
                        product.precio = req.body.precio
                        product.detalleJuego = req.body.detalleJuego
                        product.descuento = req.body.descuento
                    }
                    return product;
                });
    
            Products.modifiedAll(products_copy);
            res.redirect('/products/'+ req.params.id)
    
        },
            destroy: (req, res) => {
            let products_copy = Products.getAll().filter(elem => elem.id != req.params.id);
            Products.modifiedAll(products_copy);
            res.redirect('/');
        },
            entrarproducto: (req,res)=>{
            res.render("producto");       
        },  create: (req,res)=>{
            res.render("crearProducto")
        },
             storage: function(req, res){
                let arrayProductos = {
                name: req.body.name,
                price: req.body.price,
                genre: req.body.genre,
                desc: req.body.price,
                img: req.body.img
        }
<<<<<<< HEAD
        res.redirect("lista");
=======
        res.redirect("crearProducto");
>>>>>>> f946b0a154870448f6db28dfd8cfb3b7f70a6942
    
        },
            list: function(req, res){
        let productos = findAll();
        res.render("lista", {productos : productos})
        },
    }
        
module.exports= productoController;