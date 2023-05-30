import express from "express";
import { News } from "../controllers/news.controller"
import authMiddleware from "../middlewares/auth.middleware";

const newsRouter = express.Router()

newsRouter.get('/', News.getAllNews);
newsRouter.get('/:id', News.getSingleNews);
newsRouter.post('/', authMiddleware);
newsRouter.delete('/:id', authMiddleware);
newsRouter.put('/:', authMiddleware);

export default newsRouter;