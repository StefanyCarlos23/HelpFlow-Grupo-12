import { LifeBuoy } from 'lucide-react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizes = {
  sm: { box: 'h-8 w-8', icon: 16, text: 'text-lg' },
  md: { box: 'h-10 w-10', icon: 20, text: 'text-xl' },
  lg: { box: 'h-12 w-12', icon: 24, text: 'text-2xl' },
};

export function Logo({ size = 'md', className = '' }: LogoProps) {
  const s = sizes[size];
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className={`${s.box} rounded-xl bg-primary-600 text-white grid place-items-center shadow-pop`}>
        <LifeBuoy size={s.icon} strokeWidth={2.2} />
      </div>
      <span className={`${s.text} font-bold tracking-tight text-ink`}>HelpFlow</span>
    </div>
  );
}
