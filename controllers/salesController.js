
let sales = {}
let sale_id = 1;
//Sales will be an array of Sales objects

module.exports = {

    //Get all Sales Record  
    fetchAllSales: (req,res) => {
        res.json(sales);
    },


    //Add a Sale Record to the sales hash 
    addSale: (req,res) => {        
        req.body.id = sale_id;
        let saleId = sale_id++; 
        sales[saleId] = req.body;         

    },
    
    //Find a Sale Record from the sales hash using the saleId
    findASale: (req,res) => {

        let saleId = req.params.id; 
        if( sales[saleId]){
            res.json( sales[saleId]);
        }

        res.json({
            message:` There is no sale record with the id of ${saleId}`,
            error:true
        })
    }
 
   
}