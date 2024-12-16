# Especificação dos Requisitos

Abaixo estão os cartões e as confirmações das histórias selecionadas para o primeiro ciclo de desenvolvimento do projeto:

## Épico 1: Cadastrar Usuários

**US-01:** Eu como usuário quero cadastrar uma conta para de minhas informações no sistema.

### Cenário 1: Cadastro Completo com Sucesso
- **Dado que** o usuário está na página de cadastro,
- **Quando** ele preencher todos os campos obrigatórios (Nome Completo, E-mail, Senha, Confirmação de Senha e Cargo) e clicar em "Cadastrar",
- **Então** o sistema deverá criar a conta e exibir a mensagem de sucesso: "Conta cadastrada com sucesso."

---

### Cenário 2: Validação de Campos Obrigatórios
- **Dado que** o usuário tenta cadastrar uma conta,
- **Quando** ele deixar de preencher um ou mais campos obrigatórios (Nome Completo, E-mail, Senha, Confirmação de Senha ou Cargo),
- **Então** o sistema deverá exibir mensagens de erro específicas indicando os campos que precisam ser preenchidos.

---

### Cenário 3: Verificação de Dados Duplicados
- **Dado que** o usuário tenta cadastrar uma conta com um e-mail já registrado,
- **Quando** ele clicar em "Cadastrar",
- **Então** o sistema deverá exibir a mensagem de erro: "E-mail já cadastrado. Tente fazer cadastro com outro e-mail ou faça login."

---

### Cenário 4: Validação do Formato de E-mail
- **Dado que** o usuário tenta cadastrar uma conta,
- **Quando** ele informar um endereço de e-mail que não segue o formato padrão (ex.: "nome@dominio.com"),
- **Então** o sistema deverá exibir a mensagem de erro: "Insira um e-mail válido."

---

### Cenário 5: Confirmação de E-mail
- **Dado que** o usuário tenta cadastrar uma conta,
- **Quando** ele informar um endereço de e-mail válido no formato,
- **Então** o sistema deverá enviar um e-mail de confirmação para validar a conta.

---

### Cenário 6: Confirmação de Senha
- **Dado que** o usuário tenta cadastrar uma conta,
- **Quando** ele preencher a senha e a confirmação de senha com valores diferentes,
- **Então** o sistema deverá exibir a mensagem de erro: "As senhas não coincidem."

---

### Cenário 7: Validação de Senha Segura
- **Dado que** o usuário tenta cadastrar uma conta,
- **Quando** ele informar uma senha que não atende aos critérios (ex.: pelo menos 8 caracteres, incluindo letras, números, letras maiúsculas e caracteres especiais),
- **Então** o sistema deverá exibir a mensagem de erro: "A senha deve conter no mínimo 8 caracteres, incluindo letras, números, letras maiúsculas e caracteres especiais."

---

### Cenário 8: Armazenamento Seguro
- **Dado que** o usuário cadastrou a conta com sucesso,
- **Quando** o sistema armazenar os dados,
- **Então** as senhas deverão ser criptografadas no banco de dados.

---

## Épico 2: Logar Usuário

**US-02:** Eu como usuário quero realizar login na conta cadastrada para ter acesso aos recursos e funcionalidades da plataforma.

### Cenário 1: Login Bem-Sucedido
- **Dado que** o usuário está na página de login,
- **Quando** ele informar e-mail e senha corretos de uma conta existente,
- **Então** o sistema deverá:
  - Autenticar o usuário,
  - Redirecioná-lo para a página inicial.

---

### Cenário 2: Validação de Campos Obrigatórios
- **Dado que** o usuário está na página de login,
- **Quando** ele tentar fazer login sem preencher o campo de e-mail ou senha,
- **Então** o sistema deverá exibir uma mensagem de erro indicando o campo obrigatório ausente, como:
  - "O campo 'E-mail' é obrigatório."
  - "O campo 'Senha' é obrigatório."

---

### Cenário 3: Conta Inexistente
- **Dado que** o usuário tenta fazer login,
- **Quando** ele informar um e-mail que não está associado a nenhuma conta cadastrada,
- **Então** o sistema deverá exibir a mensagem de erro: "Nenhuma conta encontrada com este e-mail."

---

### Cenário 4: Senha Incorreta
- **Dado que** o usuário tenta fazer login,
- **Quando** ele informar um e-mail válido, mas uma senha incorreta,
- **Então** o sistema deverá exibir a mensagem de erro: "Senha incorreta. Tente novamente."

---

