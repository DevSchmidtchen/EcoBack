<template>
  <div class="p-10">
    <div v-for="coupon in coupons" class=" w-full lg:max-w-full flex mb-3">
      <div class="shadow-xl bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div class="">
          <div class="text-gray-900 font-bold text-xl mb-2">{{ coupon.title }}</div>
          <p class="text-gray-700 text-base mb-3">{{ coupon.text }}</p>
          <button class="bg-green-500 text-white w-full py-3 rounded-md shadow-md">Redeem</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  
  const coupons = ref([
    {
      title: "10 % discount at EDEKA Mueller for Oat Milk",
      text: "Due to your sustainable purchases at EDEKA Mueller you got a coupon code.",
    },
    {
      title: "25 % dicount at REWE Meyer for Vegetarian Meat Alternatives",
      text: "Due to your sustainable purchases at REWE Meyer you got a coupon code.",
    },
    {
      title: "10 % discount at EDEKA Mueller for Oat Milk",
      text: "Due to your sustainable purchases at EDEKA Mueller you got a coupon code.",
    },
    {
      title: "25 % dicount at REWE Meyer for Vegetarian Meat Alternatives",
      text: "Due to your sustainable purchases at REWE Meyer you got a coupon code.",
    }
  ]);
</script>

<style>
  #background{
    background-image: url('../assets/prozent.png');
    background-size: contain;
    background-repeat: no-repeat;
  }
</style>