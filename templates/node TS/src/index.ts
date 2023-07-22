require('dotenv').config();
import express, { Application, Request, Response } from 'express';

const PORT = process.env.PORT;

const app: Application = express();

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'hello world' });
});

app.listen(PORT, () => console.log(`server running on port:${PORT}`));
