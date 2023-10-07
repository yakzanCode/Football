import express from 'express';
import routes from './routes.js';
import cors from 'cors';

const app = express();
app.use(express.json());

app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:4200', 'https://yakzancode.github.io', 'http://127.0.0.1:5500'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));

app.use(routes);

app.listen(3000, () => {
    console.log('Listening on port 3000');
});
