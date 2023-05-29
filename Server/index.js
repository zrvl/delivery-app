import express from 'express';
import cors from 'cors';
import sequelize from './db.js';
import dotenv from 'dotenv';
import router from './routes/index.js';
import error from './error.js';

const app = express()
app.use(cors())
app.use(express.json())
dotenv.config();

app.use('/api', router);
app.use(error);

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(process.env.PORT, () => console.log(`Server started on port ${process.env.PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()

