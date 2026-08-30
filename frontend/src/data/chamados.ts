import type { Chamado, Indicadores } from '@/types/chamado';

export const chamadosMock: Chamado[] = [
  {
    id: '001', titulo: 'Problema com acesso ao sistema', descricao: 'Colaborador não consegue acessar o sistema interno.', tipo: 'Incidente', prioridade: 'Alta', status: 'Aberto', responsavel: 'João', solicitante: 'Ana Souza', data: '2026-08-24', prazo: '2026-08-31'
  },
  {
    id: '002', titulo: 'Computador não inicia', descricao: 'Estação de trabalho apresenta falha durante a inicialização.', tipo: 'Incidente', prioridade: 'Média', status: 'Em andamento', responsavel: 'Maria', solicitante: 'Carlos Lima', data: '2026-08-23', prazo: '2026-09-01'
  },
  {
    id: '003', titulo: 'Erro no sistema de impressão', descricao: 'Impressora não conclui trabalhos enviados pela rede.', tipo: 'Incidente', prioridade: 'Baixa', status: 'Resolvido', responsavel: 'Carlos', solicitante: 'Beatriz Costa', data: '2026-08-22', prazo: '2026-08-25'
  },
  {
    id: '004', titulo: 'Solicitação de acesso ao sistema', descricao: 'Novo colaborador precisa de acesso ao sistema corporativo.', tipo: 'Solicitação', prioridade: 'Média', status: 'Aberto', responsavel: 'João', solicitante: 'Lucas Mendes', data: '2026-08-21', prazo: '2026-09-02'
  },
  {
    id: '005', titulo: 'Atualização de software', descricao: 'Solicitação de atualização de software em notebook corporativo.', tipo: 'Solicitação', prioridade: 'Baixa', status: 'Em andamento', responsavel: 'Maria', solicitante: 'Mariana Alves', data: '2026-08-20', prazo: '2026-09-03'
  }
];

export const indicadoresMock: Indicadores = {
  total: chamadosMock.length,
  abertos: chamadosMock.filter((c) => c.status === 'Aberto').length,
  emAndamento: chamadosMock.filter((c) => c.status === 'Em andamento').length,
  resolvidos: chamadosMock.filter((c) => c.status === 'Resolvido').length,
};
