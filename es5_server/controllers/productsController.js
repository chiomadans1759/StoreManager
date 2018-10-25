'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _check = require('express-validator/check');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var products = [];
// Products will be an array of Products objects

var ProductsController = function () {
  function ProductsController() {
    _classCallCheck(this, ProductsController);
  }

  _createClass(ProductsController, null, [{
    key: 'fetchAllProducts',


    // Get all Products
    value: function fetchAllProducts(req, res) {
      return res.status(200).json({
        status: 'Success',
        products: products
      });
    }

    // Add a Products to the products hash

  }, {
    key: 'addProduct',
    value: function addProduct(req, res) {
      var product = {};
      var productId = products.length + 1;

      product.id = productId;
      product.name = req.body.name;
      product.price = req.body.price;
      product.item = req.body.item;

      var errors = (0, _check.validationResult)(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({
          status: 'Failed',
          message: errors.array()[0].msg + ' ' + errors.array()[0].value + ' provided for ' + errors.array()[0].param
        });
      }

      for (var i = 0; i < products.length; i += 1) {
        if (product.name === products[i].name) {
          return res.status(409).json({
            message: 'A product with name  ' + product.name + ' already exist'
          });
        }
      }

      products.push(product);
      return res.status(200).json({
        message: 'New Product successfully added!',
        status: 'Success',
        product: products[productId - 1]
      });
    }

    // Find a single product from the products hash using the saleId

  }, {
    key: 'findAProduct',
    value: function findAProduct(req, res) {
      var productId = req.params.id;
      if (products[productId - 1]) {
        return res.status(200).json(products[productId - 1]);
      }

      return res.status(404).json({
        message: ' There is no product with the id of ' + productId,
        error: true
      });
    }

    // Find a single product from the products hash using the saleId

  }, {
    key: 'UpdateAProduct',
    value: function UpdateAProduct(req, res) {
      var productId = req.params.id;
      if (products[productId - 1]) {
        var newProoductDetails = {
          id: productId,
          name: req.body.name,
          price: req.body.price,
          item: req.body.item
        };

        products[productId - 1] = newProoductDetails;
        return res.status(200).json({
          status: 'Success',
          updatedAProduct: products[productId - 1]
        });
      }

      return res.status(404).json({
        message: ' There is no product with the id of ' + productId,
        error: true
      });
    }
  }, {
    key: 'deleteAProduct',
    value: function deleteAProduct(req, res) {
      var productId = req.params.id;
      if (products[productId - 1]) {
        products.splice(productId - 1, 1);
        return res.status(200).json({
          status: 'Success',
          message: 'Product with the id of ' + productId + ' deleted successfully'
        });
      }

      return res.status(404).json({
        message: ' There is no product with the id of ' + productId,
        error: true
      });
    }
  }]);

  return ProductsController;
}();

exports.default = ProductsController;