<template>

<div class="flex items-center justify-center w-screen my-8 ">
    <div class="relative text-gray-600 focus-within:text-gray-400">
      <span class="absolute inset-y-0 left-0 flex items-center pl-2">
        <button type="submit" class="p-1 focus:outline-none focus:shadow-outline">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </button>
      </span>
      <input type="search" v-model="searchText" class="py-2 text-sm text-white bg-gray-200 rounded-md pl-10 focus:outline-none focus:bg-white-100 focus:text-gray-500" placeholder="Add item..." autocomplete="off">
    </div>
</div>


  <!-- header >
  <div class="flex flex-col">
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block py-2 min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden shadow-md sm:rounded-lg">
                <table class="min-w-full">
                    <thead class="bg-gray-200">
                        <tr>
                            <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase">
                                Einkauf
                            </th>
                            <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase">
                                CO2 Emmision
                            </th>
                            <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase">
                                Kosten
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        < Product 1 >
                        <tr class="bg-green-200 border-b">
                            <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                                Gurken
                            </td>
                            <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                                1 KG
                            </td>
                            <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                                12,99 €
                            </td>
                        </tr>
                        < Product 2 >
                        <tr class="bg-yellow-200 border-b">
                            <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                                Cookies
                            </td>
                            <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                                2,5 KG
                            </td>
                            <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                                9,49 €
                            </td>
                        </tr>
                        < Product 2 >
                       <tr class="bg-red-200 border-b">
                            <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                                Fleisch
                            </td>
                            <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                                3,3 KG
                            </td>
                            <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                                14,99 €
                            </td>
                        </tr>
                      < Product 3 >
                       <tr class="bg-red-200 border-b">
                            <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                                Brezeln, Haxe, Soße
                            </td>
                            <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                                5,3 KG
                            </td>
                            <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                                18,49 €
                            </td>
                        </tr>
                      < Product 4 >
                         <tr class="bg-green-200 border-b">
                            <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                                Wasser, Tofu, Kartoffeln
                            </td>
                            <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                                1,75 KG
                            </td>
                            <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                                8,00 €
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
    </div>
  </div>
</div-->
<section v-if="searchText" class="list_item_section">
  <div class="list_item_div">
    <div v-for="item in filteredItems" :class="[item.background, 'list_item']" @click="addItem(item)">
        <img :src="item.image" alt="">
        <p>{{ item.name }}</p>
    </div>
  </div>
</section>
<section v-else class="list_item_section">
<div class="list_item_div">
    <div v-for="(item, index) in shoppingList" :class="[item.background, 'list_item']" @click="shoppingList.splice(index, 1)">
        <img :src="item.image" alt="">
        <p>{{ item.name }}</p>
    </div>
</div>
</section>
  
</template>

<script setup>
  import { ref, computed } from "vue"
  import Apple from '../assets/icon/apple.png';
  import Milk from '../assets/icon/hemp-milk.png';
  import OatMilk from '../assets/icon/oat_milk.png';
  import Steak from '../assets/icon/steak.png';
  import Bread from '../assets/icon/bread.png';
  import Carrot from '../assets/icon/carrot.png';
  import Strawberry from '../assets/icon/strawberry.png';

  const searchText = ref(null);
  
  const shoppingList = ref([
    {
      name: "Apple",
      background: "bg-green-500",
      image: Apple,
    },
    {
      name: "Steak",
      background: "bg-red-700",
      image: Steak,
    }
  ]);
  
  const items = [
    {
      name: "Apple",
      background: "bg-green-500",
      image: Apple,
    },
    {
      name: "Milk",
      background: "bg-orange-500",
      image: Milk,
    },
    {
      name: "Oatmilk",
      background: "bg-green-500",
      image: OatMilk,
    },
    {
      name: "Steak",
      background: "bg-red-700",
      image: Steak,
    },
    {
      name: "Bread",
      background: "bg-green-500",
      image: Bread ,
    },
    {
      name: "Carrot",
      background: "bg-green-500",
      image: Carrot ,
    },
    {
      name: "Strawberry",
      background: "bg-green-500",
      image: Strawberry ,
    }
];

  const filteredItems = computed(() => {
    return items.filter((item) => item.name.toLowerCase().includes(searchText.value.toLowerCase()));
  });

  function addItem(item) {
    shoppingList.value.push(item);
    searchText.value = "";
  }
</script>

<style>
  .list_item_section {
    text-align: center;
    
  }
  
  .list_item_div {
    display: block;
    margin: 20px;
    width: 330px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .list_item img {
    margin-top: 10px;
    height: 50px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .list_item {
      display: inline-block;
      border-radius: 10px;
      float: left;
      width: 100px;
      height: 100px;
      text-align: center;
      border-radius: 10px;
      margin: 5px;
  }
  
  .list_item p {
      padding-top: 10px;
      font-size: 12px;
      margin: 0px;
      color: white;
  }
</style>
