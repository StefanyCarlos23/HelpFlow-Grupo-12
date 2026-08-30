export type Prioridade = 'Alta' | 'Média' | 'Baixa';
export type Status = 'Aberto' | 'Em andamento' | 'Resolvido';
export type TipoChamado = 'Incidente' | 'Solicitação';

export interface Chamado {
  id: string;
  titulo: string;
  descricao?: string;
  tipo?: TipoChamado;
  prioridade: Prioridade;
  status: Status;
  responsavel: string;
  solicitante?: string;
  data: string;
  prazo?: string;
}

export interface Indicadores {
  total: number;
  abertos: number;
  emAndamento: number;
  resolvidos: number;
}
