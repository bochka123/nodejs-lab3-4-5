import { Request, Response } from 'express';
import  {BadRequest } from "../errors/api.error";
import { INews } from "../types/news.type";

const NewsDB = require("../models/news.model")


export class News {
    static async getAllNews(req: Request, res: Response) {
        res.status(200).json(await NewsDB.find())
    }

    static async getSingleNews(req: Request, res: Response) {
        try {
            const singleNews = await NewsDB.findOne({_id: req.params['id']});
            if (!singleNews)
                return BadRequest(res, `ID ${req.params['id']} was not found`)

            res.status(200).json(singleNews)
        } catch (error) {
            return BadRequest(res, 'Wrong id of news')
        }
    }

    static async createNews(req: Request, res: Response) {
        try {
            const date = new Date();
            const newsData: INews = {
                title: req.body.title as string,
                content: req.body.content as string,
                category: req.body.category as 'politics' | 'sports' | 'celebrities' | 'travel',
                createdBy: req.body.createdBy as string,
                createdAt: date,
                updatedAt: date
            };
            const news = new NewsDB(newsData);
            await news.save();
            return res.status(200).json(news);
        } catch (error) {
            return BadRequest(res, `Wrong parameters of news ${error}` );
        }
    }

    static async deleteNews(req: Request, res: Response) {
        try {
            const news = await NewsDB.findOne({_id: req.params['id']});
            if (!news)
                return BadRequest(res, `ID ${req.params['id']} was not found`)

            await NewsDB.deleteOne({_id: req.params['id']})
            return res.status(204);
        } catch (error) {
            return BadRequest(res, `Wrong id of news`);
        }
    }

    static async updateNews(req: Request, res: Response) {
        try {
            const news = await NewsDB.findOne({_id: req.params['id']});
            if (!news)
                return BadRequest(res, `ID ${req.params['id']} was not found`)

            const date = new Date();
            const newsData = {
                title: req.query.title as string,
                content: req.query.content as string,
                category: req.query.category as 'politics' | 'sports' | 'celebrities' | 'travel',
                createdBy: req.query.createdBy as string,
                updatedAt: date
            };
            NewsDB.updateOne({_id: req.params['id']}, newsData);
            return res.status(200);
        } catch (error) {
            return BadRequest(res, `Wrong id of news or wrong news parameters`);
        }
    }
}