import express from "express";
import {login, register} from "../controllers/admin.controller";

const adminRouter = express.Router();

adminRouter.post('/register', register);
adminRouter.post('/login', login)

export default adminRouter;