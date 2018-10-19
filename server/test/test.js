import app from '../app';
import chai from 'chai';
import chaiHttp from 'chai-http';

let should = chai.should(); 
 
//link chai with chaiHttp
chai.use(chaiHttp);


describe('Add New Product', () => {
    it('It should create a new product', (done) => {
      chai.request(app)
          .post('/api/v1/products') 
          .end((err, res) => {
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

describe('GET /products', () => {
    it('should return all products', done => {
        chai.request(app)
            .get('/api/v1/products')
            .end((err,res)=>{
                res.should.have.status(200)
                res.body.should.be.a('object')
                // res.body.length.should.be.eql(0);
                done();
            })
    })
})

describe('Fetch A single Product', () => {
    it('It should fetch a single product', (done) => {
      chai.request(app)
          .get('/api/v1/products/:id')
          .end((err, res) => {
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

describe('Update A single Product', () => {
    it('It should update a single product', (done) => {
      chai.request(app)
          .put('/api/v1/products/:id')
          .end((err, res) => {
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

describe('Delete A single Product', () => {
    it('It should Delete a single product', (done) => {
      chai.request(app)
          .delete('/api/v1/products/:id')
          .end((err, res) => {
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

describe('Post Sales records', () => {
    it('It should post sales records', (done) => {
      chai.request(app)
          .post('/api/v1/products')
          .end((err, res) => {
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


describe('All Sales records', () => {
    it('It should Fetch al sales records', (done) => {
      chai.request(app)
          .get('/api/v1/sales')
          .end((err, res) => {
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

describe('Fetch a single salees record', () => {
    it('It should Fetch a single sales record', (done) => {
      chai.request(app)
          .get('/api/v1/sales/:id')
          .end((err, res) => {
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