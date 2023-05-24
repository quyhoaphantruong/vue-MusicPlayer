<script setup>
import TopSection from "./components/TopSection.vue";
import SearchSection from "./components/SearchSection.vue";
import SongList from "./components/SongList.vue";
import PlayerSection from "./components/PlayerSection.vue";
import { ref, onMounted, onUnmounted, provide, watch } from "vue";
import { songs } from "./assets/data/songs";

// The set current progress is still not implemented

let audioPlayer = ref(null);
const volume = ref(0.5);
const isPlaying = ref(false);
const currentProgress = ref(0);
const currentIdx = ref(0);
const currentSong = ref(songs[currentIdx.value]);

const nextSong = () => {
  if (currentIdx.value == songs.length - 1) {
    currentIdx.value = 0;
  } else {
    currentIdx.value += 1;
  }
};
const prevSong = () => {
  if (currentIdx.value == 0) {
    currentIdx.value = songs.length - 1;
  } else {
    currentIdx.value -= 1;
  }
};

onMounted(() => {
  audioPlayer.value = new Audio();
  audioPlayer.value.src = currentSong.value.src;
  audioPlayer.value.ontimeupdate = () => {
    if (audioPlayer.value) {
      currentProgress.value =
        audioPlayer.value.currentTime / audioPlayer.value.duration;
    }
    // duration.value = audioPlayer.value.currentTime / audioPlayer.value.duration;
  };
  audioPlayer.value.onended = () => {
    prevSong();
  };
});

onUnmounted(() => {
  audioPlayer.value = null;
});

const setCurrentSong = (idx) => {
  currentSong.value = songs[idx];
};

const changeVolume = (number) => {
  volume.value = number;
};

const togglePlaying = () => {
  isPlaying.value = !isPlaying.value;
};

const setCurrentIdx = (idx) => {
  currentIdx.value = idx;
};
const setCurrentProgress = (number) => {
  currentProgress.value = number;
};

provide("volume", { volume, changeVolume });
provide("audioPlayer", {
  audioPlayer,
  isPlaying,
  togglePlaying,
});
provide("song", {
  currentSong,
  songs,
  setCurrentSong,
  setCurrentIdx,
  currentProgress,
  setCurrentProgress,
  prevSong,
  nextSong,
});
watch(volume, () => {
  if (audioPlayer) {
    audioPlayer.value.volume = volume.value;
  }
});

watch(isPlaying, () => {
  if (isPlaying.value) {
    audioPlayer.value.play();
  } else {
    audioPlayer.value.pause();
  }
});

watch(currentIdx, () => {
  setCurrentSong(currentIdx.value);
  audioPlayer.value.pause();
  audioPlayer.value.src = currentSong.value.src;
  audioPlayer.value.load();
  audioPlayer.value.play();
  isPlaying.value = true;
});
</script>

<template>
  <main class="bg-bgBlack min-h-full h-screen text-white flex flex-col">
    <TopSection />
    <SearchSection />
    <SongList />
    <PlayerSection />
  </main>
</template>
