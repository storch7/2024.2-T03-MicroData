#Requisitos Funcionais

Requisitos funcionais descrevem as funcionalidades que um sistema deve oferecer para atender às necessidades dos usuários e alcançar os objetivos do projeto. Eles especificam o que o sistema deve fazer, detalhando os serviços, ações ou processos que ele deve executar para possibilitar a realização das tarefas desejadas. Esses requisitos estão diretamente relacionados ao comportamento do sistema, incluindo sua interação com os usuários e outros sistemas, e são essenciais para definir o escopo do projeto e orientar o desenvolvimento.

Os requisitos funcionais do projeto MicroData são, por épico:
## Acesso E Login
- **Rf-01**: Cadastrar Usuário  
- **Rf-02**: Logar Usuário  
- **Rf-03**: Visualizar Usuário  
- **Rf-04**: Editar Usuário  
- **Rf-05**: Desativar Usuário  
- **Rf-06**: Recuperar Senha De Usuário  

## Microorganismos
- **Rf-07**: Cadastrar Microorganismos Observados  
- **Rf-08**: Listar Microorganismos Observados  
- **Rf-09**: Editar Microorganismos Observados  
- **Rf-10**: Desativar Microorganismos Observados  
- **Rf-11**: Inserir Níveis De Alerta Da Contagem De Microorganismos  
- **Rf-12**: Buscar Microorganismos Observados  

## Pontos (Locais) Avaliados
- **Rf-13**: Cadastrar Locais De Coleta Avaliados  
- **Rf-14**: Listar Locais De Coleta Avaliados  
- **Rf-15**: Editar Locais De Coleta Avaliados  
- **Rf-16**: Desativar Locais De Coleta Avaliados  
- **Rf-17**: Buscar Locais De Coleta Avaliados  

## Resultados Do Monitoramento
- **Rf-18**: Adicionar A Contagem De Microorganismos  
- **Rf-19**: Listar A Contagem De Microorganismos  
- **Rf-20**: Editar O Registro De Contagem De Microorganismos  
- **Rf-21**: Inserir Ações Corretivas De Resultados Acima Do Limite De Contagem Estabelecido  
- **Rf-22**: Filtrar Um Resultado De Coleta Microbiológica  

## Dashboard
- **Rf-23**: Visualizar Resultados Da Coleta Dos Pontos No Dashboard  
- **Rf-24**: Visualizar Pontos Acima Do Limite De Contagem No Dashboard  
- **Rf-25**: Visualizar Resultados Em Função Do Nível De Alerta No Dashboard  
- **Rf-26**: Filtrar Resultados Por Microorganismo Observado  
- **Rf-27**: Filtrar Resultados Por Local De Coleta  
- **Rf-28**: Filtrar Resultados Por Período De Tempo Estudado  

## Localização de Informações e Rastreabilidade
- **Rf-29**: Inserir A Planta Baixa Do Processo  
- **Rf-30**: Excluir A Planta Baixa Cadastrada  
- **Rf-31**: Delimitar Os Locais De Coleta Avaliados Na Planta Baixa Da Área  
- **Rf-32**: Apresentar Na Planta Baixa Os Locais De Coleta Ativos Por Período De Tempo  
- **Rf-33**: Listar A Contagem De Microorganismos Por Operador  
- **Rf-34**: Apresentar Histórico De Modificações De Resultados  
- **Rf-35**: Inserir A Imagem Do Locais De Coleta Cadastrado  
- **Rf-36**: Excluir A Imagem Do Locais De Coleta Cadastrado   

#Requisitos Não-Funcionais

Os requisitos não funcionais referem-se às qualidades que o sistema deve apresentar, enfatizando seu comportamento em vez das funcionalidades específicas. Estruturados segundo o modelo URPS+, esses requisitos englobam categorias como Usabilidade, Confiabilidade, Desempenho e Suportabilidade, o que ajuda na análise e na priorização das características que afetam a qualidade do software. Assim, garantem que o sistema esteja alinhado com os padrões desejados por clientes e usuários.

##Implementação

**RNF-01:** O banco de dados deve receber as informações do sistema e realizar o registro baseado no algoritmo de criptografia RSA.  
**RNF-02:** O sistema deve ser codificado em Node.js, utilizando a biblioteca React.  
**RNF-03:** O sistema deve utilizar um banco de dados SQLite.  
**RNF-04:** O sistema deve obedecer os processos estabelecidos pelo programa de monitoramento microbiológico seguido pela empresa.  

##Suportabilidade

**RNF-05** O sistema deve ser executado no servidor interno da industria.  

##Confiabilidade

**RNF-03:** O sistema deve permanecer em execução 24h por dia.

##  Histórico de Versão

| **Data** | **Versão** | **Descrição** | **Autor** |
| :------: | :--------: | :----------:  | :-------: |
| 15/12/2024| 1.0| Adição dos requisitos funcionais e não funcionais | João Lucas Araujo |

