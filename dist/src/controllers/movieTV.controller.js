"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMovieTV = exports.updateMovieTV = exports.getMovieTVById = exports.getAllMovieTV = exports.createMovieTV = void 0;
const prisma_1 = __importDefault(require("../prisma"));
// CREATE
const createMovieTV = async (req, res) => {
    try {
        const newData = await prisma_1.default.movieTV.create({ data: req.body });
        console.log("✅ Created:", newData); // ✅ Should be printed
        return res.status(201).json(newData);
    }
    catch (error) {
        console.error("❌ Error creating movieTV:", error);
        return res.status(400).json({
            error: "Failed to create movieTV",
            details: error.message || error,
        });
    }
};
exports.createMovieTV = createMovieTV;
// READ ALL
const getAllMovieTV = async (req, res) => {
    try {
        // Default pagination values
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;
        // Fetch paginated data
        const [movieTVList, total] = await Promise.all([
            prisma_1.default.movieTV.findMany({
                skip,
                take: limit,
                orderBy: { createdAt: "desc" }, // optional sorting
            }),
            prisma_1.default.movieTV.count(),
        ]);
        res.json({
            data: movieTVList,
            meta: {
                page,
                limit,
                total,
                totalPages: Math.ceil(total / limit),
            },
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch movieTV list" });
    }
};
exports.getAllMovieTV = getAllMovieTV;
// READ ONE
const getMovieTVById = async (req, res) => {
    const id = parseInt(req.params.id);
    const movieTV = await prisma_1.default.movieTV.findUnique({ where: { id } });
    if (!movieTV)
        return res.status(404).json({ error: "movieTV not found" });
    res.json(movieTV);
};
exports.getMovieTVById = getMovieTVById;
// UPDATE
const updateMovieTV = async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const movieTV = await prisma_1.default.movieTV.update({
            where: { id },
            data: req.body,
        });
        res.json(movieTV);
    }
    catch (err) {
        res.status(404).json({ error: "Failed to update movieTV", details: err });
    }
};
exports.updateMovieTV = updateMovieTV;
// DELETE
const deleteMovieTV = async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        await prisma_1.default.movieTV.delete({ where: { id } });
        res.json({ message: "movieTV deleted" });
    }
    catch (err) {
        res.status(404).json({ error: "Failed to delete movieTV", details: err });
    }
};
exports.deleteMovieTV = deleteMovieTV;
