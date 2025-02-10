# Projeto MicroData - Frontend

Este repositório contém o frontend do sistema MicroData, uma aplicação desenvolvida com React e Material UI (MUI) que permite gerenciar registros de Microorganismos, Pontos Avaliados e Limite de Contagem.

## Visão Geral

O sistema possui as seguintes funcionalidades:
- **Cadastro e Edição** de registros:
  - Microorganismos
  - Pontos Avaliados
  - Limite de Contagem
- **Exclusão Lógica (Soft Delete):** Ao "deletar" um registro, o campo `ativo` é setado como `false`, de modo que os itens não são apagados do banco de dados, mas não são exibidos nas listagens.
- **Modal de Confirmação:** Antes de realizar a exclusão, é exibido um modal para que o usuário confirme ou cancele a operação.
- **Integração com Backend:** A comunicação com o backend é feita através de APIs, com funções separadas para cada entidade no diretório `services/`.

## Estrutura do Projeto

A estrutura do repositório é organizada da seguinte forma:

```markdown
frontend/
├── public/                # Arquivos públicos da aplicação (HTML, imagens, manifest, etc)
├── src/
│   ├── components/ 
│   │   ├── MicroorganismForm.jsx
│   │   ├── MicroorganismTable.jsx
│   │   ├── PontosavaliadosForm.jsx
│   │   ├── PontosavaliadosTable.jsx
│   │   ├── LimiteContagemForm.jsx
│   │   ├── LimiteContagemTable.jsx
│   │   └── InputSelect.jsx
│   ├── pages/
│   │   ├── Microorganism.jsx
│   │   ├── Pontosavaliados.jsx
│   │   └── LimiteContagem.jsx
│   └── services/
│       ├── microorganismAPI.js
│       ├── pontosavaliadosAPI.js
│       └── limitecontagemAPI.js
├── .env                   # Variáveis de ambiente (ex: REACT_APP_API_URL)
├── package.json           # Dependências e scripts do projeto
└── README.md              # Documentação do projeto (este arquivo)
```

## Configuração do Ambiente

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- [npm](https://www.npmjs.com/)
- Docker para executar a aplicação em container `(Opcional)`

### Instalação

1. **Clone o repositório:**

   ```bash
    git clone https://seu-repositorio.com/microdata-frontend.git
    cd microdata-frontend
   ```
2. **Instale as dependências:**
    ``` 
    npm install
    ```

3. **Configuração das Variáveis de Ambiente:**

Crie um arquivo .env na raiz do projeto e defina a URL base da API, por exemplo:

> REACT_APP_API_URL=http://localhost:5000/api/


4. **Execução**
Para iniciar o projeto em modo de desenvolvimento, execute:
    ```
    npm start
    ``` 
Abra http://localhost:3000 em seu navegador para visualizar a aplicação.

### Scripts Principais
- npm start
Executa a aplicação em modo de desenvolvimento e abre a aplicação no navegador.

- npm run build
Cria uma versão otimizada para produção na pasta build.

### Principais Funcionalidades e Lógica do Projeto
**Exclusão com Modal de Confirmação:**
Em páginas como Microorganism.jsx, Pontosavaliados.jsx e LimiteContagem.jsx existe a lógica para exibir um modal usando o componente Dialog do MUI.
O modal solicita a confirmação do usuário antes de realizar a exclusão lógica (soft delete), que consiste em setar o campo ativo como false.

**Atualização Imediata da Tabela:**
Após a criação ou atualização de um registro, os dados são atualizados no estado local, refletindo a mudança na interface sem a necessidade de recarregar a página.

**Integração com Backend:**
Cada entidade (Microorganismo, Pontos Avaliados, Limite de Contagem) possui um arquivo de serviço dedicado no diretório src/services/.
Estes arquivos utilizam o axios para realizar chamadas HTTP à API do backend.

### Tecnologias Utilizadas
`React`: Biblioteca para criação da interface do usuário.

`Material UI (MUI)`: Biblioteca de componentes com design responsivo.

`Axios`: Utilizado para requisições HTTP à API.

`Create React App`: Ferramenta para bootstrapping do projeto React.