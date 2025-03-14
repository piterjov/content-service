-- AlterTable
ALTER TABLE `Content` ADD COLUMN `country_of_origin` VARCHAR(191) NULL,
    ADD COLUMN `director` VARCHAR(191) NULL,
    ADD COLUMN `length` BIGINT NULL,
    ADD COLUMN `original_description` VARCHAR(191) NULL,
    ADD COLUMN `original_title` VARCHAR(191) NULL,
    ADD COLUMN `produced_at` DATETIME(3) NULL;
