-- AlterTable
ALTER TABLE "LimitesContagem" ALTER COLUMN "ativo" DROP DEFAULT;

-- AlterTable
ALTER TABLE "PontosAvaliados" ADD COLUMN     "descricao" TEXT;
