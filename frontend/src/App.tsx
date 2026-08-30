import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from '@/pages/Login/LoginPage';
import { CadastroPage } from '@/pages/Cadastro/CadastroPage';
import { HomePage } from '@/pages/Home/HomePage';
import { ChamadoDetalhePage } from '@/pages/Chamado/ChamadoDetalhePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/cadastro" element={<CadastroPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/chamados/:id" element={<ChamadoDetalhePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
