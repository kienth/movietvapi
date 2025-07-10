-- CreateTable
CREATE TABLE `MovieTV` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `summary` VARCHAR(191) NULL,
    `type` ENUM('Movie', 'TV_Show') NOT NULL,
    `director` VARCHAR(191) NOT NULL,
    `budget` BIGINT NOT NULL,
    `location` VARCHAR(191) NOT NULL,
    `duration` VARCHAR(191) NOT NULL,
    `year` INTEGER NOT NULL,
    `genre` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
