'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _check = require('express-validator/check');

var _productsController = require('../controllers/productsController');

var _productsController2 = _interopRequireDefault(_productsController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Router = _express2.default.Router(); // const express = require('express');


//add a product 
Router.post('/products', [(0, _check.check)('name').isAlpha(), (0, _check.check)('price').isNumeric(), (0, _check.check)('item').isAlpha()], _productsController2.default.addProduct);

//Fetch all products 
Router.get('/products', _productsController2.default.fetchAllProducts);

//Fetch a Single product
Router.get('/products/:id', _productsController2.default.findAProduct);

//Update a Single product
Router.put('/products/:id', _productsController2.default.UpdateAProduct);

//Delete a Single product
Router.delete('/products/:id', _productsController2.default.deleteAProduct);

exports.default = Router;