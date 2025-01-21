const { exec } = require('child_process');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  try {
    console.log('Verificando conexão com o banco de dados...');
    await prisma.$connect();
    console.log('Banco de dados conectado!');

    console.log('Executando migrações...');
    await new Promise((resolve, reject) => {
      exec('npx prisma migrate dev --name init', (error, stdout, stderr) => {
        if (error) {
          console.error(`Erro ao executar migrações: ${stderr}`);
          return reject(error);
        }
        console.log(`Migrações concluídas: ${stdout}`);
        resolve();
      });
    });

    console.log('Migrações concluídas! Iniciando o servidor...');
    exec('node src/server.js', (error, stdout, stderr) => {
      if (error) {
        console.error(`Erro ao iniciar o servidor: ${stderr}`);
        process.exit(1);
      }
      console.log(stdout);
    });
  } catch (error) {
    console.error('Erro ao conectar ou executar migrações:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
