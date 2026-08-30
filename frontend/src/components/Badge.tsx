import type { Status, Prioridade } from '@/types/chamado';

const statusStyles: Record<Status, string> = {
  Aberto: 'bg-amber-50 text-amber-700 border-amber-200',
  'Em andamento': 'bg-blue-50 text-blue-700 border-blue-200',
  Resolvido: 'bg-emerald-50 text-emerald-700 border-emerald-200',
};

const prioridadeStyles: Record<Prioridade, string> = {
  Alta: 'bg-red-50 text-red-700 border-red-200',
  Média: 'bg-amber-50 text-amber-700 border-amber-200',
  Baixa: 'bg-zinc-50 text-zinc-600 border-zinc-200',
};

export function StatusBadge({ status }: { status: Status }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium ${statusStyles[status]}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />
      {status}
    </span>
  );
}

export function PrioridadeBadge({ prioridade }: { prioridade: Prioridade }) {
  return (
    <span
      className={`inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-medium ${prioridadeStyles[prioridade]}`}
    >
      {prioridade}
    </span>
  );
}
