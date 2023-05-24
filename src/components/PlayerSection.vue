<script setup>
import {
  PlayIcon,
  PauseIcon,
  BackwardIcon,
  ForwardIcon,
  SpeakerWaveIcon,
} from "@heroicons/vue/24/solid";
import { inject } from "vue";

const { volume, changeVolume: updateVolume } = inject("volume");
const { isPlaying, togglePlaying } = inject("audioPlayer");
const { currentSong, currentProgress, setCurrentProgress, nextSong, prevSong } =
  inject("song");
const changeVolume = (e) => {
  let newVolume = 0;
  newVolume = e.offsetX / 100;
  updateVolume(newVolume);
};
const changeProgress = (e) => {
  let currentWidth = e.offsetX / 100;
  setCurrentProgress(currentWidth);
};
</script>

<template>
  <div class="bg-black flex justify-between px-3 py-4 mt-auto">
    <!-- Song info -->
    <div class="flex gap-x-4">
      <div class="w-20 rounded-lg">
        <img
          class="w-full h-full overflow-hidden"
          :src="currentSong?.imageUrl"
          alt="song name"
        />
      </div>
      <div>
        <p class="text-xl font-semibold">{{ currentSong?.name }}</p>
        <p class="text-lightGray">{{ currentSong?.artist }}</p>
      </div>
    </div>
    <!-- Control songs -->
    <div class="flex flex-col gap-y-2">
      <!-- Control -->
      <div class="flex gap-x-5">
        <div @click="prevSong">
          <BackwardIcon class="w-10 h-10 cursor-pointer" />
        </div>
        <div @click="togglePlaying">
          <PlayIcon v-if="!isPlaying" class="w-10 h-10 cursor-pointer" />
          <PauseIcon v-if="isPlaying" class="w-10 h-10 cursor-pointer" />
        </div>
        <div @click="nextSong">
          <ForwardIcon class="w-10 h-10 cursor-pointer" />
        </div>
      </div>
      <!-- Progress bar -->
      <div
        class="w-full h-2 bg-gray rounded-full overflow-hidden cursor-pointer"
      >
        <div
          class="h-full bg-green-500"
          :style="`width: ${currentProgress ? currentProgress * 100 : 0}%`"
        ></div>
      </div>
    </div>
    <!-- Volume -->
    <div class="flex gap-x-2 items-center">
      <div>
        <SpeakerWaveIcon class="w-5 h-5" />
      </div>
      <div>
        <div
          @click="changeVolume"
          class="w-24 h-2 bg-gray cursor-pointer rounded-full overflow-hidden"
        >
          <div
            class="h-full bg-green-500"
            :style="{ width: volume * 100 + '%' }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
