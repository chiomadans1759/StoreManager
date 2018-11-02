import { validationResult } from 'express-validator/check'

const sales = []
//Sales will be an array of Sales objects

class SalesController {

    //Get all Sales Record  
    static fetchAllSales (req,res){ 
        return res.status(200)
        .json({
            status: 'Success',
            sales,
        });
    }

    

    //Add a Sale Record to the sales hash
    static addSale (req, res){
        const sale = {};
        const saleId = sales.length + 1;
        sale.id = saleId; 
        sale.name = req.body.name;
        sale.price = req.body.price;
        sale.item = req.body.item;
        
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(422).json({
            status: 'Failed',
            message: `${errors.array()[0].msg} ${errors.array()[0].value} provided for ${errors.array()[0].param}`,
          });
        }

        for (let i = 0; i < sales.length; i++) {
          if (sale.name === sales[i].name) {
            return res.status(409).json({
              message: `A sales record with name  ${sale.name} already exist`
            });
          }
        }  

          sales.push(sale);
          return res.status(200).json({
            message: 'New Sales Record successfully created!',
            status: 'Success',
            sale: sales[saleId - 1],
            sale
          });
      }
 
    //Find a Sale Record from the sales hash using the saleId
      static findASale(req,res){

        let saleId = req.params.id; 
        if(sales[saleId  -1]){
            return res.status(200).json(sales[saleId - 1]);
        }

        return res.status(404).json({
            message:` There is no sale record with the id of ${saleId}`,
            error:true
        })
    }
 
   
}

export default SalesController;



 