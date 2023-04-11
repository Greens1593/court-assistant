import express, { Application, Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Application = express();

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('Hello World');
});

const port = process.env.PORT

app.listen(port, () => {console.log('Server listening on port 3000');
});