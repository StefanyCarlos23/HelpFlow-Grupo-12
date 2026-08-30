import { useEffect, useState } from 'react';
import { Ticket, Inbox, Clock, CheckCircle2, Search, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Sidebar } from '@/components/Sidebar';
import { StatCard } from '@/components/StatCard';
import { StatusBadge, PrioridadeBadge } from '@/components/Badge';
import { getChamados, getIndicadores } from '@/services/api';
import type { Chamado, Indicadores } from '@/types/chamado';

function formatDate(iso: string): string {
  const [y, m, d] = iso.split('-');
  return `${d}/${m}/${y}`;
}

export function HomePage() {
  const [chamados, setChamados] = useState<Chamado[]>([]);
  const [indicadores, setIndicadores] = useState<Indicadores | null>(null);
  const [loading, setLoading] = useState(true);
  const [busca, setBusca] = useState('');

  useEffect(() => {
    let active = true;
    Promise.all([getChamados(), getIndicadores()])
      .then(([c, i]) => {
        if (!active) return;
        setChamados(c);
        setIndicadores(i);
      })
      .finally(() => active && setLoading(false));
    return () => {
      active = false;
    };
  }, []);

  const chamadosFiltrados = chamados.filter((c) =>
    c.titulo.toLowerCase().includes(busca.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-surface flex">
      <Sidebar />

      <main className="flex-1 min-w-0">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 md:py-10 animate-fade-in">
          {/* Header */}
          <header className="mb-8">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-ink">Olá, usuário!</h1>
            <p className="mt-1 text-sm md:text-base text-ink-muted">
              Acompanhe seus chamados e mantenha tudo sob controle.
            </p>
          </header>

          {/* Indicadores */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <StatCard
              icon={<Ticket size={20} />}
              title="Total de chamados"
              value={indicadores?.total ?? 0}
              description="Todos os chamados registrados"
              tone="primary"
            />
            <StatCard
              icon={<Inbox size={20} />}
              title="Abertos"
              value={indicadores?.abertos ?? 0}
              description="Aguardando atendimento"
              tone="amber"
            />
            <StatCard
              icon={<Clock size={20} />}
              title="Em andamento"
              value={indicadores?.emAndamento ?? 0}
              description="Sendo resolvidos agora"
              tone="blue"
            />
            <StatCard
              icon={<CheckCircle2 size={20} />}
              title="Resolvidos"
              value={indicadores?.resolvidos ?? 0}
              description="Concluídos com sucesso"
              tone="emerald"
            />
          </section>

          {/* Chamados recentes */}
          <section className="rounded-2xl border border-line bg-white shadow-soft overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-5 py-4 border-b border-line">
              <h2 className="text-lg font-bold text-ink">Chamados recentes</h2>
              <div className="relative w-full sm:w-64">
                <Search
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-muted pointer-events-none"
                />
                <input
                  type="text"
                  placeholder="Buscar chamado..."
                  value={busca}
                  onChange={(e) => setBusca(e.target.value)}
                  className="w-full rounded-xl border border-line bg-surface pl-9 pr-3 py-2 text-sm text-ink placeholder:text-ink-muted/60 focus:outline-none focus:ring-2 focus:ring-primary-200 focus:border-primary-400 transition-all"
                />
              </div>
            </div>

            {loading ? (
              <div className="px-5 py-16 text-center text-sm text-ink-muted">Carregando chamados...</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-line bg-surface/50 text-left">
                      <th className="px-5 py-3 font-medium text-ink-muted">ID</th>
                      <th className="px-5 py-3 font-medium text-ink-muted">Título</th>
                      <th className="px-5 py-3 font-medium text-ink-muted">Prioridade</th>
                      <th className="px-5 py-3 font-medium text-ink-muted">Status</th>
                      <th className="px-5 py-3 font-medium text-ink-muted">Responsável</th>
                      <th className="px-5 py-3 font-medium text-ink-muted">Data</th>
                      <th className="px-5 py-3 font-medium text-ink-muted">Ação</th>
                    </tr>
                  </thead>
                  <tbody>
                    {chamadosFiltrados.map((c) => (
                      <tr
                        key={c.id}
                        className="border-b border-line last:border-0 hover:bg-primary-50/40 transition-colors"
                      >
                        <td className="px-5 py-3.5 font-mono text-xs text-ink-muted">#{c.id}</td>
                        <td className="px-5 py-3.5 font-medium text-ink">{c.titulo}</td>
                        <td className="px-5 py-3.5">
                          <PrioridadeBadge prioridade={c.prioridade} />
                        </td>
                        <td className="px-5 py-3.5">
                          <StatusBadge status={c.status} />
                        </td>
                        <td className="px-5 py-3.5 text-ink-muted">{c.responsavel}</td>
                        <td className="px-5 py-3.5 text-ink-muted whitespace-nowrap">{formatDate(c.data)}</td>
                        <td className="px-5 py-3.5">
                          <Link to={`/chamados/${c.id}`} className="inline-flex items-center gap-1 text-primary-700 hover:text-primary-900 font-medium">Ver <ExternalLink size={14} /></Link>
                        </td>
                      </tr>
                    ))}
                    {chamadosFiltrados.length === 0 && (
                      <tr>
                        <td colSpan={7} className="px-5 py-12 text-center text-ink-muted">
                          Nenhum chamado encontrado.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}
