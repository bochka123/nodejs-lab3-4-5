import {NextFunction, Request, Response} from "express";
import {ApiError} from "../errors/api.error";
import jwt from "jsonwebtoken";
import {JWTSecretKey} from "../config";

export default (req: Request, res: Response, next: NextFunction) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return next(ApiError.Unauthorized());
        }

        const token = authHeader.split(' ')[1];
        req.body.user = jwt.verify(token, JWTSecretKey);
        next();
    } catch (error) {
        return next(ApiError.Unauthorized());
    }
}