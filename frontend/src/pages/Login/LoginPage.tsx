import { useState, type FormEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Lock } from 'lucide-react';
import { Logo } from '@/components/Logo';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';

export function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/home');
    }, 600);
  }

  return (
    <div className="min-h-screen bg-surface flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md animate-fade-in">
        <div className="flex flex-col items-center mb-8">
          <Logo size="lg" />
          <p className="mt-4 text-sm text-ink-muted text-center">
            Gerencie seus chamados de forma simples e eficiente.
          </p>
        </div>

        <div className="rounded-2xl border border-line bg-white p-7 shadow-card">
          <h1 className="text-xl font-bold text-ink mb-1">Entrar</h1>
          <p className="text-sm text-ink-muted mb-6">Acesse sua conta para continuar.</p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input
              label="E-mail"
              type="email"
              name="email"
              placeholder="voce@empresa.com"
              icon={<Mail size={16} />}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              label="Senha"
              type="password"
              name="senha"
              placeholder="••••••••"
              icon={<Lock size={16} />}
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />

            <Button type="submit" fullWidth disabled={loading}>
              {loading ? 'Entrando...' : 'Entrar'}
            </Button>
          </form>

          <div className="mt-5 flex flex-col gap-2 text-sm">
            <button className="text-ink-muted hover:text-primary-700 transition-colors text-left w-fit">
              Esqueci minha senha
            </button>
            <p className="text-ink-muted">
              Não tem conta?{' '}
              <Link to="/cadastro" className="text-primary-700 font-semibold hover:underline">
                Criar uma conta
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
