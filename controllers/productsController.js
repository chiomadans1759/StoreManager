
let products = {}
let product_id = 1;
//products will be an array of product objects

module.exports = {

    //Get all products from the products hash  
    fetchAllProducts: (req,res) => {
        res.json(products);
    },


    //Add a product to the products hash 
    addProduct: (req,res) => {
        
        req.body.id = product_id;
        let productId = product_id++; 

        products[productId] = req.body;
        
        res.json( {data: products, status:'success'}, 200);

    },
    
     

    }
}