### Cenário 5: Logout
- **Dado que** o usuário está autenticado,
- **Quando** ele clicar no botão de logout,
- **Então** o sistema deverá:
  - Encerrar a sessão do usuário,
  - Redirecioná-lo para a página inicial de login.

---

## Épico 3: Visualizar Usuário

**US-03:** Eu como usuário quero visualizar meus dados cadastrais para verificar as informações imputadas no sistema.

### Cenário 1: Usuário Visualiza Seus Dados Cadastrais
- **Dado que** o usuário possui uma conta cadastrada e está autenticado na plataforma,
- **Quando** ele acessar a seção "Perfil" ou "Minha Conta",
- **Então** o sistema deverá exibir os seguintes dados cadastrais do usuário:
  - Nome Completo,
  - E-mail,
  - Cargo.

---

### Cenário 2: Botão para Editar Perfil
- **Dado que** o usuário está na seção "Perfil" ou "Minha Conta",
- **Quando** visualizar seus dados cadastrais,
- **Então** o sistema deverá :
- Exibir um botão "Editar Perfil",
- Ao clicar no botão, o sistema deverá redirecionar o usuário para a página de edição de perfil.

---

## Épico 4: Editar Usuário

**US-04:** Eu como usuário poderia editar meus dados cadastrais para gerenciamento de erros de registro e atualização de informações.

### Cenário 1: Edição de Nome e Cargo com Sucesso
- **Dado que** o usuário esteja autenticado e na página de edição de perfil,
- **Quando** ele editar os campos "Nome Completo" e "Cargo" e clicar em "Salvar Alterações",
- **Então** o sistema deverá:
  - Solicitar a senha do usuário para confirmação,
  - Validar a senha fornecida,
  - Atualizar os dados cadastrados com sucesso,
  - Exibir a mensagem: "Dados atualizados com sucesso."

---

### Cenário 2: Editar a Senha
- **Dado que** o usuário esteja autenticado e na página de edição de senha,
- **Quando** ele preencher os campos "Nova Senha" e "Confirmar Nova Senha",
- **E** informar a senha antiga para validação,
- **Então** o sistema deverá:
  - Validar a senha antiga,
  - Garantir que "Nova Senha" e "Confirmar Nova Senha" sejam idênticas,
  - Atualizar a senha do usuário com sucesso,
  - Exibir a mensagem: "Senha atualizada com sucesso."

---

## Épico 5: Desativar Usuário

**US-05:** Eu como usuário poderia desativar o meu cadastro no sistema para os casos de desligamento com a empresa / área.

### Cenário 1: Solicitação de Desativação
- **Dado que** o usuário está autenticado no sistema,
- **Quando** ele acessar as configurações da conta e selecionar a opção "Desativar Conta",
- **Então** o sistema deverá:
  - Exibir uma mensagem de confirmação, como: "Tem certeza de que deseja desativar sua conta?",
  - Informar as consequências da desativação, como: "Você não terá mais acesso ao sistema após a desativação.",
  - Confirmar a solicitação do usuário,
  - Desativar a conta imediatamente,
  - Realizar o logout automático do usuário.

---

### Cenário 2: Bloqueio de Acesso
- **Dado que** a conta do usuário foi desativada,
- **Quando** ele tentar fazer login novamente,
- **Então** o sistema deverá:
  - Bloquear o acesso ao sistema,
  - Exibir a mensagem de erro: "Sua conta foi desativada."

---

### Cenário 3: Reativação de Conta Após Desativação
- **Dado que** a conta do usuário foi desativada,
- **Quando** ele quiser acessar o sistema novamente,
- **Então** o sistema deverá exigir que o usuário realize um novo cadastro para criar uma conta ativa.

---

## Épico 6: Recuperar Senha

**US-06:** Eu como usuário devo conseguir recuperar uma senha cadastrada para eventuais situações de esquecimento das informações de acesso.

### Cenário 1: Solicitação de Recuperação de Senha
- **Dado que** o usuário está na tela de login e não se lembra da senha,
- **Quando** ele clicar na opção "Esqueceu a senha?" e inserir o e-mail cadastrado,
- **Então** o sistema deverá:
  - Verificar se o e-mail está cadastrado,
  - Enviar um e-mail com instruções e um link para redefinir a senha,
  - Exibir a mensagem: "Um e-mail com instruções para redefinir sua senha foi enviado."

---

