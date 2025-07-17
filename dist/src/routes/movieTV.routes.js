"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const movieTV_controller_1 = require("../controllers/movieTV.controller");
const router = express_1.default.Router();
router.post("/", movieTV_controller_1.createMovieTV);
router.get("/", movieTV_controller_1.getAllMovieTV);
router.get("/:id", movieTV_controller_1.getMovieTVById);
router.put("/:id", movieTV_controller_1.updateMovieTV);
router.delete("/:id", movieTV_controller_1.deleteMovieTV);
exports.default = router;
