'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _productsController = require('../controllers/productsController');

var _productsController2 = _interopRequireDefault(_productsController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Router = _express2.default.Router();
// const ProductsController = require('../controllers/productsController');
// const express = require('express');


//add a product 
Router.post('/products', function (req, res) {
    _productsController2.default.addProduct(req, res);
});

//Fetch all products 
Router.get('/products', function (req, res) {
    _productsController2.default.fetchAllProducts(req, res);
});

//Fetch a product
Router.get('/products/:id', function (req, res) {
    _productsController2.default.findAProduct(req, res);
});

//Update A product  
Router.put('/products/:id', function (req, res) {
    _productsController2.default.UpdateAProduct(req, res);
});

//Delete A product  
Router.delete('/products/:id', function (req, res) {
    _productsController2.default.deleteAProduct(req, res);
});

module.exports = Router;