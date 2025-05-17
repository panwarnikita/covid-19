import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip);

const LineChart = ({ data }) => {
  const labels = Object.keys(data.cases);
  const chartData = {
    labels,
    datasets: [
      {
        label: 'Cases',
        data: Object.values(data.cases),
        borderColor: 'blue',
        fill: false,
      },
      {
        label: 'Recovered',
        data: Object.values(data.recovered),
        borderColor: 'green',
        fill: false,
      },
      {
        label: 'Deaths',
        data: Object.values(data.deaths),
        borderColor: 'red',
        fill: false,
      },
    ],
  };

  return <Line data={chartData} />;
};

export default LineChart;



