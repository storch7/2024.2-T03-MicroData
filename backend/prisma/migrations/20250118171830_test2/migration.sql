/*
  Warnings:

  - Added the required column `resultado_coleta` to the `Resultados` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Resultados" ADD COLUMN     "resultado_coleta" DOUBLE PRECISION NOT NULL;
