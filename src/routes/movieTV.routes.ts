import express from "express";
import {
  createMovieTV,
  getAllMovieTV,
  getMovieTVById,
  updateMovieTV,
  deleteMovieTV,
} from "../controllers/movieTV.controller";

const router = express.Router();

router.post("/", createMovieTV);
router.get("/", getAllMovieTV);
router.get("/:id", getMovieTVById);
router.put("/:id", updateMovieTV);
router.delete("/:id", deleteMovieTV);

export default router;
