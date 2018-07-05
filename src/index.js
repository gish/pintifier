import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import notificationRouter from './routes/notification';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api/v1/notification', notificationRouter);

app.listen(PORT, () => console.log(`Server started at ${PORT}`));
