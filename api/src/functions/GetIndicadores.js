const { app } = require('@azure/functions');
const { chamados } = require('./GetChamados');

app.http('GetIndicadores', {
  methods: ['GET'],
  authLevel: 'anonymous',
  route: 'indicadores',
  handler: async () => {
    const indicadores = chamados.reduce(
      (acc, chamado) => {
        acc.total += 1;
        if (chamado.status === 'Aberto') acc.abertos += 1;
        if (chamado.status === 'Em andamento') acc.emAndamento += 1;
        if (chamado.status === 'Resolvido') acc.resolvidos += 1;
        return acc;
      },
      { total: 0, abertos: 0, emAndamento: 0, resolvidos: 0 }
    );

    return {
      status: 200,
      jsonBody: indicadores,
      headers: { 'Content-Type': 'application/json' }
    };
  }
});
