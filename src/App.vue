<template>
  <div class="p-3 shadow-md">
  <router-link to="/home" class="text-3xl font-bold  text-green-500 mb-3">EcoBack</router-link>
    </div>
  <router-view></router-view>
  <nav v-if="$route.path !== '/'" class="mobile-nav py-2">
        <router-link to="/alternative" class="bloc-icon" active-class="border-2 rounded-full p-5 bg-green-100">
            <img src="./assets/icon/swap.svg" alt="">
        </router-link>
        <router-link to="/history" class="bloc-icon" active-class="border-2 rounded-full p-5 bg-green-100">
            <img src="./assets/icon/history.svg" alt="">
        </router-link>
        <router-link to="/scan" class="bloc-icon2 rounded-full border-green-500 border-4 p-5">
            <img src="./assets/icon/qr.svg" alt="">
        </router-link>
        <router-link to="/list" href="#" class="bloc-icon" active-class="border-2 rounded-full p-5 bg-green-100">
            <img src="./assets/icon/list.svg" alt="">
        </router-link>
        <router-link to="/coupon" class="bloc-icon" active-class="border-2 rounded-full p-5 bg-green-100">
            <img src="./assets/icon/percent.svg" alt="">
        </router-link>
    </nav>
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<style>
  body {
    margin: 0px;
}

.mobile-nav {
    background: #F1F1F1;
    position: fixed;
    bottom: 0;
    height: 65px;
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
  
  .bloc-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.25rem;
    border-width: 2px;
    border-color: #F1F1F1;
  }

  .bloc-icon2 {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .bloc-icon img {
    width: 30px;
  }
  
</style>