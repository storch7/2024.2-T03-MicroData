# DEFINIÇÕES

## USER CASE (UC)

Um caso de uso é uma descrição de um conjunto de ações ou comportamentos que o sistema deve realizar em resposta à interação de um ator (usuário ou outro sistema) com o sistema. Ele descreve as funções do sistema do ponto de vista do usuário final, detalhando as interações necessárias para atingir um objetivo específico.

## USER CASE DIAGRAM

Um diagrama de caso de uso é uma representação gráfica, comumente utilizada na modelagem de sistemas, que descreve as interações entre os atores e os casos de uso. Ele mostra como diferentes usuários ou sistemas (atores) interagem com as funcionalidades do sistema, representadas por elipses.

## Fluxo Principal

O **fluxo principal** (ou fluxo básico) descreve a sequência padrão de eventos que ocorrem durante a execução de um caso de uso. É o caminho que o caso de uso segue quando tudo ocorre conforme o esperado, sem desvios ou erros.

## Fluxo Alternativo

O **fluxo alternativo** descreve os caminhos alternativos que podem ser seguidos durante a execução de um caso de uso, geralmente quando condições ou requisitos adicionais precisam ser atendidos. Eles representam variações do fluxo principal, como escolhas do usuário ou diferentes formas de alcançar o objetivo.


O **fluxo de exceção** (ou fluxo alternativo de erro) descreve os cenários em que ocorrem falhas ou erros, ou condições inesperadas, durante a execução do caso de uso. Este fluxo descreve como o sistema deve reagir e como ele pode se recuperar dessas falhas ou condições anormais.

## Pré-condições

As **pré-condições** são as condições que devem ser verdadeiras ou atendidas antes de iniciar a execução de um caso de uso. Elas garantem que o sistema está em um estado adequado para realizar as operações descritas no caso de uso.

###Pós-condições

As **pós-condições** são as condições que devem ser verdadeiras após a execução de um caso de uso, ou seja, elas descrevem o estado do sistema após o caso de uso ser concluído com sucesso ou falha.

## Pontos de Extensão

Os **pontos de extensão** são locais específicos dentro de um caso de uso onde o comportamento pode ser estendido com a inclusão de funcionalidades adicionais ou variações de fluxo. Esses pontos permitem que novos comportamentos sejam incorporados sem alterar o fluxo básico do caso de uso.

## Requisitos Especiais

Os **requisitos especiais** referem-se a restrições, necessidades ou condições não funcionais que devem ser atendidas durante a execução de um caso de uso. Eles podem incluir questões de desempenho, segurança, usabilidade, compatibilidade ou outros aspectos que não dizem respeito diretamente à funcionalidade, mas que são essenciais para o sucesso da implementação.

---

# ESTUDO DE CASO - HOPEBRIDGE 

