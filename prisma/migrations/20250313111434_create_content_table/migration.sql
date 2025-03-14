/*
  Warnings:

  - You are about to drop the `movies` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `movies`;

-- CreateTable
CREATE TABLE `content` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `related_id` BIGINT NULL,
    `distributor_studio_id` BIGINT NULL,
    `external_id` VARCHAR(191) NULL,
    `status` INTEGER NOT NULL,
    `filename` VARCHAR(191) NOT NULL,
    `adult_plus` BOOLEAN NOT NULL DEFAULT false,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `deleted_at` DATETIME(3) NULL,
    `country_of_origin` VARCHAR(191) NULL,
    `director` VARCHAR(191) NULL,
    `length` BIGINT NULL,
    `original_title` VARCHAR(191) NULL,
    `original_description` VARCHAR(191) NULL,
    `produced_at` DATETIME(3) NULL,

    UNIQUE INDEX `content_external_id_key`(`external_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `content` ADD CONSTRAINT `content_related_id_fkey` FOREIGN KEY (`related_id`) REFERENCES `content`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
