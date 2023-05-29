import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(
    'shoping',
    process.env.USER,
    process.env.PASSWORD,
    {
        dialect: process.env.DIALECT,
        host: process.env.HOST_MARIA,
        port: process.env.PORT_MARIA
    }
)

export default sequelize
