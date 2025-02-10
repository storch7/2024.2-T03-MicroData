import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Registrando os componentes necessários do Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ data }) => {
  // Extrai as datas, contagens e limites do JSON recebido
  const labels = data.map(item => item.data); // Extrai as datas para o eixo X
  const contagens = data.map(item => item.contagem); // Extrai as contagens para o eixo Y
  const limites = data.map(item => item.limite_contagem); // Extrai os limites para o eixo Y

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Resultados do Monitoramento',
      },
    },
  };

  const chartData = {
    labels: labels, // Usa as datas como rótulos do eixo X
    datasets: [
      {
        label: 'Contagem', // Nome da primeira linha (contagem)
        data: contagens, // Dados da contagem
        borderColor: 'rgb(75, 192, 192)', // Cor da linha de contagem
        tension: 0.1, // Suavização da linha
      },
      {
        label: 'Limite de Contagem', // Nome da segunda linha (limite)
        data: limites, // Dados do limite de contagem
        borderColor: 'rgb(255, 99, 132)', // Cor da linha de limite
        tension: 0.1, // Suavização da linha
      },
    ],
  };

  return <Line options={options} data={chartData} />;
};

export default LineChart;