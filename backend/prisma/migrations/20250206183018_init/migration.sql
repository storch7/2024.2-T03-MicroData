-- AlterTable
ALTER TABLE "LimitesContagem" ADD COLUMN     "ativo" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "data_desativacao" TIMESTAMP(3);
