# BACKLOG DO PRODUTO

## Definições
### Backlog
O Backlog do Produto é uma lista ordenada de tudo o que é necessário para o desenvolvimento de um produto. Ele serve como a única fonte de trabalho autorizada para a equipe Scrum e é constantemente atualizado pelo Product Owner para refletir as necessidades, mudanças e prioridades do produto. Os itens mais importantes e de maior valor para o cliente são posicionados no topo, enquanto os menos urgentes ficam na parte inferior.

Esse backlog inclui desde funcionalidades e correções até requisitos técnicos e melhorias. Durante a evolução do projeto, os itens do backlog podem ser adicionados, modificados, ou removidos conforme o aprendizado e as condições mudam. Sua manutenção é essencial para garantir que a equipe esteja sempre alinhada com os objetivos do produto e da organização.

### User Stories
Uma história de usuário é uma descrição simples e informal de uma funcionalidade do ponto de vista do usuário final. Ela é utilizada em metodologias ágeis para comunicar o que é necessário desenvolver de forma clara e objetiva, focando nos benefícios que a funcionalidade trará para o usuário. O Cartão, a Conversação e a Confirmação são os três elementos fundamentais para a estruturação de histórias de usuário no contexto de metodologias ágeis.

O **Cartão** é uma descrição breve e clara da intenção da história de usuário, geralmente escrita em 2 ou 3 frases. Ele segue um formato padrão: "Como <role>, eu quero <atividade> para que <valor de negócio>". Esse formato ajuda a identificar quem está solicitando a funcionalidade (role), o que será realizado (atividade) e por que isso é importante (valor de negócio).

A **Conversação** é o momento em que as partes interessadas (equipe, cliente e Product Owner) discutem os detalhes do comportamento esperado da história. O objetivo é esclarecer dúvidas e registrar os detalhes do funcionamento da funcionalidade. Essa conversa, descrita como uma "conversa de promessa", pode incluir anexos adicionais, como mockups, diagramas ou planilhas, que complementem o entendimento. É uma interação contínua entre a equipe e o cliente desde o início do projeto.

A **Confirmação** refere-se aos critérios que determinam se a história foi implementada corretamente. Esses critérios, conhecidos como critérios de aceitação ou condições de satisfação, são objetivos e claros, garantindo que todos saibam exatamente o que deve ser entregue para considerar a história concluída. A validação desses critérios é feita por meio de testes de aceitação realizados pelo cliente ou pelo Product Owner. Embora não sejam testes funcionais ou unitários, descrevem as condições que satisfazem os requisitos do cliente.

### Definition of Ready (DoR)
A Definição de Preparado (DoR) é o conjunto de critérios que determina quando um item de trabalho está pronto para ser iniciado pela equipe. Ela estabelece a clareza e as informações necessárias para que a equipe possa iniciar suas atividades com eficiência. Seja em histórias do usuário ou tarefas de desenvolvimento, o DoR visa proporcionar um entendimento claro e completo do que precisa ser feito antes que o trabalho comece.


### Definition of Done (DoD)
A Definição de Pronto (DoD), é uma lista de critérios que estabelece quando uma determinada tarefa ou trabalho atende aos requisitos para ser considerado pronto. Esses critérios podem abranger desde desenvolvimento e testes até revisões e aprovações, garantindo que a qualidade e integridade do produto final sejam atingidas. Por meio do DoD, as equipes de projeto podem ter uma compreensão clara do que é esperado em cada entrega, promovendo a transparência e a eficiência em todo o processo.

### Minimum Viable Product
MVP (Minimum Viable Product, ou Produto Mínimo Viável) é uma versão inicial de um produto que contém apenas as funcionalidades essenciais para resolver o problema principal dos usuários. Seu objetivo é validar hipóteses e obter feedback do mercado de maneira rápida e econômica, antes de investir em desenvolvimento completo. O MVP permite que equipes de desenvolvimento entendam o que realmente gera valor para o cliente e ajustem o produto com base em dados reais, minimizando riscos e desperdícios.

## Backlog do projeto Microdata
A especificação de funcionalidades segue o framework de User Stories (Histórias de usuário).
Segue a tabela com os temas e suas respectivas user stories:

