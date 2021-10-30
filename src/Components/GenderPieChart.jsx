import { Pie } from 'react-chartjs-2';
const GenderPieChart = ({ data }) => {
  const chartData = {
    labels: ['Male', 'Female'],
    datasets: [
      {
        label: 'By Gender',
        data: [data.male, data.female],
        backgroundColor: ['rgba(54, 162, 235, 0.5)', 'rgba(255, 0, 127, 0.5)'],
        borderColor: ['rgba(255, 99, 132, 0.5)', 'rgba(255, 99, 132, 0.5)'],
        borderWidth: 1,
      },
    ],
    options: {
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
export default GenderPieChart;
