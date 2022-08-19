import express from 'express';
const app = express();

import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

// importing controllers
import userRouter from './routes/user.router';

dotenv.config({path: './.env'});


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('/user', userRouter);

const PORT = process.env.PORT || 3332;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})