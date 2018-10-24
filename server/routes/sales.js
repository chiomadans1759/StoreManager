// const express = require('express');
import express from 'express'
const Router = express.Router();
// const ProductsController = require('../controllers/productsController');
import SalesController from '../controllers/salesController';


//add a Sales Record
Router.post('/sales', SalesController.addSale);

//Fetch all Sales 
Router.get('/sales', SalesController.fetchAllSales);

//Fetch a Single product
Router.get('/sales/:id', SalesController.findASale) 
 

export default Router;




// // const express = require('express');
// import express from 'express'
// const Router = express.Router();
// // const ProductsController = require('../controllers/productsController');
// import SalesController from '../controllers/salesController';


// //add a Sales Record
// Router.post('/sales', (req,res)=>{  
//     SalesController.addSale(req,res);
// });

// //Fetch all Sales 
// Router.get('/sales', (req,res)=>{
//     SalesController.fetchAllSales(req,res);
// })

// //Fetch a Single product
// Router.get('/sales/:id', (req,res)=>{
//     SalesController.findASale(req,res);
// }) 
 

// module.exports = Router;