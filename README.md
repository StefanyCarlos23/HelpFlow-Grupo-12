# HelpFlow — Sistema de Gerenciamento de Chamados

Sistema web desenvolvido para gerenciamento de chamados de suporte de TI, como parte do projeto acadêmico de Arquitetura de Software.

## Tecnologias

- React
- Vite
- TypeScript
- Tailwind CSS
- Lucide React
- Azure Functions
- Azure Static Web Apps

## Funcionalidades

- Login e cadastro de usuários
- Dashboard com indicadores de chamados
- Visualização de chamados recentes
- Consulta de chamados por meio de API

## Integração com Azure

O frontend se comunica com uma **Azure Function** por meio de um endpoint GET que fornece dados mockados de chamados.

Endpoint:

```text
GET /api/chamados
```

## Links

- **GitHub:** [https://github.com/StefanyCarlos23/HelpFlow-Grupo-12](https://github.com/StefanyCarlos23/HelpFlow-Grupo-12)

- **Azure Static Web Apps:** [https://gentle-sand-06fdb9e10.7.azurestaticapps.net](https://gentle-sand-06fdb9e10.7.azurestaticapps.net)

- **Azure Function:** [https://gentle-sand-06fdb9e10.7.azurestaticapps.net/api/chamados](https://gentle-sand-06fdb9e10.7.azurestaticapps.net/api/chamados)

## IAG

O frontend foi desenvolvido com auxílio do **Bolt AI Builder — Websites, apps e prototypes**.

O prompt utilizado está disponível no arquivo [`Prompt.md`](Prompt.md).

## Grupo

Os integrantes do grupo estão disponíveis no arquivo [`GRUPO.md`](GRUPO.md).
