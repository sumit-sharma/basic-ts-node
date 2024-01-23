import express, { Express, Request, Response } from "express";
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 3000;


app.get('/', (req: Request, res: Response) => {
    res.send('Basic typescript template');
})
 
app.listen(PORT, () => {
    console.log(`Running on PORT ${PORT}`);
})