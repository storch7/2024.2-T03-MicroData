# BACKLOG DO PRODUTO

## Backlog Geral
O Backlog do Produto é uma lista ordenada de tudo o que é necessário para o desenvolvimento de um produto. Ele serve como a única fonte de trabalho autorizada para a equipe Scrum e é constantemente atualizado pelo Product Owner para refletir as necessidades, mudanças e prioridades do produto. Os itens mais importantes e de maior valor para o cliente são posicionados no topo, enquanto os menos urgentes ficam na parte inferior.

Esse backlog inclui desde funcionalidades e correções até requisitos técnicos e melhorias. Durante a evolução do projeto, os itens do backlog podem ser adicionados, modificados, ou removidos conforme o aprendizado e as condições mudam. Sua manutenção é essencial para garantir que a equipe esteja sempre alinhada com os objetivos do produto e da organização.

### Definição: User Stories
Uma história de usuário é uma descrição simples e informal de uma funcionalidade do ponto de vista do usuário final. Ela é utilizada em metodologias ágeis para comunicar o que é necessário desenvolver de forma clara e objetiva, focando nos benefícios que a funcionalidade trará para o usuário. O Cartão, a Conversação e a Confirmação são os três elementos fundamentais para a estruturação de histórias de usuário no contexto de metodologias ágeis.

O **Cartão** é uma descrição breve e clara da intenção da história de usuário, geralmente escrita em 2 ou 3 frases. Ele segue um formato padrão: "Como [ role ], eu quero [ atividade ] para que [ valor de negócio ]". Esse formato ajuda a identificar quem está solicitando a funcionalidade [ role ], o que será realizado [ atividade ] e por que isso é importante [ valor de negócio ].

A **Conversação** é o momento em que as partes interessadas (equipe, cliente e Product Owner) discutem os detalhes do comportamento esperado da história. O objetivo é esclarecer dúvidas e registrar os detalhes do funcionamento da funcionalidade. Essa conversa, descrita como uma "conversa de promessa", pode incluir anexos adicionais, como mockups, diagramas ou planilhas, que complementem o entendimento. É uma interação contínua entre a equipe e o cliente desde o início do projeto.

A **Confirmação** refere-se aos critérios que determinam se a história foi implementada corretamente. Esses critérios, conhecidos como critérios de aceitação ou condições de satisfação, são objetivos e claros, garantindo que todos saibam exatamente o que deve ser entregue para considerar a história concluída. A validação desses critérios é feita por meio de testes de aceitação realizados pelo cliente ou pelo Product Owner. Embora não sejam testes funcionais ou unitários, descrevem as condições que satisfazem os requisitos do cliente.

## Backlog do projeto Microdata
A especificação de funcionalidades segue o framework de User Stories (Histórias de usuário); cada épico levantado no backlog deu origem a uma história de usuário e seu respectivo índice. Segue abaixo a tabela com os temas, épicos e suas respectivas user stories:

