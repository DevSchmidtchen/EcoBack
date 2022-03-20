<template>
  <div class="ml-5">
    <h1 class="text-3xl">Dein Einkauf</h1>
    <h2 class="text-xl">Score: 123 🟡</h2>
    <p>Dein Einkauf hat ca. 15 kg CO2 Emissionen verursacht!</p>
    <div v-for="item in items" class="p-3 shadow-md my-1 flex justify-between">
      <div>{{ item.name }}</div>
      <div>{{ item.footprint }} kg CO2</div>
      <div>{{ item.price }} €</div>
    </div>
    <!-- <p class="text-center">{{ $route.query.text }}</p> -->
  </div>
</template>

<script setup>
  const items = [
    {
      name: "Milch 🟠",
      footprint: 2.4,
      price: 0.5,
      background: "",
    },
    {
      name: "1 kg Fleisch 🔴",
      footprint: 12.3,
      price: 0.5,
    },
    {
      name: "Glasflasche 🟢",
      footprint: 1.6,
      price: 0.5,
    }
  ];
</script>