<template>
  <div>
    <Bar :chart-data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

export default {
  components: {
    BarComponent,
  },
  data() {
    return {
      chartData: {
        labels: [12, 13, 14, 15, 16, 17, 18],
        datasets: [
          {
            label: '$',
            backgroundColor: '#00BFFF',
            data: [1500, 2000, 1800, 2525, 3000, 2700, 3200],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        plugins: {
          tooltip: {
            callbacks: {
              label: (tooltipItem) => {
                return `$${tooltipItem.raw}`;
              },
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    };
  },
};
</script>

<style scoped>
/* Add any styles you need */
</style>