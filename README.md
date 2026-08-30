# HelpFlow — Sistema de Gerenciamento de Chamados

Projeto acadêmico PJBL de um sistema para registrar, classificar e acompanhar chamados de Tecnologia da Informação.

O frontend foi desenvolvido em React + TypeScript e se comunica com uma Azure Function utilizando endpoints GET e dados mockados. A aplicação possui dashboard de chamados e tela de detalhes de um chamado.

## 🔗 Links da entrega

- **GitHub:** `COLE_AQUI_O_LINK_PUBLICO_DO_REPOSITORIO`
- **Azure Static Web Apps:** `COLE_AQUI_A_URL_DO_AZURE_STATIC_WEB_APPS`
- **Azure Function:** `COLE_AQUI_A_URL_PUBLICA_DA_AZURE_FUNCTION`
- **Apidog:** não utilizado; o mock é retornado diretamente pela Azure Function.

> Após a publicação, substitua os três campos acima pelos links públicos reais.

## Funcionalidades / telas

1. **Login** (`/`) — entrada do usuário no sistema.
2. **Cadastro** (`/cadastro`) — cadastro de usuário.
3. **Dashboard** (`/home`) — consulta indicadores e chamados recentes.
4. **Detalhes do chamado** (`/chamados/:id`) — consulta informações, responsável, prazo e histórico de atendimento.

## Integração com Azure Functions

O frontend consome:

- `GET /api/chamados` — retorna uma lista de chamados mockados.
- `GET /api/indicadores` — retorna os indicadores do dashboard.
- `GET /api/chamados/{id}` — retorna os dados de um chamado específico.

No Azure Static Web Apps, o frontend utiliza `/api` para acessar as Azure Functions integradas ao aplicativo.

## Arquitetura

```text
HelpFlow
├── frontend/                  # React + TypeScript + Vite
│   └── src/
│       ├── components/
│       ├── data/              # mocks locais para desenvolvimento opcional
│       ├── pages/
│       ├── services/          # comunicação HTTP com a API
│       └── types/
├── api/                       # Azure Functions - Node.js
│   └── src/functions/
│       ├── GetChamados.js
│       ├── GetIndicadores.js
│       └── GetChamadoPorId.js
├── .github/workflows/         # deploy automático
├── GRUPO.md                   # integrantes
├── Prompt.md                 # uso de IAG
└── README.md
```

## Execução local

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Para testar somente com os dados locais:

```bash
VITE_USE_MOCK=true npm run dev
```

### Azure Functions

É necessário ter o Azure Functions Core Tools instalado.

```bash
cd api
npm install
npm start
```

A API ficará disponível, localmente, em `http://localhost:7071`.

Endpoints:

```text
GET http://localhost:7071/api/chamados
GET http://localhost:7071/api/indicadores
GET http://localhost:7071/api/chamados/001
```

Para executar frontend e API juntos, recomenda-se utilizar o Azure Static Web Apps CLI.

## Publicação no Azure Static Web Apps

O workflow em `.github/workflows/azure-static-web-apps.yml` está configurado para:

- App location: `/frontend`
- API location: `/api`
- Output location: `dist`

No GitHub, configure o segredo `AZURE_STATIC_WEB_APPS_API_TOKEN` com o token do recurso Azure Static Web Apps.

Depois de realizar o primeiro deploy, copie a URL pública gerada pelo Azure para esta documentação e para a entrega no AVA.

## IAG

O grupo utilizou IA generativa para auxiliar na criação e adaptação do frontend. O prompt utilizado está documentado em [Prompt.md](./Prompt.md).

## Grupo

Os integrantes estão registrados em [GRUPO.md](./GRUPO.md).
