import { Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const AgePieChart = ({ data }) => {
  const defaults = Chart.defaults;
  // Legend

  defaults.plugins.legend.display = true;
  defaults.plugins.legend.align = 'start';
  defaults.plugins.legend.position = 'right';
  defaults.plugins.legend.labels.padding = 20;
  defaults.plugins.legend.labels.color = '#161d2e';
  defaults.font.size = 14;
  defaults.plugins.legend.labels.boxWidth = 20;

  const chartData = {
    labels: [
      '  < 36',
      '  36 - 49',
      '  50 - 55',
      '  56 - 60',
      '  61 - 65',
      '  > 65',
    ],
    datasets: [
      {
        label: 'Age Group',
        data: [
          data.below35,
          data.below49,
          data.below55,
          data.below60,
          data.below65,
          data.above65,
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(195, 230, 186, 0.8)',
          'rgba(75, 192, 192, 0.8)',
          'rgba(153, 102, 255, 0.8)',
          'rgba(255, 159, 64, 0.8)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(255, 99, 132, 0.5)',
          'rgba(255, 99, 132, 0.5)',
          'rgba(255, 99, 132, 0.5)',
          'rgba(255, 99, 132, 0.5)',
          'rgba(255, 99, 132, 0.5)',
        ],
        borderWidth: 1,
      },
    ],
    options: {
      plugins: {
        legend: { position: 'left' },
      },

      animations: {
        duration: 1,
      },
    },
  };

  return (
    <div>
      <Pie data={chartData} />
    </div>
  );
};
export default AgePieChart;
