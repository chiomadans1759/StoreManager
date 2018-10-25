// const express = require('express');
import express from 'express'
const Router = express.Router();
// const ProductsController = require('../controllers/productsController');
import ProductsController from '../controllers/productsController';


//add a product 
Router.post('/products', ProductsController.addProduct);

//Fetch all products 
Router.get('/products', ProductsController.fetchAllProducts);

//Fetch a Single product
Router.get('/products/:id', ProductsController.findAProduct);

//Update a Single product
Router.put('/products/:id', ProductsController.UpdateAProduct);

//Delete a Single product
Router.delete('/products/:id', ProductsController.deleteAProduct);
 

export default Router;


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