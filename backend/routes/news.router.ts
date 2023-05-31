import express from "express";
import { News } from "../controllers/news.controller"

const newsRouter = express.Router()

newsRouter.get('/', News.getAllNews);
newsRouter.get('/:id', News.getSingleNews);
newsRouter.post('/', News.createNews);
newsRouter.delete('/:id', News.deleteNews);
newsRouter.put('/:id', News.updateNews);

export default newsRouter;