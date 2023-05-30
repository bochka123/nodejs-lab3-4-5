import { Request, Response } from 'express';
import {ApiError} from "../errors/api.error";
import { INews } from "../types/news.type";

const NewsDB = require("../models/news.model")


export class News {
    static async getAllNews(req: Request, res: Response) {
        res.status(200).json(await NewsDB.find())
    }

    static async getSingleNews(req: Request, res: Response) {
        const singleNews = await NewsDB.find({id: req.params['id']});
        if (!singleNews.length) {
            return ApiError.BadRequest(`ID ${req.params['id']} was not found`)
        }
        res.status(200).json(singleNews[0])
    }

    static async createNews(req: Request, res: Response) {
        try {
            const news: INews = req.body;

        } catch (error) {

        }
    }

}