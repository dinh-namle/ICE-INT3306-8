import express, { Request, Response } from 'express';
import morgan from 'morgan';
const app = express();
const port = 3002;


app.use(morgan("combined"));

app.get('/api', (_req: Request, res: Response) => {
  res.send('Hello World!');
}); 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
