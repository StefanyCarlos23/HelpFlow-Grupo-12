# Prompt para geração do frontend --- HelpFlow

**Ferramenta utilizada:** Bolt AI Builder - Websites, apps e
prototypes

O frontend foi gerado utilizando o **Bolt AI Builder**, a partir do
prompt abaixo.

Crie o frontend de uma aplicação web chamada **HelpFlow**, um sistema
simples de gerenciamento de chamados de suporte de TI desenvolvido como
projeto acadêmico de Arquitetura de Software.

O objetivo é criar uma interface moderna, limpa, profissional e fácil de
utilizar, mas sem excesso de funcionalidades. O projeto será
posteriormente integrado a uma **Azure Function** que fornecerá dados
mockados de chamados através de um endpoint GET.

## Tecnologias

Utilize:

- React
- Vite
- Tailwind CSS
- Lucide React para os ícones
- Componentes reutilizáveis
- JavaScript ou TypeScript

Não implemente backend, banco de dados ou autenticação real.

A aplicação deve ser estruturada de forma que futuramente seja fácil
substituir os dados mockados por uma chamada para uma Azure Function.

---

# Identidade visual

O nome da aplicação é **HelpFlow**.

Crie uma identidade visual moderna baseada principalmente em tons de
roxo.

Cores sugeridas:

- Roxo principal: #7C3AED
- Roxo secundário: #8B5CF6
- Fundo claro: #F8F7FC
- Texto principal: #18181B
- Texto secundário: #71717A
- Bordas: #E4E4E7

Utilize fundo claro.

A interface deve transmitir a sensação de um sistema SaaS moderno,
semelhante a ferramentas como Linear, Notion e outros sistemas modernos
de produtividade.

Utilize:

- Bordas arredondadas
- Sombras suaves
- Espaçamento consistente
- Tipografia limpa
- Ícones simples
- Botões modernos
- Cards discretos

Evite excesso de gradientes, efeitos exagerados ou animações
desnecessárias.

A aplicação deve ser responsiva para desktop, tablet e dispositivos
móveis.

---

# Estrutura da aplicação

A aplicação deve possuir três telas principais:

1.  Login
2.  Cadastro de usuário
3.  Home

Utilize React Router para realizar a navegação entre as telas.

---

# Tela 1 - Login

Criar uma página de login centralizada.

A página deve possuir:

- Logo/nome "HelpFlow"
- Pequena descrição: "Gerencie seus chamados de forma simples e
  eficiente."
- Campo de e-mail
- Campo de senha
- Botão "Entrar"
- Link "Esqueci minha senha"
- Link "Criar uma conta"

O botão "Entrar" deve simular um login e redirecionar o usuário para a
Home.

Não é necessário implementar autenticação real.

O link "Criar uma conta" deve levar para a página de cadastro.

O design deve ser minimalista e profissional.

---

# Tela 2 - Cadastro de usuário

Criar uma página de cadastro com:

- Logo/nome "HelpFlow"
- Título "Criar sua conta"
- Nome completo
- E-mail
- Senha
- Confirmar senha
- Botão "Criar conta"
- Link "Já possui uma conta? Entrar"

O botão de cadastro pode apenas simular o cadastro e redirecionar para a
tela de Login.

Adicionar validações básicas nos campos:

- Campos obrigatórios
- Formato válido de e-mail
- Senha mínima
- Confirmação de senha

Não é necessário salvar os dados em banco.

---

# Tela 3 - Home

A Home deve ser a principal tela do sistema após o login.

Criar uma barra lateral ou navbar contendo:

- Logo HelpFlow
- Home
- Chamados
- Perfil
- Configurações

A navegação pode ser visual nesta primeira versão.

No topo da Home mostrar:

**"Olá, usuário!"**

E uma pequena mensagem:

**"Acompanhe seus chamados e mantenha tudo sob controle."**

---

# Indicadores da Home

Criar quatro cards simples:

- Total de chamados
- Chamados abertos
- Em andamento
- Resolvidos

Cada card deve possuir:

- Ícone
- Título
- Número
- Pequena descrição

Utilizar os seguintes dados inicialmente:

Total: 24

Abertos: 8

Em andamento: 6

Resolvidos: 10

Esses dados devem ser organizados de maneira que futuramente possam ser
substituídos pelos dados retornados da Azure Function.

---

# Chamados recentes

Na parte inferior da Home criar uma seção chamada:

**"Chamados recentes"**

Mostrar uma tabela ou lista contendo:

- ID
- Título
- Prioridade
- Status
- Responsável
- Data

Utilizar inicialmente dados mockados.

Exemplo:

Chamado #001

- Problema com acesso ao sistema
- Prioridade: Alta
- Status: Aberto
- Responsável: João
- Data: 24/08/2026

Chamado #002

- Computador não inicia
- Prioridade: Média
- Status: Em andamento
- Responsável: Maria
- Data: 23/08/2026

Chamado #003

- Erro no sistema de impressão
- Prioridade: Baixa
- Status: Resolvido
- Responsável: Carlos
- Data: 22/08/2026

Utilize badges visuais diferentes para os status e prioridades.

---

# Preparação para Azure Functions

Crie uma estrutura de serviço para a API, por exemplo:

`src/services/api.js`

Criar uma função responsável por buscar os chamados:

`getChamados()`

Inicialmente, essa função pode utilizar dados mockados.

Porém, deixe o código preparado para futuramente utilizar:

`GET /api/chamados`

A URL da API deve ficar isolada em uma variável de configuração para
facilitar sua substituição pela URL pública da Azure Function.

Exemplo conceitual:

```javascript
const API_URL = "URL_DA_AZURE_FUNCTION";

export async function getChamados() {
  const response = await fetch(`${API_URL}/api/chamados`);
  return response.json();
}
```

Não é necessário criar a Azure Function neste momento.

---

# Organização do código

Organize o projeto de forma simples e fácil de entender.

Sugestão:

src/

- components/

- pages/
  - Login/
  - Cadastro/
  - Home/

- services/

- data/

- App.jsx

- main.jsx

Crie componentes reutilizáveis quando fizer sentido.

Evite criar uma estrutura excessivamente complexa.

---

# Experiência do usuário

A aplicação deve:

- Ter navegação funcionando entre as três telas.
- Possuir estados de hover nos botões.
- Possuir feedback visual nos campos.
- Ser responsiva.
- Não apresentar erros no console.
- Utilizar textos em português do Brasil.
- Utilizar datas no formato brasileiro.
- Ter uma aparência consistente em todas as páginas.

---

# Importante

Este é um projeto acadêmico.

Priorize:

1.  Código simples e organizado.
2.  Interface profissional.
3.  Facilidade de manutenção.
4.  Componentes reutilizáveis.
5.  Preparação para integração com Azure Functions.
6.  Navegação funcional entre as telas.

Não adicionar funcionalidades que não foram solicitadas.

Não criar backend.

Não criar banco de dados.

Não implementar autenticação real.

Não utilizar informações fictícias excessivas.

O resultado final deve parecer um pequeno sistema SaaS real de
gerenciamento de chamados, mas permanecer simples o suficiente para ser
utilizado e apresentado por estudantes.
