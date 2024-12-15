##Requisitos Funcionais

Requisitos funcionais descrevem as funcionalidades que um sistema deve oferecer para atender às necessidades dos usuários e alcançar os objetivos do projeto. Eles especificam o que o sistema deve fazer, detalhando os serviços, ações ou processos que ele deve executar para possibilitar a realização das tarefas desejadas. Esses requisitos estão diretamente relacionados ao comportamento do sistema, incluindo sua interação com os usuários e outros sistemas, e são essenciais para definir o escopo do projeto e orientar o desenvolvimento.

Os requisitos funcionais do projeto MicroData são:

**RF-01:** Cadastrar usuário  
**RF-02:** Logar usuário  
**RF-03:** Visualizar usuário  
**RF-04:** Editar usuário  
**RF-05:** Desativar usuário  
**RF-06:** Recuperar senha de usuário  
**RF-07:** Cadastrar microorganismos observados  
**RF-08:** Listar microorganismos observados  
**RF-09:** Editar microorganismos observados  
**RF-10:** Desativar microorganismos observados  
**RF-11:** Inserir níveis de alerta da contagem de microorganismos  
**RF-12:** Buscar microorganismos observados  
**RF-13:** Cadastrar locais de coleta avaliados  
**RF-14:** Listar locais de coleta avaliados  
**RF-15:** Editar locais de coleta avaliados  
**RF-16:** Desativar locais de coleta avaliados  
**RF-17:** Buscar locais de coleta avaliados  
**RF-18:** Adicionar a contagem de microorganismos  
**RF-19:** Listar a contagem de microorganismos  
**RF-20:** Editar o registro de contagem de microorganismos  
**RF-21:** Inserir ações corretivas de resultados acima do limite de contagem estabelecido  
**RF-22:** Filtrar um resultado de coleta microbiológica  
**RF-23:** Visualizar resultados da coleta dos pontos no dashboard  
**RF-24:** Visualizar pontos acima do limite de contagem no dashboard  
**RF-25:** Visualizar resultados em função do nível de alerta no dashboard  
**RF-26:** Filtrar resultados por microorganismo observado  
**RF-27:** Filtrar resultados por local de coleta  
**RF-28:** Filtrar resultados por período de tempo estudado  

##Requisitos Não-Funcionais

Os requisitos não funcionais referem-se às qualidades que o sistema deve apresentar, enfatizando seu comportamento em vez das funcionalidades específicas. Estruturados segundo o modelo URPS+, esses requisitos englobam categorias como Usabilidade, Confiabilidade, Desempenho e Suportabilidade, o que ajuda na análise e na priorização das características que afetam a qualidade do software. Assim, garantem que o sistema esteja alinhado com os padrões desejados por clientes e usuários.

###Implementação

**RNF-01:** O banco de dados deve receber as informações do sistema e realizar o registro baseado no algoritmo de criptografia RSA.  
**RNF-02:** O sistema deve ser codificado em Node.js, utilizando a biblioteca React.  
**RNF-03:** O sistema deve utilizar um banco de dados SQLite.  
**RNF-04:** O sistema deve obedecer os processos estabelecidos pelo programa de monitoramento microbiológico seguido pela empresa.  

###Suportabilidade

**RNF-05** O sistema deve ser executado no servidor interno da industria.  

###Confiabilidade

**RNF-03:** O sistema deve permanecer em execução 24h por dia.

##  Histórico de Versão

| **Data** | **Versão** | **Descrição** | **Autor** |
| :------: | :--------: | :----------:  | :-------: |
| 15/12/2024| 1.0| Adição dos requisitos funcionais e não funcionais | João Lucas Araujo |