|| INDEX  | TEMA                                       | ÉPICO                                               | US |
|--------|-------------------------------------------|-----------------------------------------------------|----|
| RF-01  | ACESSO E LOGIN                           | CADASTRAR USUÁRIO                                  | Eu como usuário quero cadastrar uma conta para de minhas informações no sistema. |
| RF-02  | ACESSO E LOGIN                           | LOGAR USUÁRIO                                      | Eu como usuário quero realizar login na conta cadastrada para ter acesso aos recursos e funcionalidades da plataforma. |
| RF-03  | ACESSO E LOGIN                           | VISUALIZAR USUÁRIO                                 | Eu como usuário quero visualizar meus dados cadastrais para verificar as informações imputadas no sistema. |
| RF-04  | ACESSO E LOGIN                           | EDITAR USUÁRIO                                    | Eu como usuário poderia editar meus dados cadastrais para gerenciamento de erros de registro e atualização de informações. |
| RF-05  | ACESSO E LOGIN                           | DESATIVAR USUÁRIO                                 | Eu como usuário poderia desativar o meu cadastro no sistema para os casos de desligamento com a empresa / área. |
| RF-06  | ACESSO E LOGIN                           | RECUPERAR SENHA DE USUÁRIO                        | Eu como usuário devo conseguir recuperar uma senha cadastrada para eventuais situações de esquecimento das informações de acesso. |
| RF-07  | MICROORGANISMOS                          | CADASTRAR MICROORGANISMOS OBSERVADOS              | Eu como usuário, quero cadastrar no sistema um microrganismo observado pelo programa para que eu possa registrar informações detalhadas e manter um histórico organizado para análise. |
| RF-08  | MICROORGANISMOS                          | LISTAR MICROORGANISMOS OBSERVADOS                 | Eu como usuário, quero listar os microorganismos observados pelo programa a fim de visualizar os microrganismos cadastrados no sistema. |
| RF-09  | MICROORGANISMOS                          | EDITAR MICROORGANISMOS OBSERVADOS                 | Eu como usuário, quero editar os registros de microorganismos cadastrados a fim de gerenciamento de erros de registro e atualização de informações. |
| RF-10  | MICROORGANISMOS                          | DESATIVAR MICROORGANISMOS OBSERVADOS              | Eu como usuário quero poder desativar algum microorganismo cadastrado no sistema a fim de remover aqueles que já tiveram seus dados adquiridos pela análise microbiológica. |
| RF-11  | MICROORGANISMOS                          | INSERIR NÍVEIS DE ALERTA DA CONTAGEM DE MICROORGANISMOS | Eu como usuário, quero poder ver níveis de alerta a respeito da contagem de microorganismos a fim de ser notificado quando a contagem não está de acordo com o resultado esperado. |
| RF-12  | MICROORGANISMOS                          | BUSCAR MICROORGANISMOS OBSERVADOS                 | Eu como usuário, quero buscar microoranismos cadastrados no sistema para encontrar rapidamente o local desejado de forma eficiente. |
| RF-13  | PONTOS (LOCAIS) AVALIADOS                | CADASTRAR LOCAIS DE COLETA AVALIADOS              | Eu como usuário, quero cadastrar no sistema os locais de realização de coleta microbiológica a fim de acompanhar as contagens de microrganismos presentes em cada local. |
| RF-14  | PONTOS (LOCAIS) AVALIADOS                | LISTAR LOCAIS DE COLETA AVALIADOS                 | Eu como usuário, quero poder listar todos os locais de coleta cadastrados no sistema a fim de visualizar os registros de pontos do monitoramento. |
| RF-15  | PONTOS (LOCAIS) AVALIADOS                | EDITAR LOCAIS DE COLETA AVALIADOS                 | Eu como usuário, quero poder editar os locais de coleta cadastrados no sistema a fim de adicionar ou retirar dados pertinentes para a análise microbiológica. |
| RF-16  | PONTOS (LOCAIS) AVALIADOS                | DESATIVAR LOCAIS DE COLETA AVALIADOS              | Eu como usuário, quero desativar locais de coleta cadastrados no sistema para remover aqueles que não serão mais utilizados na coleta microbiológica. |
| RF-17  | PONTOS (LOCAIS) AVALIADOS                | BUSCAR LOCAIS DE COLETA AVALIADOS                 | Eu como usuário, quero buscar locais cadastrados no sistema para encontrar rapidamente o local desejado de forma eficiente. |
| RF-18  | RESULTADOS DO MONITORAMENTO              | ADICIONAR A CONTAGEM DE MICROORGANISMOS           | Eu como usuário, quero registrar a contagem de microrganismos de uma dada coleta para que eu possa registrar informações detalhadas e manter um histórico organizado para análise. |
| RF-19  | RESULTADOS DO MONITORAMENTO              | LISTAR A CONTAGEM DE MICROORGANISMOS              | Eu como um usuário, quero listar as contagens de microrganismos registradas para que eu possa visualizar e analisar os dados coletados de forma organizada e detalhada. |
| RF-20  | RESULTADOS DO MONITORAMENTO              | EDITAR O REGISTRO DE CONTAGEM DE MICROORGANISMOS  | Eu como um usuário quero editar o registro de contagem de microrganismos já existente para que eu possa corrigir erros ou atualizar informações relevantes para manter os dados precisos e confiáveis. |
| RF-21  | RESULTADOS DO MONITORAMENTO              | INSERIR AÇÕES CORRETIVAS DE RESULTADOS ACIMA DO LIMITE DE CONTAGEM ESTABELECIDO | Eu como usuário devo inserir as ações corretivas para os resultados acima do limite de contagem de microrganismos para o registro de ações de controle mais efetivo e um processo de tomada de decisão mais eficiente. |
| RF-22  | RESULTADOS DO MONITORAMENTO              | FILTRAR UM RESULTADO DE COLETA MICROBIOLÓGICA     | Eu como um usuário, quero aplicar filtros aos resultados de coleta microbiológica para que eu possa localizar informações específicas de forma eficiente e realizar análises mais detalhadas. |

## Priorização do Backlog Geral
O grupo realizou a priorização do backlog do projeto com base em três critérios principais: **valor de negócio**, **complexidade técnica** e i**ndependência de funcionalidades**.  Essa abordagem visa maximizar os resultados e otimizar o uso dos recursos disponíveis.

