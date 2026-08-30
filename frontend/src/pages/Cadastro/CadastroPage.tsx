import { useState, type FormEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { User, Mail, Lock } from 'lucide-react';
import { Logo } from '@/components/Logo';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';

interface FormErrors {
  nome?: string;
  email?: string;
  senha?: string;
  confirmarSenha?: string;
}

export function CadastroPage() {
  const navigate = useNavigate();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);

  function validate(): boolean {
    const e: FormErrors = {};
    if (!nome.trim()) e.nome = 'Informe seu nome completo.';
    if (!email.trim()) {
      e.email = 'Informe seu e-mail.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      e.email = 'E-mail inválido.';
    }
    if (!senha) {
      e.senha = 'Informe uma senha.';
    } else if (senha.length < 6) {
      e.senha = 'A senha deve ter no mínimo 6 caracteres.';
    }
    if (!confirmarSenha) {
      e.confirmarSenha = 'Confirme sua senha.';
    } else if (confirmarSenha !== senha) {
      e.confirmarSenha = 'As senhas não coincidem.';
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/');
    }, 600);
  }

  return (
    <div className="min-h-screen bg-surface flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md animate-fade-in">
        <div className="flex flex-col items-center mb-8">
          <Logo size="lg" />
        </div>

        <div className="rounded-2xl border border-line bg-white p-7 shadow-card">
          <h1 className="text-xl font-bold text-ink mb-1">Criar sua conta</h1>
          <p className="text-sm text-ink-muted mb-6">Preencha os dados para se cadastrar.</p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input
              label="Nome completo"
              type="text"
              name="nome"
              placeholder="Seu nome"
              icon={<User size={16} />}
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              error={errors.nome}
            />
            <Input
              label="E-mail"
              type="email"
              name="email"
              placeholder="voce@empresa.com"
              icon={<Mail size={16} />}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={errors.email}
            />
            <Input
              label="Senha"
              type="password"
              name="senha"
              placeholder="Mínimo 6 caracteres"
              icon={<Lock size={16} />}
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              error={errors.senha}
            />
            <Input
              label="Confirmar senha"
              type="password"
              name="confirmarSenha"
              placeholder="Repita a senha"
              icon={<Lock size={16} />}
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
              error={errors.confirmarSenha}
            />

            <Button type="submit" fullWidth disabled={loading}>
              {loading ? 'Criando...' : 'Criar conta'}
            </Button>
          </form>

          <p className="mt-5 text-sm text-ink-muted text-center">
            Já possui uma conta?{' '}
            <Link to="/" className="text-primary-700 font-semibold hover:underline">
              Entrar
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
