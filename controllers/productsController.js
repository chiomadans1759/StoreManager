
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
    
     //Find a product from the products hash using the productId
    findAProduct: function(req,res){

        var productId = req.params.id; 
        if( products[productId]){
            res.json( products[productId]);
        }

        res.json({
            message:` There is no product with the id of ${productId}`,
            error:true
        })
    },
	 //Update a product in the products hash 
    UpdateAProduct: (req,res)=>{

        let productId = req.params.id; 
        if( products[productId]){
            res.send( products[productId]);
        }

        res.send({
            message:`product not found having the id of ${productId}`,
            error:true
        })
    },
	 //Delete a product from the products hash using the productId
    deleteAProduct: function(req, res){
        var productId = req.params.id; 
        if( products[productId]){
            delete products[productId] 
            res.send(`product with the id of ${productId} deleted successfully`)
        }

        res.send({

            message:`there is no product with id of ${productId}`,
            error:true

        })

    }

    }
}