### Cenário 2: Tentativa de Recuperação com E-mail Não Cadastrado
- **Dado que** o usuário está na tela de recuperação de senha,
- **Quando** ele inserir um e-mail que não está cadastrado no sistema,
- **Então** o sistema deverá:
  - Exibir a mensagem: "E-mail não encontrado. Verifique as informações ou cadastre-se."

---

### Cenário 3: Redefinição de Senha por Link Enviado
- **Dado que** o usuário recebeu o link de redefinição de senha no e-mail,
- **Quando** ele clicar no link e acessar a página de redefinição,
- **Então** o sistema deverá:
  - Permitir que o usuário insira uma nova senha,
  - Validar os requisitos da nova senha (ex.: tamanho mínimo, letras maiúsculas, caracteres especiais, etc.),
  - Confirmar a alteração da senha,
  - Exibir a mensagem: "Sua senha foi redefinida com sucesso."

---

### Cenário 4: Expiração do Link de Redefinição
- **Dado que** o usuário recebeu o link de redefinição de senha,
- **Quando** ele tentar utilizá-lo após o período de validade (ex.: 24 horas),
- **Então** o sistema deverá:
  - Exibir a mensagem: "O link expirou. Solicite uma nova redefinição de senha."

---

## Épico 7: Cadastrar Microorganismos Observados

**US-07:** Eu como usuário, quero cadastrar no sistema um microrganismo observado pelo programa para que eu possa registrar informações detalhadas e manter um histórico organizado para análise.

### Cenário 1: O Usuário Realiza o Primeiro Cadastro de um Microorganismo no Banco
- **Dado que** um usuário deseja cadastrar um microorganismo no banco,
- **Quando** ele tenta realizar um registro,
- **Então** o sistema deverá:
  - Exigir o preenchimento dos seguintes campos obrigatórios:
    - Nome do microorganismo,
    - Descrição,
    - Limites de contagem,
    - Níveis de alerta.
  - Validar que todos os campos obrigatórios foram preenchidos corretamente,
  - Exibir a mensagem de sucesso: "Microorganismo cadastrado com sucesso."

---

### Cenário 2: O Usuário Tenta Realizar o Cadastro de um Microorganismo Já Cadastrado

- **Dado que** um usuário tenta cadastrar um microorganismo que já está registrado no banco,
- **Quando** ele tenta realizar o registro,
- **Então** o sistema deverá:
  - Verificar se já existe um registro com o mesmo nome no banco de dados,
  - Exibir uma mensagem de notificação: "Este microorganismo já está cadastrado no sistema. Verifique os dados ou atualize o registro existente."

---

## Épico 8: Listar Microorganismos Observados

**US-08:** Eu como usuário, quero listar os microorganismos observados pelo programa a fim de visualizar os microrganismos cadastrados no sistema.

### Cenário 1: O Usuário Acessa os Registros de Microorganismos
- **Dado que** um usuário deseja acessar os registros de microorganismos,
- **Quando** ele acessar a página de informações,
- **Então** o sistema deverá:
  - Exibir uma listagem contendo os microorganismos cadastrados no banco,
  - Apresentar os seguintes campos principais para cada microorganismo:
    - Nome do microorganismo,
    - Descrição,
    - Limites de contagem,
    - Níveis de alerta.

---

## Épico 9: Editar Microorganismos Observados

**US-09:** Eu como usuário, quero editar os registros de microorganismos cadastrados a fim de gerenciamento de erros de registro e atualização de informações.

### Cenário 1: O Usuário Tenta Editar uma Informação de um Microorganismo Cadastrado
- **Dado que** um usuário acessa a informação de um microorganismo,
- **Quando** ele tenta realizar uma modificação nas informações,
- **Então** o sistema deverá:
  - Exibir um alerta de confirmação sobre a edição de dados, como: "Tem certeza de que deseja editar as informações deste microorganismo?",
  - Permitir que o usuário confirme ou cancele a ação,
  - Caso confirmado, salvar as alterações e exibir a mensagem: "Informações atualizadas com sucesso."

---

### Cenário 2: O Usuário Tenta Desativar um Microorganismo
- **Dado que** um usuário acessa a informação de um microorganismo,
- **Quando** ele tenta desativar o microorganismo observado,
- **Então** o sistema deverá:
  - Exibir um alerta de confirmação sobre a desativação, como: "Tem certeza de que deseja desativar este microorganismo? Esta ação não pode ser desfeita.",
  - Após a confirmação, desativar o microorganismo e exibir a mensagem: "Microorganismo desativado com sucesso.",
  - Bloquear futuras edições nas informações do microorganismo desativado.

---