### Valor de negócio 
Foi considerado para assegurar que as entregas mais importantes para os objetivos do sistema fossem priorizadas. Cada funcionalidade foi classificada com esse parâmetro em uma escala de 1 a 5, onde 1 é considerado com baixo valor para o negócio e 5 alto valor para o negócio.

### Complexidade técnica
Foi avaliada para equilibrar o esforço necessário com os prazos disponíveis, garantindo a viabilidade do desenvolvimento. Cada funcionalidade foi classificada com esse parâmetro em uma escala de 1 a 5, onde 1 é considerado com baixa complecidade técnica e 5 alta complexidade técnica.

### Independência
Foi analisada para otimizar o fluxo de trabalho, priorizando tarefas que não dependem de outras entregas e que podem ser desenvolvidas de forma mais ágil e eficiente. Cada requisito foi confeccionado de forma a ser avaliado a característica de independência de requisitos e funionalidades, mas tratando-se do MVP do projeto, um pequeno conjunto de funcionalidades foi levantado de forma a garantir um fluxo de informações relacionadas e que fizesse sentido para o negócio do cliente ao passo que foi necessário o uso dessa classificação para priorização do MVP.
Cada funcionalidade foi classificada com esse parâmetro em uma escala de 1 a 5, onde 1 é considerado "muito dependente de funcionalidades anteriores" e e 5 "pouco dependente de funcionalidades anteriores".

### Urgência
Foi avaliada a urgência de implementação das US's do projeto levando em consideração as ponderações do cliente sobre o quão agregador para o processo seria a possível implementação a nível de software. Cada funcionalidade foi classificada com esse parâmetro em uma escala de 1 a 5, onde 1 é considerado "pouco urgente" e e 5 "muito urgente".

### Quadro de priorização
Abaixo segue a tabela de priorização conforme os pontos avaliados anteriormente. A complexidade total é o resultado da soma das classificações levantadas pelo grupo:

|| INDEX  | VALOR DE NEGÓCIO | COMPLEXIDADE | INDEPENDÊNCIA | URGÊNCIA | TOTAL (SOMA) |
|--------|------------------|--------------|--------------|---------|--------------|
| US-01  | 3                | 5            | 5            | 4       | 17           |
| US-02  | 3                | 5            | 5            | 4       | 17           |
| US-03  | 3                | 4            | 5            | 4       | 16           |
| US-04  | 3                | 4            | 5            | 4       | 16           |
| US-05  | 4                | 5            | 1            | 3       | 10           |
| US-06  | 1                | 3            | 5            | 2       | 11           |
| US-07  | 4                | 5            | 5            | 3       | 17           |
| US-08  | 3                | 5            | 5            | 4       | 17           |
| US-09  | 3                | 4            | 5            | 4       | 16           |
| US-10  | 3                | 4            | 5            | 4       | 16           |
| US-11  | 3                | 4            | 5            | 3       | 15           |
| US-12  | 4                | 4            | 3            | 3       | 14           |
| US-13  | 4                | 4            | 3            | 3       | 14           |
| US-14  | 4                | 4            | 3            | 3       | 14           |
| US-15  | 4                | 4            | 3            | 3       | 14           |
| US-16  | 4                | 4            | 3            | 3       | 14           |
| US-17  | 4                | 4            | 3            | 3       | 14           |
| US-18  | 4                | 3            | 3            | 4       | 14           |
| US-19  | 4                | 3            | 3            | 4       | 14           |
| US-20  | 4                | 3            | 3            | 4       | 14           |
| US-21  | 4                | 3            | 3            | 4       | 14           |
| US-22  | 4                | 3            | 2            | 4       | 13           |
| US-23  | 5                | 4            | 1            | 4       | 14           |
| US-24  | 5                | 5            | 1            | 3       | 14           |
| US-25  | 5                | 5            | 1            | 3       | 14           |
| US-26  | 5                | 5            | 1            | 3       | 14           |
| US-27  | 5                | 5            | 1            | 2       | 13           |
| US-28  | 5                | 5            | 1            | 2       | 13           |
| US-29  | 3                | 3            | 3            | 1       | 10           |
| US-30  | 3                | 3            | 3            | 2       | 11           |
| US-31  | 3                | 4            | 2            | 1       | 10           |
| US-32  | 3                | 3            | 4            | 3       | 13           |
| US-33  | 4                | 3            | 4            | 3       | 14           |
| US-34  | 4                | 1            | 3            | 4       | 12           |
| US-35  | 2                | 2            | 4            | 3       | 11           |
| US-36  | 2                | 1            | 4            | 2       | 9            |

