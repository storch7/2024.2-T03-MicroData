-- CreateEnum
CREATE TYPE "Frequencia" AS ENUM ('SEMANAL', 'QUINZENAL', 'MENSAL');

-- CreateEnum
CREATE TYPE "ZonaProximidade" AS ENUM ('ZONA_1', 'ZONA_2', 'ZONA_3', 'ZONA_4');

-- CreateEnum
CREATE TYPE "ZonaHigienico" AS ENUM ('ALTO_RISCO', 'MEDIO_RISCO', 'BAIXO_RISCO');

-- CreateTable
CREATE TABLE "Microorganismos" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "descricao" TEXT,
    "ativo" BOOLEAN NOT NULL,
    "data_cadastro" TIMESTAMP(3) NOT NULL,
    "data_desativacao" TIMESTAMP(3),

    CONSTRAINT "Microorganismos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PontosAvaliados" (
    "id" SERIAL NOT NULL,
    "sala" VARCHAR(100) NOT NULL,
    "area" VARCHAR(100) NOT NULL,
    "local_processo" VARCHAR(100),
    "metodo" TEXT,
    "frequencia" "Frequencia" NOT NULL,
    "zona_proximidade" "ZonaProximidade" NOT NULL,
    "zona_higienico" "ZonaHigienico" NOT NULL,
    "ativo" BOOLEAN NOT NULL,
    "data_cadastro" TIMESTAMP(3) NOT NULL,
    "data_desativacao" TIMESTAMP(3),

    CONSTRAINT "PontosAvaliados_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LimitesContagem" (
    "id" SERIAL NOT NULL,
    "limites_contagem" VARCHAR(45) NOT NULL,
    "pontos_avaliados_id" INTEGER NOT NULL,
    "microorganismos_id" INTEGER NOT NULL,

    CONSTRAINT "LimitesContagem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Resultados" (
    "idresultados" SERIAL NOT NULL,
    "resultado_coleta" DOUBLE PRECISION NOT NULL,
    "acao_corretiva" TEXT,
    "data_cadastro" TIMESTAMP(3) NOT NULL,
    "limites_contagem_id" INTEGER NOT NULL,

    CONSTRAINT "Resultados_pkey" PRIMARY KEY ("idresultados")
);

-- AddForeignKey
ALTER TABLE "LimitesContagem" ADD CONSTRAINT "LimitesContagem_pontos_avaliados_id_fkey" FOREIGN KEY ("pontos_avaliados_id") REFERENCES "PontosAvaliados"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LimitesContagem" ADD CONSTRAINT "LimitesContagem_microorganismos_id_fkey" FOREIGN KEY ("microorganismos_id") REFERENCES "Microorganismos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Resultados" ADD CONSTRAINT "Resultados_limites_contagem_id_fkey" FOREIGN KEY ("limites_contagem_id") REFERENCES "LimitesContagem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
