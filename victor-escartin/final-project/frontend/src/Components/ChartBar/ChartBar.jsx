import React from 'react';
import { Bar } from 'react-chartjs-2';
import './ChartBar.css';

export default function ChartBar({ challenges }) {
  const challengesTitles = [];
  const challengesCollected = [];
  const challengesTargets = [];

  challenges.forEach((challenge) => {
    challengesTitles.push(challenge.title);
    challengesCollected.push(challenge.collected);
    challengesTargets.push(challenge.target);
  });

  const data = {
    labels: challengesTitles, // Parámetros de la gráfica
    datasets: [{ // Personalización de la gráfica
      label: 'Donaciones',
      backgroundColor: ' rgb(221, 164, 59)',
      borderColor: 'black',
      borderWidth: 1,
      hoverBackgroundColor: ' rgba(221, 164, 59, 0.555)',
      hoverBorderColor: '#FFFF00',
      data: challengesCollected,
    },
    {
      label: 'Objetivo',
      backgroundColor: '#14A37F',
      borderColor: 'black',
      borderWidth: 1,
      hoverBackgroundColor: ' rgba(32, 97, 61, 0.575)',
      hoverBorderColor: '#FFFF00',
      data: challengesTargets,
    }],
  };

  const options = { // configuraciones de manera externa
    maintainaspectRatio: false,
    responsive: true,
  };

  return (
    <div className="chart-container">
      <div className="chartBar" style={{ width: '100%', height: '50vw' }}>
        <h2>Estado actual de los Retos Activos </h2>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}
