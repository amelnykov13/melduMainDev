import express, { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import cors from 'cors'
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';

import authRoutes from './routes/authRoutes.js'
import userRoutes from './routes/userRoutes.js'



dotenv.config() 

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({ origin: process.env.CLIENT_URL || "*", credentials: true }));

const clientBuildPath = path.join(__dirname, '../melduClient/dist');
if (fs.existsSync(clientBuildPath)) {
    app.use(express.static(clientBuildPath));
}

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

app.get('/api', (req: Request, res: Response) => {
    res.json({message: 'Hello guys'})
})

app.use((err:any, req: Request, res: Response, next: Function) => {
    console.error();
    res.status(500).json({ message: "Server error" });
})

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
    console.log(`server is on ${PORT}`)
})
