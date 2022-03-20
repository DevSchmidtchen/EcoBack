<template>
  <div class="mx-5 mt-3">
    <h1 class="text-3xl">Your Purchase</h1>
    <h2 class="text-xl">Score: 39 🟡</h2>
    <p>Your purchase produced 15 kg CO2 of carbon emissions!</p>
    <div v-for="item in items" :class="[item.background, 'p-3 shadow-md my-1 flex justify-between rounded-md grid grid-cols-4']">
      <div class="col-span-2 font-bold">{{ item.name }}</div>
      <div class="white-nowrap">{{ item.footprint }} kg CO2</div>
      <div class="text-right">{{ item.price.toLocaleString(undefined, {
  style: 'currency',
  currency: 'EUR',
}) }}</div>
    </div>
    <!-- <p class="text-center">{{ $route.query.text }}</p> -->
  </div>
</template>

<script setup>
  const items = [
    {
      name: "Milk",
      footprint: 2.4,
      price: 1.0,
      background: "bg-orange-500/80",
    },
    {
      name: "1 kg Steak",
      footprint: 12.3,
      price: 3.5,
      background: "bg-red-700/80",
    },
    {
      name: "Glas Bottle",
      footprint: 1.6,
      price: 1.0,
      background: "bg-green-700/80",
    }
  ];
</script>