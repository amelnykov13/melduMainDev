import express, { Request, Response } from 'express';
import path from 'path';
import cors from 'cors'


const app = express();
const PORT:number = 5050;

app.use(express.static(path.join(__dirname, '../melduClient/dist')));
app.use(cors());
app.use(express.json());

app.get('/api', (req: Request, res: Response) => {
    res.json({message: 'Hello guys'})
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../melduClient/dist/index.html'));
})

app.listen(PORT, () => {
    console.log(`server is on 5000`)
})
