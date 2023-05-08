import express, { Express } from 'express';

const PORT = process.env.PORT || 3000;
const app: Express = express();

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log(`http://localhost:${PORT}`)
});
