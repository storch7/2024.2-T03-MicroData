/*
  Warnings:

  - Changed the type of `limites_contagem` on the `LimitesContagem` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `ativo` to the `Resultados` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "LimitesContagem" DROP COLUMN "limites_contagem",
ADD COLUMN     "limites_contagem" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "Resultados" ADD COLUMN     "ativo" BOOLEAN NOT NULL,
ADD COLUMN     "data_desativacao" TIMESTAMP(3);
