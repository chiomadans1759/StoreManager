import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import productsRoute from './routes/products';
import salesRoute from './routes/sales';
import userRoutes from './routes/users';
import productRoute from './routes/product';


 


dotenv.config();
const app = express();

// const router = express.Router(); 
// to avoid cors issue
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// use the body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

userRoutes(app);
productRoute(app);

// define routes
app.get('/', (req, res) => {
  res.json({ name: 'chioma', role: 'backend engineer' });
});

app.use('/api/v1', productsRoute);
app.use('/api/v1', salesRoute);


// get the port from the process env
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`server is listening for requests at port ${PORT}`);
});
export default app; // for testing
