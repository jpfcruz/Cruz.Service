import cors from 'cors'
import express from 'express'

import RouteModules from './routes'

const app = express();

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World');
});

RouteModules.forEach((route) => {
  route(app)
})

app.listen(3000);
