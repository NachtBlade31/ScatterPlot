import React from 'react';

import  {Scatter} from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const ScatterPlot = ({ data }) => {
  const chartData = {
    datasets: [
      {
        label: 'PCA',
        data: data.datasets[0].data,
        backgroundColor: data.datasets[0].backgroundColor,
        borderColor: data.datasets[0].borderColor,
        borderWidth: data.datasets[0].borderWidth,
        pointRadius: data.datasets[0].pointRadius,
        pointBackgroundColor: data.datasets[0].pointBackgroundColor,
      },
    ],
  };

  return <Scatter data={chartData} />;
};

export default ScatterPlot;
