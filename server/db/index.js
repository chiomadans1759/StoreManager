import dotenv from 'dotenv';
import { Pool } from 'pg';
import databaseConfig from './config';


dotenv.config();


const env = 'development';


let database;

if (env === 'development') {
  database = new Pool(databaseConfig.development);
} else {
  database = new Pool(databaseConfig.development);
}


export default database;
