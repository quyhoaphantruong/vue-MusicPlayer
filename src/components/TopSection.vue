<script setup>
import { songs } from "../assets/data/songs";

const imgUrl =
  "https://i.ytimg.com/vi/4_oZkZlgqWk/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARgrIEUofzAP&rs=AOn4CLCPg7uqtVa1Jcj1XWssskGX49kExQ";
</script>

<template>
  <div class="flex flex-col lg:flex-row gap-3 items-center p-4 bg-gradient">
    <div class="w-60">
      <img
        class="h-auto max-w-full rounded-lg"
        :src="imgUrl"
        alt="image-playlist"
      />
    </div>
    <div>
      <p class="text-2xl">Playlist</p>
      <p class="text-5xl lg:text-7xl font-bold">Còn Mình Anh Thôi</p>

      <div class="mt-2 flex gap-2 items-center">
        <p class="text-bold text-xl">Phan Truong Quy Hoa.</p>
        <p class="text-bold text-xl">{{ songs.length }} songs</p>
      </div>
    </div>
  </div>
</template>
