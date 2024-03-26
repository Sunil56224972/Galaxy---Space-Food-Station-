<template>
  <button
    class="the-sound-switcher-mobile"
    :aria-label="isMuted ? 'Unmute sound' : 'Mute sound'"
    @click="handleToggle"
  >
    <svg viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="10" y="5" width="40" height="30" fill="none" stroke="black" stroke-width="2" rx="15" />
      <path d="M20 24H23.8L29 28V12L23.8 16H20V24Z" fill="black" />
      <path v-if="!isMuted" d="M33 16 Q37 20 33 24" stroke="black" stroke-width="2" fill="none" stroke-linecap="round" />
      <path v-if="!isMuted" d="M37 13 Q44 20 37 27" stroke="black" stroke-width="2" fill="none" stroke-linecap="round" />
      <line v-if="isMuted" x1="33" y1="15" x2="42" y2="25" stroke="black" stroke-width="2" stroke-linecap="round" />
      <line v-if="isMuted" x1="42" y1="15" x2="33" y2="25" stroke="black" stroke-width="2" stroke-linecap="round" />
    </svg>
  </button>
</template>

<script setup lang="ts">
import { useSound } from "~/composables/useSound";

const { toggleMute, isMuted } = useSound();
function handleToggle() { toggleMute(); }
</script>

<style scoped>
.the-sound-switcher-mobile {
  align-items: center;
  background: none;
  border: none;
  cursor: none;
  display: flex;
  justify-content: center;
  outline: none;
  padding: 0;
  width: 3rem;
}
.the-sound-switcher-mobile svg {
  overflow: visible;
  width: 100%;
}
</style>
