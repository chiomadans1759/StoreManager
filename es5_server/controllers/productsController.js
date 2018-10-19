'use strict';

var products = {};
var product_id = 1;
//products will be an array of product objects

module.exports = {

    //Get all products from the products hash  
    fetchAllProducts: function fetchAllProducts(req, res) {
        res.json(products);
    },

    //Add a product to the products hash 
    addProduct: function addProduct(req, res) {

        req.body.id = product_id;
        var productId = product_id++;

        products[productId] = req.body;

        res.json({ data: products, status: 'success' }, 200);
    },

    //Find a product from the products hash using the productId
    findAProduct: function findAProduct(req, res) {

        var productId = req.params.id;
        if (products[productId]) {
            res.json(products[productId]);
        }

        res.json({
            message: ' There is no product with the id of ' + productId,
            error: true
        });
    },

    //Update a product in the products hash 
    UpdateAProduct: function UpdateAProduct(req, res) {

        var productId = req.params.id;
        if (products[productId]) {
            res.send(products[productId]);
        }

        res.send({
            message: 'product not found having the id of ' + productId,
            error: true
        });
    },
    //Delete a product from the products hash using the productId
    deleteAProduct: function deleteAProduct(req, res) {
        var productId = req.params.id;
        if (products[productId]) {
            delete products[productId];
            res.send('product with the id of ' + productId + ' deleted successfully');
        }

        res.send({

            message: 'there is no product with id of ' + productId,
            error: true

        });
    }
};