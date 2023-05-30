import express from "express";
import { News } from "../controllers/news.controller"
import authMiddleware from "../middlewares/auth.middleware";

const newsRouter = express.Router()

newsRouter.get('/', News.getAllNews);
newsRouter.get('/:id', News.getSingleNews);
newsRouter.post('/', authMiddleware, News.createNews);
newsRouter.delete('/:id', authMiddleware, News.deleteNews);
newsRouter.put('/:', authMiddleware);

export default newsRouter;