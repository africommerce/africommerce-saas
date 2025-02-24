import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import classes from './PieChart.module.css';
ChartJS.register(ArcElement, Tooltip, Legend);
export const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: { title: false },
};

export const data = {
  labels: ['Total Publish', 'Total Sellers', 'Total Admin'],

  datasets: [
    {
      data: [5, 2, 3],

      backgroundColor: [
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],

      borderColor: [
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export function PieChart() {
  return (
    <div className={classes.container}>
      <Pie data={data} options={options} />
    </div>
  );
}
