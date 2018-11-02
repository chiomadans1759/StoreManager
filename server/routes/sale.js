import SaleController from '../controllers/saleController'; 
import validateSale from '../middleware/saleValidation';
import auth from '../middleware/Oauth'; 
export default (server) => {
  
//Create a new sales record
server.post('/api/v1/sales', auth.verifyUserToken, validateSale, new SaleController().addSale);

//Fetch all sales record
server.get('/api/v1/sales', new SaleController().getAllSales);

//Fetch a Single sales record
server.get('/api/v1/sales/:id', new SaleController().getASale);
 
        };
 
 