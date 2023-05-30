import express, { Express } from 'express';
import cors from 'cors';
import newsRouter from './routes/news.router';
import adminRouter from "./routes/admin.router";

const PORT = process.env.PORT || 3000;
const app: Express = express();

require('./db/db');

app.use(cors());

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log(`http://localhost:${PORT}`)
});

app.use('/api/v1/news', newsRouter);
app.use('/api/v1/admin', adminRouter)
