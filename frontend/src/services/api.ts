import type { Chamado, Indicadores } from '@/types/chamado';
import { chamadosMock, indicadoresMock } from '@/data/chamados';

// Em produção no Azure Static Web Apps, use /api para aproveitar a integração
// entre o frontend e a Azure Function. Para desenvolvimento local, o Vite
// também utiliza /api quando executado via Azure Static Web Apps CLI.
export const API_URL = import.meta.env.VITE_API_URL || '';
const USE_MOCK = import.meta.env.VITE_USE_MOCK === 'true';

async function getJson<T>(path: string): Promise<T> {
  const response = await fetch(`${API_URL}${path}`);
  if (!response.ok) {
    throw new Error(`Erro na API (${response.status})`);
  }
  return (await response.json()) as T;
}

export async function getChamados(): Promise<Chamado[]> {
  if (USE_MOCK) return [...chamadosMock];
  return getJson<Chamado[]>('/api/chamados');
}

export async function getIndicadores(): Promise<Indicadores> {
  if (USE_MOCK) return { ...indicadoresMock };
  return getJson<Indicadores>('/api/indicadores');
}

export async function getChamadoPorId(id: string): Promise<Chamado> {
  if (USE_MOCK) {
    const chamado = chamadosMock.find((item) => item.id === id);
    if (!chamado) throw new Error('Chamado não encontrado.');
    return { ...chamado };
  }
  return getJson<Chamado>(`/api/chamados/${id}`);
}
