/*
  Warnings:

  - Added the required column `data_cadastro` to the `LimitesContagem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "LimitesContagem" ADD COLUMN     "data_cadastro" TIMESTAMP(3) NOT NULL;