## DIAGRAMA DE CASO DE USO
O acesso ao Diagrama de caso de uso do estudo de caso pode ser feito no [link](https://lucid.app/lucidchart/64070169-e598-403a-86c6-0a9b84772d4e/edit?viewport_loc=102%2C-253%2C710%2C344%2C0_0&invitationId=inv_fb869553-bfb0-4fb0-9ba2-30559794ec6b).

O digrama completo também pode ser encontrado na imagem abaixo:

![](../assets/ucd/[HOPEBRIDGE]%20UCD.png)


### PERSONAS LEVANTADAS E SEUS CASOS DE USO
| **Persona** | **Caso de uso** | 
| :--------: | :--------: |
| Refugiado | Acessar programas de treinamento |
| Refugiado | Verificar vagas de abrigo |
| Refugiado | Verificar assistência médica |
| Refugiado | Acessar benefícios |
| Refugiado | Solicitar voucher |
| Refugiado | Acessar vagas de emprego |
| Refugiado | Compartilhar Experiências |
| Refugiado | Receber de participação em projetos |
| Refugiado | Acessar mapa |
| Refugiado | Traçar rota |
| Refugiado | Verificar opções de transporte |
| Agência Humanitária | Divulgar vagas de emprego |
| Agência Humanitária | Divulgar locais de Abrigo |
| Agência Humanitária | Divulgar programas de assistência médica |
| Agência Humanitária | Gerenciar vagas |
| Agência Humanitária | Anunciar vagas de trabalho |
| Agência Humanitária | Apresentar programas de capacitação |
| Empregadores Parceiros | Organizar entrevistas e processos seletivos |
| Empregadores Parceiros | Publicar vagas de emprego e programas de capacitação|
| Empregadores Parceiros | Receber candidaturas de refugiados |
| Empregadores Parceiros | Acompanhar desempenho de contratados |
| Administradores do Sistema | Manter a segurança do sistema |
| Administradores do Sistema | Analisar métricas de desempenho e uso|

## ESPECIFICAÇÕES DO CASO DE USO

### ESPECIFICAÇÃO DA ATIVIDADE
Cada membro da equipe deverá especificar um caso de uso do Estudo de caso escolhido. A equipe MicroData possui 6 membros ativos; portanto, foram especificados 6 casos de uso. odos os demais casos de uso devem ser apresentadas as suas breves descrições. São os casos de uso especificados:

- [ESPECIFICAÇÃO DE CASO DE USO 1: ACESSAR MAPA](/uc/especificacoes/01/)
- [ESPECIFICAÇÃO DE CASO DE USO 2: TRAÇAR ROTA](/uc/especificacoes/02/)
- [ESPECIFICAÇÃO DE CASO DE USO 3: VERIFICAR OPÇÕES DE TRANSPORTE](/uc/especificacoes/03/)
- [ESPECIFICAÇÃO DE CASO DE USO 4: ACESSAR VAGAS DE EMPREGO](/uc/especificacoes/04/)
- [ESPECIFICAÇÃO DE CASO DE USO 5: ACESSAR BENEFÍCIOS](/uc/especificacoes/05/)
- [ESPECIFICAÇÃO DE CASO DE USO 6: VERIFICAR ASSISTÊNCIA MÉDICA](/uc/especificacoes/06/)

## DEMAIS CASO DE USO E DESCRIÇÕES POR PERSONA

| **Persona** | **Caso de Uso** | **Descrição** |
|---------|------------|-------------|
| Agência Humanitária | Divulgar vagas de emprego | Permitir que a agência publique oportunidades de trabalho para a comunidade.  |
| Agência Humanitária | Divulgar locais de Abrigo | Fornecer informações sobre abrigos disponíveis para pessoas em situação de vulnerabilidade. |
| Agência Humanitária | Divulgar programas de assistência médica | Informar a população sobre programas de saúde acessíveis. |
| Agência Humanitária | Gerenciar vagas | Administrar e atualizar informações sobre vagas de emprego e programas sociais. |
| Agência Humanitária | Anunciar vagas de trabalho | Publicar oportunidades de emprego para beneficiar a comunidade. |
| Agência Humanitária | Apresentar programas de capacitação | Divulgar cursos e treinamentos para desenvolvimento profissional. |
| Empregadores Parceiros | Organizar entrevistas e processos seletivos | Os empregadores parceiros podem organizar entrevistas e estruturar processos seletivos para candidatos refugiados dentro da plataforma.Isso torna a seleção mais ágil, melhora a experiência dos envolvidos e aumenta a taxa de contratação de refugiados|
| Empregadores Parceiros | Publicar vagas de emprego e programas de capacitação| Os empregadores parceiros podem divulgar oportunidades de emprego e programas de capacitação voltados para refugiados, ampliando o alcance dessas iniciativas. Isso resulta em um maior preenchimento das vagas por candidatos qualificados e promove a capacitação profissional, facilitando a inclusão no mercado de trabalho.|
| Empregadores Parceiros | Receber candidaturas de refugiados | Os empregadores parceiros podem visualizar e gerenciar as candidaturas enviadas pelos refugiados para as vagas publicadas, o que facilitará a triagem e o gerenciamento dessas candidaturas. Isso resultará em maior eficiência no recrutamento, melhor compatibilidade entre vagas e candidatos, redução do tempo para preencher as posições e aumento da transparência no processo seletivo.|
| Empregadores Parceiros | Acompanhar desempenho de contratados | Os empregadores poderão utilizar a plataforma para monitorar o progresso dos funcionários, acompanhando seu desempenho e adaptação ao novo ambiente de trabalho. Isso contribuirá para o desenvolvimento contínuo dos colaboradores, resultando em maior satisfação tanto para os empregadores quanto para os refugiados contratados, além de fortalecer a inclusão dentro da empresa.|


# REFERÊNCIAS

1. **OMG (Object Management Group).** (2017). *Unified Modeling Language (UML) Specification*. Disponível em: https://www.omg.org/spec/UML/2.5/
   
2. **SOMMERVILLE, Ian.** (2011). *Engenharia de Software* (9ª ed.). São Paulo: Pearson Education do Brasil.

3. **GOLDSCHMIDT, Marilda.** (2004). *Análise e Projeto de Sistemas Orientados a Objetos*. São Paulo: Editora Pearson.

##  Histórico de Versão

| **Data**    | **Versão** | **Descrição** | **Autor** |
| :--------: | :--------: | :--------:  | :--------: | 
|      10/02/2025      |      1.0       |      Criação do documento       |     Breno Fernandes, Breno Lucena, Storch, João, Rafael e Renan     |