| **Tema**                  | **User Story**                                                                                   |
|---------------------------|-------------------------------------------------------------------------------------------------|
| **Acesso e Login**        | Eu como usuário quero cadastrar uma conta para guardar minhas informações no sistema.           |
|                           | Eu como usuário quero realizar login na conta cadastrada para ter acesso aos recursos e funcionalidades da plataforma. |
|                           | Eu como usuário quero visualizar meus dados cadastrais para verificar as informações imputadas no sistema. |
|                           | Eu como usuário poderia editar meus dados cadastrais para gerenciamento de erros de registro e atualização de informações. |
|                           | Eu como usuário poderia desativar o meu cadastro no sistema para os casos de desligamento com a empresa/área. |
|                           | Eu como usuário devo conseguir recuperar uma senha cadastrada para eventuais situações de esquecimento das informações de acesso. |
| **Microrganismos**        | Eu como usuário, quero cadastrar no sistema um microrganismo observado pelo programa para que eu possa registrar informações detalhadas e manter um histórico organizado para análise. |
|                           | Eu como usuário, quero listar os microrganismos observados pelo programa a fim de visualizar os microrganismos cadastrados no sistema. |
|                           | Eu como usuário, quero editar os registros de microrganismos cadastrados a fim de gerenciamento de erros de registro e atualização de informações. |
|                           | Eu como usuário quero poder desativar algum microrganismo cadastrado no sistema a fim de remover aqueles que já tiveram seus dados adquiridos pela análise microbiológica. |
|                           | Eu como usuário, quero poder ver níveis de alerta a respeito da contagem de microrganismos a fim de ser notificado quando a contagem não está de acordo com o resultado esperado. |
|                           | Eu como usuário, quero buscar microrganismos cadastrados no sistema para encontrar rapidamente o local desejado de forma eficiente. |
| **Pontos Avaliados**      | Eu como usuário, quero cadastrar no sistema os locais de realização de coleta microbiológica a fim de acompanhar as contagens de microrganismos presentes em cada local. |
|                           | Eu como usuário, quero poder listar todos os locais de coleta cadastrados no sistema a fim de visualizar os registros de pontos do monitoramento. |
|                           | Eu como usuário, quero poder editar os locais de coleta cadastrados no sistema a fim de adicionar ou retirar dados pertinentes para a análise microbiológica. |
|                           | Eu como usuário, quero desativar locais de coleta cadastrados no sistema para remover aqueles que não serão mais utilizados na coleta microbiológica. |
|                           | Eu como usuário, quero buscar locais cadastrados no sistema para encontrar rapidamente o local desejado de forma eficiente. |
| **Resultados do Monitoramento** | Eu como usuário, quero registrar a contagem de microrganismos de uma dada coleta para que eu possa registrar informações detalhadas e manter um histórico organizado para análise. |
|                           | Eu como usuário, quero listar as contagens de microrganismos registradas para que eu possa visualizar e analisar os dados coletados de forma organizada e detalhada. |
|                           | Eu como usuário quero editar o registro de contagem de microrganismos já existente para que eu possa corrigir erros ou atualizar informações relevantes para manter os dados precisos e confiáveis. |
|                           | Eu como usuário, quero aplicar filtros aos resultados de coleta microbiológica para que eu possa localizar informações específicas de forma eficiente e realizar análises mais detalhadas. |
| **Dashboard**             | Eu como usuário, quero visualizar no dashboard os resultados de coleta para cada ponto, a fim de acompanhar a situação microbiológica de forma consolidada. |
|                           | Eu como usuário, quero que o dashboard destaque os pontos que excederam o limite de contagem, para priorizar ações corretivas. |
|                           | Eu como usuário, quero visualizar os resultados agrupados por nível de alerta (normal, atenção, crítico), para facilitar a análise dos dados críticos. |
|                           | Eu como usuário, quero filtrar no dashboard os resultados por tipo de microrganismo, para avaliar padrões de contagem específicos. |
|                           | Eu como usuário, quero filtrar no dashboard os resultados por local de coleta, para analisar os dados de uma área específica. |
|                           | Eu como usuário, quero filtrar os resultados no dashboard por período de tempo, para entender as variações ao longo de diferentes intervalos. |

## Definition of Ready (DoR) do PBI
Para que um item do Product Backlog Item seja candidato para entrar na esteria do processo de desenvolvimento, os seguintes elementos devem ser considerados: 
- O item é independente de outros PBIs ou recursos externos? *
- O valor do item está claramente documentado?
- A equipe conseguiu estimar o esforço necessário?
- O item é pequeno o suficiente para ser concluído na Sprint?
- Os critérios de aceitação são claros e testáveis?
- Protótipo pronto e validado pelo cliente?


## Definition of Done (DoD) do PBI
- Para que um Product Backlog Item seja considerado finalizado após o processo de desenvolvimento, os seguintes elementos devem ser avaliados:
- O código foi revisado e atende aos padrões?
- Os testes foram desenvolvidos e aprovados?
- O cliente/PO validou o item? *
- A documentação foi atualizada?
- A funcionalidade foi integrada ao sistema principal?
- Os critérios de aceitação foram cumpridos?

## Priorização

## MVP do projeto Microdata

## Especificação dos requisitos da primeira entrega

## REFERÊNCIAS

Atlassian. "Guia sobre MVP". Atlassian. Acesso em 15 dez. 2024. Disponível em: https://www.atlassian.com/agile/product-management/mvp

ATLASSIAN. Product backlog in Scrum: Everything you need to know. Atlassian, 2024. Disponível em: https://www.atlassian.com/agile/scrum/backlogs. Acesso em: 15 dez. 2024.

GEORGE. Declaração de Requisitos: Temas, Épicos e User Stories. Unidade 2 – Aula. Slides apresentados em Unb, Requisitos de Software, 2024.

Mind the Product. "O que é MVP?". Mind the Product. Acesso em 15 dez. 2024. Disponível em: https://www.mindtheproduct.com/what-is-an-mvp-minimum-viable-product/

Ries, Eric. The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses. Crown Business, 2011.

SCHWABER, Ken; SUTHERLAND, Jeff. Guia do Scrum: O guia definitivo para o Scrum: As regras do jogo. Scrum Guides, 2020. Disponível em: https://scrumguides.org. Acesso em: 15 dez. 2024.

SCRUM ALLIANCE. What is a product backlog? Scrum Alliance, 2024. Disponível em: https://www.scrumalliance.org. Acesso em: 15 dez. 2024.

##  Histórico de Versão

| **Data** | **Versão** | **Descrição** | **Autor** |
| :------: | :--------: | :----------:  | :-------: |
| 20/11/2024| 2.0| Criação do documento | Breno Lucena, Breno Fernandes, Storch, João, Rafael e Renan |