const e = require('express');
const sequelize = db.sequelize;
const fs = require('fs');
const path = require('path');
const Producto = require('../../models/productos')
let db= require("../../../database/models");

const productoController =
            {detail: (req, res) => {
                    db.Producto.findByPk(req.params.id)
                    .then(producto => {
                        res
                        .status(status)
                        .json({data: producto, status:status})
                        })
                        .catch(error => 
                        {console.log(error)})     
            },list:(req, res) => {
                    db.Producto.findAll({
                        include:[{association:"generos"}]})
                        .then(producto => {
                        return res
                        .json()
                        })
                        .catch(error => 
                        {console.log(error)})
                }
            }
module.exports= productoController;