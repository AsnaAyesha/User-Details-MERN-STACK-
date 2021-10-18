import express from "express";
import { addUser, getUser } from "../Controllers/userControler.js";
const router = express.Router();



router.get("/",getUser);
router.post("/add",addUser)


export default router;