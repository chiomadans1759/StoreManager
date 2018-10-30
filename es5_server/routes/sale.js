'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _saleController = require('../controllers/saleController');

var _saleController2 = _interopRequireDefault(_saleController);

var _sale = require('../middleware/sale');

var _sale2 = _interopRequireDefault(_sale);

var _check = require('express-validator/check');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (server) {

  //add a product 
  server.post('/sale', [(0, _check.check)('name').isAlpha(), (0, _check.check)('price').isNumeric(), (0, _check.check)('item').isAlpha()], sale, new SaleController().addSale);

  //Fetch all products 
  server.get('/sale', new SaleController().getAllSales);

  //Fetch a Single product
  server.get('/sale/:id', new SaleController().getASale);
};