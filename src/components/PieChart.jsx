import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data }) => {
  const lastDate = Object.keys(data.cases).pop();
  const pieData = {
    labels: ['Cases', 'Recovered', 'Deaths'],
    datasets: [
      {
        data: [
          data.cases[lastDate],
          data.recovered[lastDate],
          data.deaths[lastDate],
        ],
        backgroundColor: ['blue', 'green', 'red'],
      },
    ],
  };

  return <Pie data={pieData} />;
};

export default PieChart;








