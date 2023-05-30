import express from "express";
import { Admin } from "../controllers/admin.controller";

const adminRouter = express.Router();

adminRouter.post('/register', Admin.register);
adminRouter.post('/login', Admin.login)

export default adminRouter;