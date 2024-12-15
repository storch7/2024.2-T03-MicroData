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
A especificação de funcionalidades segue o framework de User Stories (Histórias de usuário); cada épico levantado no backlog deu origem a uma história de usuário e seu respectivo índice. Segue abaixo a tabela com os temas, épicos e suas respectivas user stories:

| INDEX  | TEMA                               | ÉPICO                                             | US                                                                                                                                         |
|--------|------------------------------------|--------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| RF-01  | ACESSO E LOGIN                    | CADASTRAR USUÁRIO                                | Eu como usuário quero cadastrar uma conta para de minhas informações no sistema.                                                         |
| RF-02  | ACESSO E LOGIN                    | LOGAR USUÁRIO                                    | Eu como usuário quero realizar login na conta cadastrada para ter acesso aos recursos e funcionalidades da plataforma.                    |
| RF-03  | ACESSO E LOGIN                    | VISUALIZAR USUÁRIO                               | Eu como usuário quero visualizar meus dados cadastrais para verificar as informações imputadas no sistema.                                |
| RF-04  | ACESSO E LOGIN                    | EDITAR USUÁRIO                                   | Eu como usuário poderia editar meus dados cadastrais para gerenciamento de erros de registro e atualização de informações.                |
| RF-05  | ACESSO E LOGIN                    | DESATIVAR USUÁRIO                                | Eu como usuário poderia desativar o meu cadastro no sistema para os casos de desligamento com a empresa / área.                          |
| RF-06  | ACESSO E LOGIN                    | RECUPERAR SENHA DE USUÁRIO                       | Eu como usuário devo conseguir recuperar uma senha cadastrada para eventuais situações de esquecimento das informações de acesso.         |
| RF-07  | MICROORGANISMOS                   | CADASTRAR MICROORGANISMOS OBSERVADOS            | Eu como usuário, quero cadastrar no sistema um microrganismo observado pelo programa para que eu possa registrar informações detalhadas. |
| RF-08  | MICROORGANISMOS                   | LISTAR MICROORGANISMOS OBSERVADOS               | Eu como usuário, quero listar os microorganismos observados pelo programa a fim de visualizar os microrganismos cadastrados no sistema.  |
| RF-09  | MICROORGANISMOS                   | EDITAR MICROORGANISMOS OBSERVADOS               | Eu como usuário, quero editar os registros de microorganismos cadastrados a fim de gerenciamento de erros de registro.                   |
| RF-10  | MICROORGANISMOS                   | DESATIVAR MICROORGANISMOS OBSERVADOS            | Eu como usuário quero poder desativar algum microorganismo cadastrado no sistema a fim de remover aqueles que já tiveram seus dados adquiridos. |
| RF-11  | MICROORGANISMOS                   | INSERIR NIVEIS DE ALERTA DA CONTAGEM            | Eu como usuário, quero poder ver níveis de alerta a respeito da contagem de microorganismos a fim de ser notificado de resultados inesperados. |
| RF-12  | MICROORGANISMOS                   | BUSCAR MICROORGANISMOS OBSERVADOS               | Eu como usuário, quero buscar microoranismos cadastrados no sistema para encontrar rapidamente o local desejado de forma eficiente.       |
| RF-13  | PONTOS (LOCAIS) AVALIADOS         | CADASTRAR LOCAIS DE COLETA AVALIADOS            | Eu como usuário, quero cadastrar os locais de coleta microbiológica a fim de acompanhar as contagens de microrganismos presentes.         |
| RF-14  | PONTOS (LOCAIS) AVALIADOS         | LISTAR LOCAIS DE COLETA AVALIADOS               | Eu como usuário, quero listar todos os locais de coleta cadastrados no sistema a fim de visualizar os registros de pontos do monitoramento. |
| RF-15  | PONTOS (LOCAIS) AVALIADOS         | EDITAR LOCAIS DE COLETA AVALIADOS               | Eu como usuário, quero editar os locais de coleta cadastrados no sistema a fim de adicionar ou retirar dados pertinentes.                 |
| RF-16  | PONTOS (LOCAIS) AVALIADOS         | DESATIVAR LOCAIS DE COLETA AVALIADOS            | Eu como usuário, quero desativar locais de coleta cadastrados no sistema para remover aqueles que não serão mais utilizados.              |
| RF-17  | PONTOS (LOCAIS) AVALIADOS         | BUSCAR LOCAIS DE COLETA AVALIADOS               | Eu como usuário, quero buscar locais cadastrados no sistema para encontrar rapidamente o local desejado de forma eficiente.               |
| RF-18  | RESULTADOS DO MONITORAMENTO       | ADICIONAR A CONTAGEM DE MICROORGANISMOS         | Eu como usuário, quero registrar a contagem de microrganismos de uma dada coleta para registrar informações detalhadas.                   |
| RF-19  | RESULTADOS DO MONITORAMENTO       | LISTAR A CONTAGEM DE MICROORGANISMOS            | Eu como usuário, quero listar as contagens de microrganismos registradas para análise organizada.                                         |
| RF-20  | RESULTADOS DO MONITORAMENTO       | EDITAR O REGISTRO DE CONTAGEM                   | Eu como usuário quero editar o registro de contagem de microrganismos para corrigir erros ou atualizar informações relevantes.           |
| RF-21  | RESULTADOS DO MONITORAMENTO       | INSERIR AÇÕES CORRETIVAS                        | Eu como usuário devo inserir ações corretivas para resultados acima do limite de contagem para registro de controle mais efetivo.        |
| RF-22  | RESULTADOS DO MONITORAMENTO       | FILTRAR UM RESULTADO DE COLETA                  | Eu como usuário, quero aplicar filtros aos resultados de coleta microbiológica para localizar informações específicas.                   |
| RF-23  | DASHBOARD                         | VISUALIZAR RESULTADOS DOS PONTOS               | Como usuário, quero visualizar no dashboard os resultados de coleta para cada ponto.                                                     |
| RF-24  | DASHBOARD                         | VISUALIZAR PONTOS ACIMA DO LIMITE               | Como usuário, quero que o dashboard destaque os pontos que excederem o limite de contagem.                                               |
| RF-25  | DASHBOARD                         | VISUALIZAR RESULTADOS POR NÍVEL DE ALERTA       | Como usuário, quero visualizar os resultados agrupados por nível de alerta para facilitar a análise.                                     |
| RF-26  | DASHBOARD                         | FILTRAR RESULTADOS POR MICROORGANISMO          | Como usuário, quero filtrar os resultados por micro-organismo, para avaliar padrões específicos.                                         |
| RF-27  | DASHBOARD                         | FILTRAR RESULTADOS POR LOCAL                   | Como usuário, quero filtrar os resultados por local de coleta, para analisar os dados de uma área específica.                            |
| RF-28  | DASHBOARD                         | FILTRAR RESULTADOS POR PERÍODO                 | Como usuário, quero filtrar os resultados por período de tempo, para entender variações ao longo de intervalos.                          |
| RF-29  | LOCALIZAÇÃO DE INFORMAÇÕES        | INSERIR A PLANTA BAIXA                          | Como usuário, eu quero inserir a planta baixa para referência dos locais de coleta.                                                     |
| RF-30  | LOCALIZAÇÃO DE INFORMAÇÕES        | EXCLUIR A PLANTA BAIXA                          | Como usuário, eu quero excluir uma planta baixa cadastrada para atualizar ou remover informações desatualizadas.                        |
| RF-31  | LOCALIZAÇÃO DE INFORMAÇÕES        | DELIMITAR OS LOCAIS DE COLETA                  | Como usuário eu quero delimitar os locais de coleta na planta baixa.                                                                     |
| RF-32  | LOCALIZAÇÃO DE INFORMAÇÕES        | APRESENTAR LOCAIS ATIVOS                        | Como usuário, eu quero visualizar locais ativos em um determinado período na planta baixa.                                               |
| RF-33  | LOCALIZAÇÃO DE INFORMAÇÕES        | LISTAR MICROORGANISMOS POR OPERADOR            | Como usuário, eu quero listar a contagem de microrganismos identificados por operador.                                                   |
| RF-34  | LOCALIZAÇÃO DE INFORMAÇÕES        | HISTÓRICO DE MODIFICAÇÕES                       | Como auditor ou usuário, eu quero visualizar o histórico de modificações para rastreabilidade.                                           |
| RF-35  | LOCALIZAÇÃO DE INFORMAÇÕES        | INSERIR IMAGEM DE LOCAIS                        | Como operador ou administrador, eu quero inserir uma imagem do local de coleta para facilitar o dia a dia.                              |
| RF-36  | LOCALIZAÇÃO DE INFORMAÇÕES        | EXCLUIR IMAGEM DE LOCAIS                        | Como operador ou administrador, eu quero excluir uma imagem para remover informações incorretas ou desatualizadas.                      |


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