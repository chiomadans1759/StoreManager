'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _products = require('./routes/products');

var _products2 = _interopRequireDefault(_products);

var _sales = require('./routes/sales');

var _sales2 = _interopRequireDefault(_sales);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var app = (0, _express2.default)();

var router = _express2.default.Router();

//to avoid cors issue 
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//use the body parser middleware
app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_bodyParser2.default.json());

//define routes 
app.get('/', function (req, res) {
    res.json({ name: 'chioma', role: 'backend engineer' });
});

app.use('/api/v1', _products2.default);
app.use('/api/v1', _sales2.default);

//get the port from the process env 
var PORT = 9000;
app.listen(PORT, function () {
    console.log('server is listening for requests at port ' + PORT);
});

module.exports = app; //for testing