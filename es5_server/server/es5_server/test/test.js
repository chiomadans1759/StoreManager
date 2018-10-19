'use strict';

var _app = require('../app');

var _app2 = _interopRequireDefault(_app);

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiHttp = require('chai-http');

var _chaiHttp2 = _interopRequireDefault(_chaiHttp);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var should = _chai2.default.should();

//link chai with chaiHttp
_chai2.default.use(_chaiHttp2.default);

describe('Add New Product', function () {
    it('It should create a new product', function (done) {
        _chai2.default.request(_app2.default).post('/api/v1/products').end(function (err, res) {
            res.should.have.status(200);
            res.body.should.be.a('object');
            // res.body.should.have.property('item');
            // res.body.should.have.property('name');
            // res.body.should.have.property('price');
            // res.body.should.have.property('item');
            // res.body.should.have.property('name');
            // res.body.should.have.property('price'); 
            done();
        });
    });
});

describe('GET /products', function () {
    it('should return all products', function (done) {
        _chai2.default.request(_app2.default).get('/api/v1/products').end(function (err, res) {
            res.should.have.status(200);
            res.body.should.be.a('object');
            // res.body.length.should.be.eql(0);
            done();
        });
    });
});

describe('Fetch A single Product', function () {
    it('It should fetch a single product', function (done) {
        _chai2.default.request(_app2.default).get('/api/v1/products/:id').end(function (err, res) {
            res.should.have.status(200);
            res.body.should.be.a('object');
            // res.body.should.have.property('id').eql(productId);;
            // res.body.should.have.property('item');
            // res.body.should.have.property('name');
            // res.body.should.have.property('price');
            // res.body.should.have.property('item');
            // res.body.should.have.property('name');
            // res.body.should.have.property('price'); 
            done();
        });
    });
});

describe('Update A single Product', function () {
    it('It should update a single product', function (done) {
        _chai2.default.request(_app2.default).put('/api/v1/products/:id').end(function (err, res) {
            res.should.have.status(200);
            res.body.should.be.a('object');
            // res.body.should.have.property('id').eql(productId);;
            // res.body.should.have.property('item');
            // res.body.should.have.property('name');
            // res.body.should.have.property('price');
            // res.body.should.have.property('item');
            // res.body.should.have.property('name');
            // res.body.should.have.property('price'); 
            done();
        });
    });
});

describe('Delete A single Product', function () {
    it('It should Delete a single product', function (done) {
        _chai2.default.request(_app2.default).delete('/api/v1/products/:id').end(function (err, res) {
            res.should.have.status(200);
            res.body.should.be.a('object');
            // res.body.should.have.property('id').eql(productId);;
            // res.body.should.have.property('item');
            // res.body.should.have.property('name');
            // res.body.should.have.property('price');
            // res.body.should.have.property('item');
            // res.body.should.have.property('name');
            // res.body.should.have.property('price'); 
            done();
        });
    });
});

//TESTING FOR SALES FIELDS

describe('Post Sales records', function () {
    it('It should post sales records', function (done) {
        _chai2.default.request(_app2.default).post('/api/v1/products').end(function (err, res) {
            res.should.have.status(200);
            res.body.should.be.a('object');
            // res.body.should.have.property('id').eql(productId);;
            // res.body.should.have.property('item');
            // res.body.should.have.property('name');
            // res.body.should.have.property('price');
            // res.body.should.have.property('item');
            // res.body.should.have.property('name');
            // res.body.should.have.property('price'); 
            done();
        });
    });
});

describe('All Sales records', function () {
    it('It should Fetch al sales records', function (done) {
        _chai2.default.request(_app2.default).get('/api/v1/sales').end(function (err, res) {
            res.should.have.status(200);
            res.body.should.be.a('object');
            // res.body.should.have.property('id').eql(productId);;
            // res.body.should.have.property('item');
            // res.body.should.have.property('name');
            // res.body.should.have.property('price');
            // res.body.should.have.property('item');
            // res.body.should.have.property('name');
            // res.body.should.have.property('price'); 
            done();
        });
    });
});

describe('Fetch a single salees record', function () {
    it('It should Fetch a single sales record', function (done) {
        _chai2.default.request(_app2.default).get('/api/v1/sales/:id').end(function (err, res) {
            res.should.have.status(200);
            res.body.should.be.a('object');
            // res.body.should.have.property('id').eql(productId);;
            // res.body.should.have.property('item');
            // res.body.should.have.property('name');
            // res.body.should.have.property('price');
            // res.body.should.have.property('item');
            // res.body.should.have.property('name');
            // res.body.should.have.property('price'); 
            done();
        });
    });
});