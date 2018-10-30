import ProductController from '../controllers/productController';
import product from '../middleware/product';
 

import { check } from 'express-validator/check'
export default (server) => {
  
//add a product 
server.post('/product', 
            [   check('name').isAlpha(), 
                check('price').isNumeric(),
                check('item').isAlpha()
            ],  
            product,
            new ProductController().addProduct);

//Fetch all products 
server.get('/product', new ProductController().getAllProducts);

//Fetch a Single product
server.get('/product/:id', new ProductController().getAProduct);

//Update a Single product
server.put('/product/:id', new ProductController().updateAProduct);

//Delete a Single product
server.delete('/product/:id', new ProductController().DeleteAProduct);
        };
 
 