import { type ReactNode } from 'react';

interface StatCardProps {
  icon: ReactNode;
  title: string;
  value: number;
  description: string;
  tone: 'primary' | 'amber' | 'blue' | 'emerald';
}

const tones = {
  primary: 'bg-primary-50 text-primary-600',
  amber: 'bg-amber-50 text-amber-600',
  blue: 'bg-blue-50 text-blue-600',
  emerald: 'bg-emerald-50 text-emerald-600',
};

export function StatCard({ icon, title, value, description, tone }: StatCardProps) {
  return (
    <div className="rounded-2xl border border-line bg-white p-5 shadow-soft transition-all duration-300 hover:shadow-card hover:-translate-y-0.5">
      <div className="flex items-start justify-between">
        <div className={`h-11 w-11 rounded-xl grid place-items-center ${tones[tone]}`}>{icon}</div>
      </div>
      <p className="mt-4 text-sm text-ink-muted">{title}</p>
      <p className="mt-1 text-3xl font-bold tracking-tight text-ink">{value}</p>
      <p className="mt-1 text-xs text-ink-muted">{description}</p>
    </div>
  );
}
