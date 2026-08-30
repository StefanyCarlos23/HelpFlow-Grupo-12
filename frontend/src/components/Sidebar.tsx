import { type ReactNode, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Ticket, User, Settings, LifeBuoy, Menu, X } from 'lucide-react';
import { Logo } from './Logo';

interface NavItem {
  label: string;
  icon: ReactNode;
  to: string;
}

const navItems: NavItem[] = [
  { label: 'Home', icon: <Home size={18} />, to: '/home' },
  { label: 'Chamados', icon: <Ticket size={18} />, to: '/home' },
  { label: 'Perfil', icon: <User size={18} />, to: '/home' },
  { label: 'Configurações', icon: <Settings size={18} />, to: '/home' },
];

export function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile top bar */}
      <div className="md:hidden sticky top-0 z-30 flex items-center justify-between bg-white/90 backdrop-blur border-b border-line px-4 h-14">
        <Logo size="sm" />
        <button
          onClick={() => setMobileOpen(true)}
          className="p-2 rounded-lg text-ink-muted hover:bg-primary-50 hover:text-primary-700 transition-colors"
          aria-label="Abrir menu"
        >
          <Menu size={20} />
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-40">
          <div
            className="absolute inset-0 bg-ink/30 backdrop-blur-sm animate-fade-in"
            onClick={() => setMobileOpen(false)}
          />
          <aside className="absolute left-0 top-0 h-full w-72 bg-white border-r border-line p-5 flex flex-col animate-fade-in">
            <div className="flex items-center justify-between mb-8">
              <Logo size="sm" />
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 rounded-lg text-ink-muted hover:bg-primary-50"
                aria-label="Fechar menu"
              >
                <X size={20} />
              </button>
            </div>
            <NavList onNavigate={() => setMobileOpen(false)} />
          </aside>
        </div>
      )}

      {/* Desktop sidebar */}
      <aside className="hidden md:flex sticky top-0 h-screen w-64 shrink-0 flex-col border-r border-line bg-white px-5 py-7">
        <div className="px-2 mb-8">
          <Logo size="md" />
        </div>
        <NavList />
        <div className="mt-auto rounded-2xl bg-primary-50 p-4">
          <div className="flex items-center gap-2 text-primary-700 mb-1">
            <LifeBuoy size={16} />
            <span className="text-xs font-semibold">Suporte HelpFlow</span>
          </div>
          <p className="text-xs text-ink-muted leading-relaxed">
            Precisa de ajuda? Abra um chamado e nossa equipe responderá.
          </p>
        </div>
      </aside>
    </>
  );
}

function NavList({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <nav className="flex flex-col gap-1">
      {navItems.map((item) => (
        <NavLink
          key={item.label}
          to={item.to}
          onClick={onNavigate}
          className={({ isActive }) => `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
            isActive ? 'bg-primary-600 text-white shadow-pop' : 'text-ink-muted hover:bg-primary-50 hover:text-primary-700'
          }`}
        >
          {item.icon}
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}
