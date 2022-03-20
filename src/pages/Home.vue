<template>
     <section class="item_section">
        <div class="item score">
            <div>
              <h1>620</h1>
              <p>Kg</p>           
            </div>
        </div>
        <div class="item chart">
            <canvas id="myChart" width="100" height="60"></canvas>
        </div>
    </section>

  <!-- TODO: Ranking -->
</template>



<script setup>
 import {
  Chart,
  LineElement,
  PointElement,
  LineController,
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Legend,
} from 'chart.js';

Chart.register(
  LineElement,
  PointElement,
  LineController,
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Legend,
);

  import { onMounted  } from "vue";
  
onMounted(() => {
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, 
{
  type: 'line',
  data: {
    datasets: [{
      label: 'Duchschnitt',
      lineTension: 0,
      data: [13, 13, 1, 15, 15, 17, 18],
      borderColor: 'red',
      backgroundColor: 'red',
    },{
      label: 'Du',
      lineTension: 0,
      data: [5, 6, 7, 7, 8, 9, 9],
      borderColor: 'rgba(34, 167, 240, 1)',
      backgroundColor: 'rgba(34, 167, 240, 1)',
    }],
    labels: ['15.3', '16.3', '17.3', '18.3', '19.3', '20.3', '21.3']
  },
  options: {
    scales: {
        y: {
          grid: {
            color: '#32cb00'
          },
          ticks: {
            color: '#32cb00'
          }
        },
        x: {
          grid: {
            color: '#32cb00'
          },
          ticks: {
            color: '#32cb00'
          }
        }
      },
      plugins:{   
         legend: {
           display: false
                 },
              }
         },
    
});

});

</script>

<style scoped>
@import 'home.css';
</style>