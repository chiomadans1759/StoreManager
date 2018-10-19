
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
    
    
 
   
}