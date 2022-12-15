import express from "express"
import * as newsController from "../controller/newsController.js"

const router = express.Router()

router.route("/").post(newsController.createNews);
router.route("/").get(newsController.getAllNews);

router.route("/:id").get(newsController.getANews);

export default router