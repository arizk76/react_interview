import { Doughnut } from 'react-chartjs-2';

const RegDateChart = ({ data }) => {
  const chartData = {
    labels: [
      '  before 1950',
      '  from 1950 -  to 1960',
      '  from 1960 -  to 1970',
      '  from 1970 -  to 1980',
      '  from 1980 -  to 1990',
      '  after 1990',
    ],
    datasets: [
      {
        label: 'by registration year',
        data: [
          data.below1950,
          data.below1960,
          data.below1970,
          data.below1980,
          data.below1990,
          data.above1990,
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
      <Doughnut data={chartData} />
    </div>
  );
};
export default RegDateChart;
