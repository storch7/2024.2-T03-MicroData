// Importa o PrismaClient do pacote @prisma/client
// O PrismaClient é a classe principal que permite interagir com o banco de dados
// baseado no schema definido no arquivo schema.prisma.
const { PrismaClient } = require('@prisma/client');

// Cria uma nova instância do PrismaClient
// Essa instância será usada para realizar operações no banco de dados, como criar, 
// ler, atualizar ou deletar registros.
const prisma = new PrismaClient();

// Exporta a instância do PrismaClient para que ela possa ser reutilizada
// em outras partes do código. Isso evita criar múltiplas instâncias do PrismaClient
// em diferentes arquivos, economizando recursos e garantindo consistência.
module.exports = prisma;