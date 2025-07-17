"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    const sampleGenres = ["Action", "Drama", "Comedy", "Horror", "Documentary"];
    const types = ["Movie", "TV_Show"];
    for (let i = 1; i <= 50; i++) {
        await prisma.movieTV.create({
            data: {
                title: `Sample Title ${i}`,
                summary: `This is a sample summary for item ${i}.`,
                type: types[Math.floor(Math.random() * types.length)],
                director: `Director ${i}`,
                budget: 1000000 + i * 50000,
                location: `Location ${i}`,
                duration: `${90 + (i % 30)} mins`,
                year: 2000 + (i % 25),
                genre: sampleGenres[i % sampleGenres.length],
            },
        });
    }
    console.log("🌱 Seed data inserted");
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
