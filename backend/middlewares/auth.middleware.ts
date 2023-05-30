import { NextFunction, Request, Response } from "express";
import { Unauthorized } from "../errors/api.error";
import jwt from "jsonwebtoken";
import { JWTSecretKey } from "../config";

export default (req: Request, res: Response, next: NextFunction) => {
    try {
        const authHeader = req.headers.authorization;

        console.log('check');
        if (!authHeader) {
            return Unauthorized(res);
        }
        console.log('check');

        const token = authHeader.split(' ')[1];
        req.query.user = jwt.verify(token, JWTSecretKey);
        next();
    } catch (error) {
        return next(Unauthorized(res));
    }
}