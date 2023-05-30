import express, { Express } from 'express';
import newsRouter from './routes/news.router';

const PORT = process.env.PORT || 3000;
const app: Express = express();

require('./db/db');

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log(`http://localhost:${PORT}`)
});

app.use('/api/v1/news', newsRouter)
