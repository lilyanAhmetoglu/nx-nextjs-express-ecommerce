
import * as express from 'express';
import * as cors from 'cors'
import { products } from './product';
const app = express();

app.get('/api', (_, res) => {
  res.send({ message: 'Welcome to api!' });
});

app.use(cors())
app.get('/products', (_, res) => {
  res.send(products);
});

app.get('/search', (req, res) => {
  const q = ((req.query?.q as string) ?? '').toLowerCase();
  res.send(
    products.filter(({ name: { english } }) => english.toLowerCase().includes(q))
  );
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
