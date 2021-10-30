import { Bar } from 'react-chartjs-2';

const CountryBarChart = ({ data }) => {
  let userNumber,
    countryLabels = [{}];
  countryLabels = data.map((item) => item.countryName);
  userNumber = data.map((item) => item.numberOfUsers);

  const chartData = {
    labels: countryLabels,
    datasets: [
      {
        label: '# of Users By Country',
        // data: [7, 6, 11, 8, 5, 6, 6, 6, 3, 4, 6, 6, 6, 7, 7, 3, 3],
        data: userNumber,
        backgroundColor: [
          'rgba(255, 99, 132, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 206, 86, 0.8)',
          'rgba(75, 192, 192, 0.8)',
          'rgba(153, 102, 255, 0.8)',
          'rgba(255, 159, 64, 0.8)',
          'rgba(255, 99, 132, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 206, 86, 0.8)',
          'rgba(255, 206, 86, 0.8)',
          'rgba(75, 192, 192, 0.8)',
          'rgba(153, 102, 255, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 206, 86, 0.8)',
          'rgba(75, 192, 192, 0.8)',
          'rgba(153, 102, 255, 0.8)',
          'rgba(255, 159, 64, 0.8)',
        ],
        borderColor: 'rgba(255, 99, 132, 0.5)',
        borderWidth: 1,
        // clip: 0,
      },
    ],
    options: {
      plugins: {
        legend: {
          display: true,
          labels: {
            color: 'rgb(255, 99, 132)',
          },
        },
      },
    },
  };

  return (
    <div>
      <Bar data={chartData} />
    </div>
  );
};
export default CountryBarChart;
