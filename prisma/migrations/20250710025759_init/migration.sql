/*
  Warnings:

  - You are about to alter the column `budget` on the `movietv` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.

*/
-- AlterTable
ALTER TABLE `movietv` MODIFY `budget` INTEGER NOT NULL;
