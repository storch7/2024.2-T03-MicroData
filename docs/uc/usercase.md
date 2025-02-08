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

## ESPECIFICAÇÕES DO CASO DE USO


# REFERÊNCIAS

1. **OMG (Object Management Group).** (2017). *Unified Modeling Language (UML) Specification*. Disponível em: https://www.omg.org/spec/UML/2.5/
   
2. **SOMMERVILLE, Ian.** (2011). *Engenharia de Software* (9ª ed.). São Paulo: Pearson Education do Brasil.

3. **GOLDSCHMIDT, Marilda.** (2004). *Análise e Projeto de Sistemas Orientados a Objetos*. São Paulo: Editora Pearson.