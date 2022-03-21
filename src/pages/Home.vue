<template>
     <section class="item_section">
        <div class="item score">
            <div>
              <h1>625</h1>
              <p> Kg</p>           
            </div>
        </div>
        <div class="item chart">
            <canvas id="myChart" width="100" height="60"></canvas>
        </div>
       <div class="item ranking mb-24">
         <div class="ranking2">
           <h1 class="name">Amani Huynh</h1>
           <img src="../assets/icon/drop_up.svg">
           <h1 class="co2">214.5 Kg</h1>
         </div>
         <div class="ranking2">
           <h1 class="name">Asiya Pitts</h1>
           <img src="../assets/icon/drop_down.svg">
           <h1 class="co2">225.7 Kg</h1>
         </div>
         <div class="ranking1">
           <h1 class="name">You</h1>
           <img src="../assets/icon/drop_up.svg">
           <h1 class="co2">625.4 Kg</h1>
         </div>
         <div class="ranking2">
           <h1 class="name">Taybah Pittman</h1>
           <img src="../assets/icon/drop_up.svg">
           <h1 class="co2">721.8 Kg</h1>
         </div>
         <div class="ranking2">
           <h1 class="name">Rami Maddox</h1>
           <img src="../assets/icon/drop_down.svg">
           <h1 class="co2">813.1 Kg</h1>
         </div>
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
    datasets: [
      {
      label: 'Du',
      lineTension: 0,
      data: [1106, 795, 951, 859, 458, 645, 625],
      borderColor: '#259500',
      backgroundColor: '#259500',
    },{
      label: 'Duchschnitt',
      lineTension: 0,
      data: [800, 850, 700, 725, 812, 780, 750],
      borderColor: '#ADD8E6',
      backgroundColor: '#ADD8E6',
    }],
    labels: ['15.3', '16.3', '17.3', '18.3', '19.3', '20.3', '21.3']
  },
  options: {
    scales: {
        y: {
          grid: {
            color: '#22C55E'
          },
          ticks: {
            color: '#22C55E'
          }
        },
        x: {
          grid: {
            color: '#22C55E'
          },
          ticks: {
            color: '#22C55E'
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