<template>
  <Bar
    id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
    style="padding: 3%; margin: 2%; height: 450px; width: 100%"
  />
</template>

<script lang="ts">
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from "chart.js";

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

export default {
  name: "BarChart",
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: ["January", "February", "March"],
        datasets: [{ data: [40, 20, 12], backgroundColor: "#4C519F" }]
      },
      chartOptions: {
        responsive: true
      }
    };
  }
};
</script>
