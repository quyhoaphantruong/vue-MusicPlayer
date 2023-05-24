<script setup>
import { inject, onMounted, watch } from "vue";
const lists = ["# Title", "Date added", "Duration"];

const { audioPlayer } = inject("audioPlayer");
const { songs, setCurrentIdx } = inject("song");
watch(audioPlayer, () => {
  if (audioPlayer) {
    console.log(audioPlayer.value);
  }
});
const playSong = (idx) => {
  setCurrentIdx(idx);
};
</script>
<template>
  <div class="lg:px-5 overflow-auto max-h-[400px]">
    <table class="w-full p-0">
      <tr align="left">
        <th class="text-gray"># Title</th>
        <th class="text-gray">Date added</th>
        <th class="text-gray hidden lg:block">Duration</th>
      </tr>
      <tr
        v-for="(song, index) in songs"
        class="hover:bg-[#3e3e3e] cursor-pointer"
      >
        <td @click="() => playSong(index)">
          <div class="flex gap-x-3 items-center px-2 py-2">
            <p class="text-xl text-gray">{{ index + 1 }}</p>
            <div class="w-20">
              <img class="w-full h-full" :src="song.imageUrl" alt="song name" />
            </div>
            <div>
              <p class="text-lg lg:text-xl font-semibold">{{ song.name }}</p>
              <p class="text-lightGray">{{ song.artist }}</p>
            </div>
          </div>
        </td>
        <td>
          <p class="text-lightGray font-semibold">{{ song.dateAdded }}</p>
        </td>
        <td class="hidden lg:inline">
          <p class="text-lightGray font-semibold">{{ song?.duration }}</p>
        </td>
      </tr>
    </table>
  </div>
</template>
