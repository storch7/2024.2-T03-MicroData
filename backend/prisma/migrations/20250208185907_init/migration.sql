/*
  Warnings:

  - Added the required column `data_cadastro` to the `LimitesContagem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "LimitesContagem" ADD COLUMN     "ativo" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "data_cadastro" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "data_desativacao" TIMESTAMP(3);
