import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MicroorganismPage from './pages/Microorganism';
import PontosavaliadosPage from './pages/Pontosavaliados';
import LimiteContagemPage from './pages/LimiteContagem';
import Dashboard from './pages/Dash/Dashboard';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/microorganism" element={<MicroorganismPage />} />
        <Route path="/pontosavaliados" element={<PontosavaliadosPage />} />
        <Route path="/limites-contagem" element={<LimiteContagemPage />} />
        <Route path="/" element={<Dashboard />} /> {/* Rota padrão */}
      </Routes>
    </div>
  );
}

export default App;