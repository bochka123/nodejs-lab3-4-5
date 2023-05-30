import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';

import AdminDB from '../models/admin.model'
import {IUserLogin} from "../types/user.login.type";
import {JWTSecretKey} from "../config";
import {BadRequest} from "../errors/api.error";

export class Admin {
    static async register(req: Request, res: Response) {

        try {
            const err = validationResult(req);
            if (!err.isEmpty()) {
                return BadRequest(res, `Error: ${err}`);
            }

            const possibleAdmin = await AdminDB.findOne({username: req.query.username});

            if (possibleAdmin)
                return BadRequest(res, 'Admin with this username already exists')

            const admin = new AdminDB({
                username: req.query.username as string,
                password: req.query.password as string,
                name: req.query.name as string,
                surname: req.query.surname as string
            });

            await admin.save();
            const token = jwt.sign(
                {id: admin._id},
                JWTSecretKey
            );
            return res.status(200).json({
                data: {
                    token: token,
                    admin: {username: admin.username, name: admin.name, surname: admin.surname}
                }
            });
        } catch (error) {
            return BadRequest(res, `Error: ${error}`);
        }
    }

    static async login(req: Request, res: Response) {
        try {
            const err = validationResult(req);
            if (!err.isEmpty()) {
                return BadRequest(res, 'Error');
            }

            const {username, password}: IUserLogin = {
                username: req.query.username as string,
                password: req.query.password as string
            }
            const admin = await AdminDB.findOne({username: username});

            if (!admin) {
                return BadRequest(res, 'Wrong username');
            }
            admin.comparePassword(password, async (err: any, isMatch: boolean) => {
                if (err || isMatch)
                    return BadRequest(res, 'Invalid password');
            })

            const token = jwt.sign(
                {id: admin._id},
                JWTSecretKey
            );
            return res.status(200).json({
                data: {
                    token: token,
                    admin: {username: admin.username, name: admin.name, surname: admin.surname}
                }
            });
        } catch (error) {
            return BadRequest(res, `Error: ${error}`);
        }
    }
}
