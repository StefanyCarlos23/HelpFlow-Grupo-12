import { type ReactNode, useEffect, useState } from 'react';
import { ArrowLeft, CalendarDays, FileText, UserRound, UserRoundCog } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { Sidebar } from '@/components/Sidebar';
import { StatusBadge, PrioridadeBadge } from '@/components/Badge';
import { getChamadoPorId } from '@/services/api';
import type { Chamado } from '@/types/chamado';

function formatDate(iso?: string) {
  if (!iso) return 'Não informado';
  const [y, m, d] = iso.split('-');
  return `${d}/${m}/${y}`;
}

export function ChamadoDetalhePage() {
  const { id } = useParams<{ id: string }>();
  const [chamado, setChamado] = useState<Chamado | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!id) return;
    getChamadoPorId(id)
      .then(setChamado)
      .catch((err: Error) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div className="min-h-screen bg-surface flex">
      <Sidebar />
      <main className="flex-1 min-w-0">
        <div className="max-w-4xl mx-auto px-5 md:px-8 py-6 md:py-10">
          <Link to="/home" className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 hover:text-primary-900 mb-7">
            <ArrowLeft size={17} /> Voltar para chamados
          </Link>

          {loading && <div className="rounded-2xl border border-line bg-white p-10 text-center text-ink-muted">Carregando chamado...</div>}
          {!loading && error && <div className="rounded-2xl border border-red-200 bg-white p-10 text-center text-red-700">{error}</div>}

          {!loading && chamado && (
            <>
              <header className="mb-7">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary-700">Chamado #{chamado.id}</p>
                <h1 className="mt-2 text-2xl md:text-3xl font-bold tracking-tight text-ink">{chamado.titulo}</h1>
                <div className="mt-3 flex flex-wrap gap-2">
                  <StatusBadge status={chamado.status} />
                  <PrioridadeBadge prioridade={chamado.prioridade} />
                  {chamado.tipo && <span className="inline-flex items-center rounded-full bg-surface px-3 py-1 text-xs font-medium text-ink-muted">{chamado.tipo}</span>}
                </div>
              </header>

              <section className="rounded-2xl border border-line bg-white shadow-soft overflow-hidden">
                <div className="p-6 border-b border-line">
                  <div className="flex items-center gap-2 mb-3 text-ink"><FileText size={18} className="text-primary-600" /><h2 className="font-bold">Descrição</h2></div>
                  <p className="text-sm leading-7 text-ink-muted">{chamado.descricao || 'Sem descrição cadastrada.'}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-line">
                  <Info label="Solicitante" value={chamado.solicitante || 'Não informado'} icon={<UserRound size={17} />} />
                  <Info label="Responsável" value={chamado.responsavel} icon={<UserRoundCog size={17} />} />
                  <Info label="Abertura" value={formatDate(chamado.data)} icon={<CalendarDays size={17} />} />
                  <Info label="Prazo" value={formatDate(chamado.prazo)} icon={<CalendarDays size={17} />} />
                </div>
              </section>

              <section className="mt-5 rounded-2xl border border-line bg-white shadow-soft p-6">
                <h2 className="font-bold text-ink">Histórico do atendimento</h2>
                <div className="mt-5 space-y-4">
                  <Timeline title="Chamado registrado" text="O chamado foi aberto pelo solicitante." date={formatDate(chamado.data)} />
                  {chamado.status !== 'Aberto' && <Timeline title="Atendimento iniciado" text={`Chamado atribuído a ${chamado.responsavel}.`} date="Em andamento" />}
                  {chamado.status === 'Resolvido' && <Timeline title="Chamado resolvido" text="O atendimento foi concluído com sucesso." date="Concluído" last />}
                </div>
              </section>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

function Info({ label, value, icon }: { label: string; value: string; icon: ReactNode }) {
  return <div className="bg-white p-5"><div className="flex items-center gap-2 text-ink-muted text-xs font-medium">{icon}{label}</div><p className="mt-2 text-sm font-semibold text-ink">{value}</p></div>;
}

function Timeline({ title, text, date, last }: { title: string; text: string; date: string; last?: boolean }) {
  return <div className="flex gap-3"><div className="flex flex-col items-center"><span className="w-2.5 h-2.5 rounded-full bg-primary-600 mt-1.5" />{!last && <span className="w-px flex-1 bg-line mt-1" />}</div><div className="pb-4"><div className="flex flex-wrap items-center gap-2"><h3 className="text-sm font-semibold text-ink">{title}</h3><span className="text-xs text-ink-muted">{date}</span></div><p className="mt-1 text-sm text-ink-muted">{text}</p></div></div>;
}
