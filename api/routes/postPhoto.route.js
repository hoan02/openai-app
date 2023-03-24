import express from "express"
import { verifyToken } from "../middleware/jwt.js";
import { createPostPhoto, getAllPostPhoto, getMyPosts } from "../controllers/postPhoto.controller.js"


const router = express.Router();

router.post('/', verifyToken, createPostPhoto)
router.get('/', getAllPostPhoto)
router.get('/my-posts', verifyToken, getMyPosts)

export default router;
