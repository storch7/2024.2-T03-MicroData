import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header';
import MicroorganismPage from './pages/Microorganism';
import LimiteContagem from './pages/LimiteContagem';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <LimiteContagem/>
  </React.StrictMode>
);

