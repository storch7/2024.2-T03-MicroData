backend/
├── prisma/                      # Arquivos relacionados ao Prisma
│   ├── schema.prisma            # Definição do schema do banco de dados
│   └── migrations/              # Diretório gerado automaticamente com as migrações
├── src/                         # Código-fonte da aplicação
│   ├── controllers/             # Controladores para manipulação da lógica de negócios
│   │   ├── microorganismosController.js
│   │   ├── pontosAvaliadosController.js
│   │   ├── limitesContagemController.js
│   │   └── resultadosController.js
│   ├── routes/                  # Definição de rotas da API
│   │   ├── microorganismosRoutes.js
│   │   ├── pontosAvaliadosRoutes.js
│   │   ├── limitesContagemRoutes.js
│   │   └── resultadosRoutes.js
│   ├── services/                # Serviços para lógica de negócios ou interações externas
│   │   ├── microorganismosService.js
│   │   ├── pontosAvaliadosService.js
│   │   ├── limitesContagemService.js
│   │   └── resultadosService.js
│   ├── middlewares/             # Middlewares para autenticação, validação, etc.
│   │   └── errorHandler.js
│   ├── models/                  # (Opcional) Modelos para abstração da base de dados
│   ├── utils/                   # Utilitários gerais
│   │   └── database.js          # Configuração do Prisma Client
│   ├── app.js                   # Configuração do servidor Express
│   └── server.js                # Arquivo de inicialização do servidor
├── .env                         # Variáveis de ambiente
├── Dockerfile                   # Arquivo de configuração para Docker
├── docker-compose.yml           # Configuração do Docker Compose
├── package.json                 # Dependências do projeto
└── README.md                    # Documentação do projeto