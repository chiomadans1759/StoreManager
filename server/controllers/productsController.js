import { validationResult } from 'express-validator/check'
const products = []
//Products will be an array of Products objects

class ProductsController{

    //Get all Products 
    static fetchAllProducts (req,res){
        return res.status(200)
        .json({
            status: 'Success',
            products,
        });
    }


    //Add a Products to the products hash 
    static addProduct (req, res){
        const product = {};
        const productId = products.length + 1;
        product.id = productId; 
        product.name = req.body.name;
        product.price = req.body.price;
        product.item = req.body.item;
      
      
        for (let i = 0; i < products.length; i++) {
          if (product.name === products[i].name) {
            return res.status(409).json({
              message: 'Product already exist'
            });
          }
        } if(req.body.name && req.body.price && req.body.item) {
          products.push(product);
          res.status(200).json({
            message: 'New Product successfully added!',
            status: 'Success',
            product: products[productId - 1],
            product
          });
        } 
        
        else {
         const errors = validationResult(req);
         return res.status(422).json({
            status: 422,
            message: 'Please enter all product properties'
          });
        }
      }
    //Find a Sale Record from the sales hash using the saleId
    static findAProduct(req,res){

        let productId = req.params.id; 
        if(products[productId  -1]){
            return res.status(200).json(products[productId - 1]);
        }

        return res.status(404).json({
            message:` There is no product with the id of ${productId}`,
            error:true
        })
    }

    static UpdateAProduct(req,res){

        const productId = req.params.id; 
        if( products[productId -1 ]){
            const newProoductDetails = {
                id: productId,
                name: req.body.name,
                price: req.body.price,
                item: req.body.item,
            };
            products[productId - 1] = newProoductDetails;
            return res.status(200)
            .json({
                status: 'Success',
               updatedAProduct: products[productId - 1]
            });
        }

        return res.status(404).json({
            message:` There is no product with the id of ${productId}`,
            error:true
        })
    }

    static deleteAProduct(req,res){

        let productId = req.params.id;   
        if( products[productId - 1]){
            products.splice(productId - 1, 1);
            return res.status(200).json({
                status: 'Success',
               message: `product with the id of ${productId} deleted successfully`
            });
        }

        return res.status(404).json({
            message:` There is no product with the id of ${productId}`,
            error:true
        })
    }

}

export default ProductsController;
