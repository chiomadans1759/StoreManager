import dotEnv from 'dotenv';

dotEnv.config();

const databaseConfig = {};


databaseConfig.development = {
  connectionString: 'postgresql://postgres:admin@localhost:5433/store-manager',
};


export default databaseConfig;
