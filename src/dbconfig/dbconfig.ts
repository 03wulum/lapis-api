import { Pool } from 'pg';
import { load } from 'ts-dotenv';

const env = load({
    DB_HOST: String,
    DB_USER: String,
    DB_PASSWORD: String,
    DB_DB_NAME: String,
    DB_PORT: Number,
});

export default new Pool ({
    max: 20,
    host: env.DB_HOST,
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    databaseName: env.DB_DB_NAME,
    idleTimeoutMillis: 30000
});