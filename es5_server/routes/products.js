'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _productsController = require('../controllers/productsController');

var _productsController2 = _interopRequireDefault(_productsController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Router = _express2.default.Router();
// const ProductsController = require('../controllers/productsController');
// const express = require('express');


//add a product 
Router.post('/products', _productsController2.default.addProduct);

//Fetch all products 
Router.get('/products', _productsController2.default.fetchAllProducts);

//Fetch a Single product
Router.get('/products/:id', _productsController2.default.findAProduct);

//Update a Single product
Router.put('/products/:id', _productsController2.default.UpdateAProduct);

//Delete a Single product
Router.delete('/products/:id', _productsController2.default.deleteAProduct);

exports.default = Router;

// // const express = require('express');
// import express from 'express'
// const Router = express.Router();
// // const ProductsController = require('../controllers/productsController');
// import ProductsController from '../controllers/productsController';


// //add a product 
// Router.post('/products', (req,res)=>{  
//     ProductsController.addProduct(req,res);
// });

// //Fetch all products 
// Router.get('/products', (req,res)=>{
//     ProductsController.fetchAllProducts(req,res);
// })

// //Fetch a product
// Router.get('/products/:id', (req,res)=>{
//     ProductsController.findAProduct(req,res);
// }) 

// //Update A product  
// Router.put('/products/:id', (req,res)=>{
//     ProductsController.UpdateAProduct(req,res);
// })

// //Delete A product  
// Router.delete('/products/:id', (req,res)=>{
//     ProductsController.deleteAProduct(req,res);
// })

// module.exports = Router;