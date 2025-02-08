import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header';
import MicroorganismPage from './pages/Microorganism';
import PontosavaliadosPage from './pages/Pontosavaliados';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <PontosavaliadosPage/>
  </React.StrictMode>
);

