<script setup>
const imgUrl = "https://wallpaperaccess.com/full/719863.jpg";
</script>
<template>
  <div class="grid grid-cols-3 cursor-pointer hover:bg-[#bfbfbf] z-[-12]">
    <div class="h-[100%] flex">
      <div class="w-20 h-[100%]">
        <img class="w-full" :src="imgUrl" alt="song name" />
      </div>
      <div class="flex flex-col">
        <p>Hơn cả mây trời</p>
        <p>Như Việt</p>
      </div>
    </div>
    <!-- Date added -->
    <div class="">4 days ago</div>
    <!-- Duration -->
    <div class="col-end-2">4:02</div>
  </div>
</template>
