/*
  Warnings:

  - You are about to drop the column `ativo` on the `LimitesContagem` table. All the data in the column will be lost.
  - You are about to drop the column `data_cadastro` on the `LimitesContagem` table. All the data in the column will be lost.
  - You are about to drop the column `data_desativacao` on the `LimitesContagem` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "LimitesContagem" DROP COLUMN "ativo",
DROP COLUMN "data_cadastro",
DROP COLUMN "data_desativacao";
