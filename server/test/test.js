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
                res.should.have.status(422);
                res.body.should.be.a('object');   
            done();
          });
    });
    it('It should create a new product with all the properties', (done) => {
        chai.request(app)
            .post('/api/v1/products') 
            .send({
                name: 'phone',
                price: 20,
                item: 2,
            })
            .end((err, res) => {
                  res.body.product.should.have.property('name');
                  res.body.product.should.have.property('price');
                  res.body.product.should.have.property('item');
                  res.should.have.status(200); 
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
                done();
            })
    })
})

describe('Fetch A single Product', () => {
    it('It should fetch a single product', (done) => {
      chai.request(app)
          .get('/api/v1/products/1')
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object'); 
                console.log(res.body)                  
            done();
          });
    });
});

describe('Update A single Product', () => {
    it('It should update a single product', (done) => {
      chai.request(app)
          .put('/api/v1/products/1')
          .send({
            name: 'Bingo',
            price: 50,
            item: 2,
        })
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');                  
                res.body.updatedAProduct.should.have.property('id').eql('1');;
                res.body.updatedAProduct.should.have.property('item');
                res.body.updatedAProduct.should.have.property('name');
                res.body.updatedAProduct.should.have.property('price').eql(50)
            done();
          });
    });
});

describe('Delete A single Product', () => {
    it('It should Delete a single product', (done) => {
      chai.request(app)
          .delete('/api/v1/products/1')
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');    
            done();
          });
    });
});


//TESTING FOR SALES FIELDS

describe('Add New Sales Record', () => {
    it('It should create a new sales record', (done) => {
      chai.request(app)
          .post('/api/v1/sales') 
          .end((err, res) => {
                res.should.have.status(422);
                res.body.should.be.a('object');   
            done();
          });
    });
    it('It should create a new sales record with all the properties', (done) => {
        chai.request(app)
            .post('/api/v1/sales') 
            .send({
                name: 'phone',
                price: 20,
                item: 2,
            })
            .end((err, res) => {
                  res.body.sale.should.have.property('name');
                  res.body.sale.should.have.property('price');
                  res.body.sale.should.have.property('item');
                  res.should.have.status(200); 
              done();
            });
      });

});


describe('All Sales Record', () => {
    it('should return all sales records', done => {
        chai.request(app)
            .get('/api/v1/sales')
            .end((err,res)=>{
                res.should.have.status(200)
                res.body.should.be.a('object') 
                done();
            });
    });
});

describe('Fetch A single Sales Record', () => {
    it('It should fetch a single Sales Record', (done) => {
      chai.request(app)
          .get('/api/v1/sales/1')
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object'); 
                console.log(res.body)   
            done();
          });
    });
});