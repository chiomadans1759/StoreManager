'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _check = require('express-validator/check');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var sales = [];
//Sales will be an array of Sales objects

var SalesController = function () {
    function SalesController() {
        _classCallCheck(this, SalesController);
    }

    _createClass(SalesController, null, [{
        key: 'fetchAllSales',


        //Get all Sales Record  
        value: function fetchAllSales(req, res) {
            return res.status(200).json({
                status: 'Success',
                sales: sales
            });
        }

        //Add a Sale Record to the sales hash

    }, {
        key: 'addSale',
        value: function addSale(req, res) {
            var sale = {};
            var saleId = sales.length + 1;
            sale.id = saleId;
            sale.name = req.body.name;
            sale.price = req.body.price;
            sale.item = req.body.item;

            var errors = (0, _check.validationResult)(req);
            if (!errors.isEmpty()) {
                return res.status(422).json({
                    status: 'Failed',
                    message: errors.array()[0].msg + ' ' + errors.array()[0].value + ' provided for ' + errors.array()[0].param
                });
            }

            for (var i = 0; i < sales.length; i++) {
                if (sale.name === sales[i].name) {
                    return res.status(409).json({
                        message: 'A sales record with name  ' + sale.name + ' already exist'
                    });
                }
            }

            sales.push(sale);
            return res.status(200).json(_defineProperty({
                message: 'New Sales Record successfully created!',
                status: 'Success',
                sale: sales[saleId - 1]
            }, 'sale', sale));
        }

        //Find a Sale Record from the sales hash using the saleId

    }, {
        key: 'findASale',
        value: function findASale(req, res) {

            var saleId = req.params.id;
            if (sales[saleId - 1]) {
                return res.status(200).json(sales[saleId - 1]);
            }

            return res.status(404).json({
                message: ' There is no sale record with the id of ' + saleId,
                error: true
            });
        }
    }]);

    return SalesController;
}();

exports.default = SalesController;