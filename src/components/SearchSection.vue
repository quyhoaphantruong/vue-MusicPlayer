<script setup>
import {
  PlayIcon,
  PauseIcon,
  MagnifyingGlassIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/vue/24/solid";
import { ref, inject } from "vue";

let showSorting = ref(false);
const sortingList = ["Title", "Artist"];

const { togglePlaying, isPlaying } = inject("audioPlayer");
const updatePlaying = () => {
  togglePlaying();
};
</script>
<template>
  <div class="p-5 flex items-center justify-between">
    <!-- Play song -->
    <span
      @click="updatePlaying"
      class="bg-primary p-7 rounded-full w-8 h-8 flex items-center justify-center relative cursor-pointer"
    >
      <PlayIcon v-if="!isPlaying" class="text-black w-7 h-7 z-10 absolute" />
      <PauseIcon v-if="isPlaying" class="text-black w-7 h-7 z-10 absolute" />
    </span>
    <!-- Search Song -->
    <div class="flex items-center gap-x-5 relative">
      <div
        class="p-4 rounded-full w-8 h-8 flex items-center transition-all justify-center relative cursor-pointer hover:bg-lightGray"
      >
        <MagnifyingGlassIcon class="w-5 h-5 z-10 absolute" />
      </div>
      <div
        class="flex items-center gap-x-2 cursor-pointer"
        @click="showSorting = !showSorting"
      >
        <p>Album</p>
        <ChevronDownIcon v-if="!showSorting" class="w-5 h-5" />
        <ChevronUpIcon v-if="showSorting" class="w-5 h-5" />
      </div>
      <div
        class="absolute top-8 right-2 z-10 mt-2 w-50 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabindex="-1"
      >
        <!-- <input type="text" /> -->
        <div
          v-if="showSorting"
          class="py-2 flex flex-col gap-y-3 bg-[#282828]"
          role="none"
        >
          <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
          <div class="p-3">
            <p class="text-white font-semibold text-sm">Sort by</p>
          </div>

          <div v-for="item in sortingList">
            <p
              href="#"
              class="text-glass p-3 cursor-pointer font-semibold block text-sm hover:bg-[#3e3e3e]"
              role="menuitem"
              tabindex="-1"
              id="menu-item-0"
            >
              {{ item }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
