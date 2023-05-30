import { Response } from 'express';

export function BadRequest(res: Response, message: string) {
    return res.status(400).json({'message': message});
}

export function Unauthorized(res: Response) {
    return res.status(401);
}

export function NotFound(res: Response) {
    return res.status(404);
}
