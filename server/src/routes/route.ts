import express from "express";
import { getMovies, putDescription } from "../controllers/controller";

const router = express.Router();

router.get("/getmovies", getMovies);
router.put("/updatedetails", putDescription);

export default router;
