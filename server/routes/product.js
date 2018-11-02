import ProductController from '../controllers/productController'; 
import validateProduct from '../middleware/productValidation'; 
import auth from '../middleware/Oauth';

export default (server) => {
  
//add a product 
server.post('/api/v1/products', auth.verifyUserToken, validateProduct, new ProductController().addProduct);

//Fetch all products 
server.get('/api/v1/products', new ProductController().getAllProducts);

//Fetch a Single product
server.get('/api/v1/products/:id', new ProductController().getAProduct);

//Update a Single product
server.put('/api/v1/products/:id', auth.verifyUserToken, new ProductController().updateAProduct);

//Delete a Single product
server.delete('/api/v1/products/:id', auth.verifyUserToken, new ProductController().DeleteAProduct);
        };
 
 