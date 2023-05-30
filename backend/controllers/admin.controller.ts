import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';

import Admin from '../models/admin.model'
import { IAdmin } from "../types/admin.type";
import {IUserLogin} from "../types/user.login.type";
import {JWTSecretKey} from "../config";

export const register = async (req: Request, res: Response) => {
    const { username, password, name, surname }: IAdmin = req.body;
    try {
        const err = validationResult(req);
        if (!err.isEmpty()) {
            return res.status(400).json({'message': `Failed`});
        }

        const admin = new Admin({
            username,
            password,
            name,
            surname
        })

        await admin.save();
        return res.status(201).json({'message': `User registered successfully!`});
    } catch (error) {
        return res.status(500).json({'message': `Error`});
    }
}

export const login = async (req: Request, res: Response) => {
    const { username, password }: IUserLogin = req.body;
    try {
        const err = validationResult(req);
        if (!err.isEmpty()) {
            return res.status(400).json({'message': `Failed`});
        }

        const admin = await Admin.findOne({username: username});

        if (!admin) {
            return res.status(400).json({'message': `Wrong login`});
        }
        admin.comparePassword(password, async (err: any, isMatch: boolean) => {
            if (err || isMatch)
                return res.status(400).json({'message': `Invalid password`});
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
        return res.status(500).json({'message': `Error`});
    }
}