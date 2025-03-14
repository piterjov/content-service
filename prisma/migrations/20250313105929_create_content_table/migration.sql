-- CreateTable
CREATE TABLE `Content` (
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

    UNIQUE INDEX `Content_external_id_key`(`external_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