## MVP do projeto Microdata 
MVP (Minimum Viable Product, ou Produto Mínimo Viável) é uma versão inicial de um produto que contém apenas as funcionalidades essenciais para resolver o problema principal dos usuários. Seu objetivo é validar hipóteses e obter feedback do mercado de maneira rápida e econômica, antes de investir em desenvolvimento completo. O MVP permite que equipes de desenvolvimento entendam o que realmente gera valor para o cliente e ajustem o produto com base em dados reais, minimizando riscos e desperdícios.

Foi levado em consideração o quadro de priorização para a definição do MVP do projeto. As hisorias de Usuário que tiveram o somatório de pontos de avaliação igual ou superior a 14 (>=14) são candidatas para o MVP do projeto; as hisorias com somatório inferior a 13 (<13) permanecem como backlog do projeto e poderão ser desenvolvidas em ocasiões futuras.

O valor de 12 foi estabelecido como clivo para definição das funcionalidades candidatas ao MVP após uma avaliação comparativa do grupo acerca das funcionalidades de alta prioridade (maior urgência de implementação) e baixa prioridade (menor urgência de implementação). As funcionalidades elencadas com menor urgência apresentaram valores que giraram em tordo de 9 e 11; em contrapartida, as que foram consideradas de alta prioridade e maior urgência de impelentação apresentaram valores que giraram em torno de 14 e 20. Desse modo, o valor do somatório foi delimitado em 13 para o estabelecimento do MVP do projeto.

São as histórias do MVP do projeto Microdata e seus respectivos valores na priorização:

| INDEX  | TOTAL |
|--------|-------|
| US-01  | 17    |
| US-02  | 17    |
| US-07  | 17    |
| US-08  | 17    |
| US-03  | 16    |
| US-04  | 16    |
| US-09  | 16    |
| US-10  | 16    |
| US-11  | 15    |
| US-12  | 14    |
| US-13  | 14    |
| US-14  | 14    |
| US-15  | 14    |
| US-16  | 14    |
| US-17  | 14    |
| US-18  | 14    |
| US-19  | 14    |
| US-20  | 14    |
| US-21  | 14    |
| US-23  | 14    |
| US-24  | 14    |
| US-25  | 14    |
| US-26  | 14    |
| US-33  | 14    |
| US-22  | 13    |
| US-27  | 13    |
| US-28  | 13    |
| US-32  | 13    |

Em contrapartida, as funcionalidades que foram consideradas Incrementos são:


| INDEX  | TOTAL |
|--------|-------|
| US-34  | 12    |
| US-06  | 11    |
| US-30  | 11    |
| US-35  | 11    |
| US-05  | 10    |
| US-29  | 10    |
| US-31  | 10    |
| US-36  | 9     |

 

## REFERÊNCIAS

> Atlassian. "Guia sobre MVP". Atlassian. Acesso em 15 dez. 2024. Disponível em: https://www.atlassian.com/agile/product-management/mvp

> ATLASSIAN. Product backlog in Scrum: Everything you need to know. Atlassian, 2024. Disponível em: https://www.atlassian.com/agile/scrum/backlogs. Acesso em: 15 dez. 2024.

> GEORGE. Declaração de Requisitos: Temas, Épicos e User Stories. Unidade 2 – Aula. Slides apresentados em Unb, Requisitos de Software, 2024.

> Mind the Product. "O que é MVP?". Mind the Product. Acesso em 15 dez. 2024. Disponível em: https://www.mindtheproduct.com/what-is-an-mvp-minimum-viable-product/

> Ries, Eric. The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses. Crown Business, 2011.

> SCHWABER, Ken; SUTHERLAND, Jeff. Guia do Scrum: O guia definitivo para o Scrum: As regras do jogo. Scrum Guides, 2020. Disponível em: https://scrumguides.org. Acesso em: 15 dez. 2024.

> SCRUM ALLIANCE. What is a product backlog? Scrum Alliance, 2024. Disponível em: https://www.scrumalliance.org. Acesso em: 15 dez. 2024.

##  Histórico de Versão

| **Data** | **Versão** | **Descrição** | **Autor** |
| :------: | :--------: | :----------:  | :-------: |
| 20/11/2024| 2.0| Criação do documento | Breno Lucena, Breno Fernandes, Storch, João, Rafael e Renan |
| 26/11/2024| 2.0| retirada da tabela TEMA e substituição do texto de ÉPICO | Breno Lucena, Breno Fernandes, Storch, João, Rafael e Renan |