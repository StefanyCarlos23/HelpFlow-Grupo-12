const { app } = require('@azure/functions');
const { chamados } = require('./GetChamados');

app.http('GetChamadoPorId', {
  methods: ['GET'],
  authLevel: 'anonymous',
  route: 'chamados/{id}',
  handler: async (request) => {
    const chamado = chamados.find((item) => item.id === request.params.id);

    if (!chamado) {
      return {
        status: 404,
        jsonBody: { mensagem: 'Chamado não encontrado.' }
      };
    }

    return {
      status: 200,
      jsonBody: chamado,
      headers: { 'Content-Type': 'application/json' }
    };
  }
});
