import express, { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import cors from 'cors';
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import tutorRoutes from './routes/tutorRoutes.js';
import studentRoutes from './routes/studentRoutes.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';


dotenv.config() 

const app = express();
const __filename = fileURLToPath(import.meta.url); //get the current file's URL
const __dirname = dirname(__filename); // Get directory to the current file

const corsOptions = {
    origin: process.env.NODE_ENV === "development" ? "http://localhost:3000" : process.env.CLIENT_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

if (process.env.NODE_ENV === "development") {
    app.use(morgan('dev'));
} else {
    app.use(morgan('tiny'));
}

//Serve Fronted in production
if (process.env.NODE_ENV === "production") {
    const clientBuildPath = path.join(__dirname, '../melduClient/dist');
    if (fs.existsSync(clientBuildPath)) {
        app.use(express.static(clientBuildPath));
        
        app.get('*', (req: Request, res: Response) => {
            res.sendFile(path.join(clientBuildPath, "index.html"));
        });
    }
}


app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/s', studentRoutes);
app.use('/api/t', tutorRoutes);

app.get('/api', (req: Request, res: Response) => {
    res.json({message: 'Server connection established'})
})

app.use((err:any, req: Request, res: Response, next: Function) => {
    console.error();
    res.status(500).json({ message: "Server error" });
})

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
    console.log(`server is on ${PORT}`)
})
