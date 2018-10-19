'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _salesController = require('../controllers/salesController');

var _salesController2 = _interopRequireDefault(_salesController);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var Router = _express2.default.Router();
// const ProductsController = require('../controllers/productsController');
// const express = require('express');


//add a Sales Record
Router.post('/sales', function (req, res) {
    _salesController2.default.addSale(req, res);
});

//Fetch all Sales 
Router.get('/sales', function (req, res) {
    _salesController2.default.fetchAllSales(req, res);
});

//Fetch a Single product
Router.get('/sales/:id', function (req, res) {
    _salesController2.default.findASale(req, res);
});

module.exports = Router;