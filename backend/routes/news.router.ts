import express from "express";
import { News } from "../controllers/news.controller"
import authMiddleware from "../middlewares/auth.middleware";

const newsRouter = express.Router()

newsRouter.get('/', News.getAllNews);
newsRouter.get('/:id', News.getSingleNews);
newsRouter.post('/', News.createNews);
newsRouter.delete('/:id', News.deleteNews);
newsRouter.put('/:', authMiddleware);

export default newsRouter;