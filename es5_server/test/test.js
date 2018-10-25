'use strict';

var _app = require('../app');

var _app2 = _interopRequireDefault(_app);

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiHttp = require('chai-http');

var _chaiHttp2 = _interopRequireDefault(_chaiHttp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var should = _chai2.default.should();

//link chai with chaiHttp
_chai2.default.use(_chaiHttp2.default);

describe('Add New Product', function () {
    it('It should create a new product', function (done) {
        _chai2.default.request(_app2.default).post('/api/v1/products').end(function (err, res) {
            res.should.have.status(422);
            res.body.should.be.a('object');
            done();
        });
    });
    it('It should create a new product with all the properties', function (done) {
        _chai2.default.request(_app2.default).post('/api/v1/products').send({
            name: 'phone',
            price: 20,
            item: 2
        }).end(function (err, res) {
            res.body.product.should.have.property('name');
            res.body.product.should.have.property('price');
            res.body.product.should.have.property('item');
            res.should.have.status(200);
            done();
        });
    });
});

describe('GET /products', function () {
    it('should return all products', function (done) {
        _chai2.default.request(_app2.default).get('/api/v1/products').end(function (err, res) {
            res.should.have.status(200);
            res.body.should.be.a('object');
            done();
        });
    });
});

describe('Fetch A single Product', function () {
    it('It should fetch a single product', function (done) {
        _chai2.default.request(_app2.default).get('/api/v1/products/1').end(function (err, res) {
            res.should.have.status(200);
            res.body.should.be.a('object');
            console.log(res.body);
            done();
        });
    });
});

describe('Update A single Product', function () {
    it('It should update a single product', function (done) {
        _chai2.default.request(_app2.default).put('/api/v1/products/1').send({
            name: 'Bingo',
            price: 50,
            item: 2
        }).end(function (err, res) {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.updatedAProduct.should.have.property('id').eql('1');;
            res.body.updatedAProduct.should.have.property('item');
            res.body.updatedAProduct.should.have.property('name');
            res.body.updatedAProduct.should.have.property('price').eql(50);
            done();
        });
    });
});

describe('Delete A single Product', function () {
    it('It should Delete a single product', function (done) {
        _chai2.default.request(_app2.default).delete('/api/v1/products/1').end(function (err, res) {
            res.should.have.status(200);
            res.body.should.be.a('object');
            done();
        });
    });
});

//TESTING FOR SALES FIELDS

describe('Add New Sales Record', function () {
    it('It should create a new sales record', function (done) {
        _chai2.default.request(_app2.default).post('/api/v1/sales').end(function (err, res) {
            res.should.have.status(422);
            res.body.should.be.a('object');
            done();
        });
    });
    it('It should create a new sales record with all the properties', function (done) {
        _chai2.default.request(_app2.default).post('/api/v1/sales').send({
            name: 'phone',
            price: 20,
            item: 2
        }).end(function (err, res) {
            res.body.sale.should.have.property('name');
            res.body.sale.should.have.property('price');
            res.body.sale.should.have.property('item');
            res.should.have.status(200);
            done();
        });
    });
});

describe('All Sales Record', function () {
    it('should return all sales records', function (done) {
        _chai2.default.request(_app2.default).get('/api/v1/sales').end(function (err, res) {
            res.should.have.status(200);
            res.body.should.be.a('object');
            done();
        });
    });
});

describe('Fetch A single Sales Record', function () {
    it('It should fetch a single Sales Record', function (done) {
        _chai2.default.request(_app2.default).get('/api/v1/sales/1').end(function (err, res) {
            res.should.have.status(200);
            res.body.should.be.a('object');
            console.log(res.body);
            done();
        });
    });
});