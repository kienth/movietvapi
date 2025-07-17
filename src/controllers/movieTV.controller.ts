import { Request, Response } from "express";
import prisma from "../prisma";

// CREATE
export const createMovieTV = async (req: Request, res: Response) => {
  try {
    const newData = await prisma.movieTV.create({ data: req.body });
    console.log("✅ Created:", newData); // ✅ Should be printed
    return res.status(201).json(newData);
  } catch (error: any) {
    console.error("❌ Error creating movieTV:", error);
    return res.status(400).json({
      error: "Failed to create movieTV",
      details: error.message || error,
    });
  }
};

// READ ALL
export const getAllMovieTV = async (req: Request, res: Response) => {
  try {
    // Default pagination values
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const skip = (page - 1) * limit;

    // Fetch paginated data
    const [movieTVList, total] = await Promise.all([
      prisma.movieTV.findMany({
        skip,
        take: limit,
        orderBy: { createdAt: "desc" }, // optional sorting
      }),
      prisma.movieTV.count(),
    ]);

    console.log(movieTVList);

    res.json({
      data: movieTVList,
      meta: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch movieTV list" });
  }
};

// READ ONE
export const getMovieTVById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  if (!id || isNaN(Number(id))) {
    return res.status(400).json({ error: "Invalid or missing ID" });
  }
  const movieTV = await prisma.movieTV.findUnique({ where: { id } });
  if (!movieTV) return res.status(404).json({ error: "movieTV not found" });
  res.json(movieTV);
};

// UPDATE
export const updateMovieTV = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    const movieTV = await prisma.movieTV.update({
      where: { id },
      data: req.body,
    });
    res.json(movieTV);
  } catch (err) {
    res.status(404).json({ error: "Failed to update movieTV", details: err });
  }
};

// DELETE
export const deleteMovieTV = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    await prisma.movieTV.delete({ where: { id } });
    res.json({ message: "movieTV deleted" });
  } catch (err) {
    res.status(404).json({ error: "Failed to delete movieTV", details: err });
  }
};
