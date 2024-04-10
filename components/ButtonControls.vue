<template>
  <button
    class="button-controls button-shadow"
    :aria-label="direction === 'prev' ? 'Previous slide' : 'Next slide'"
    data-sound-click="click"
  >
    <svg v-if="direction === 'prev'" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <svg v-else viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </button>
</template>

<script setup lang="ts">
defineProps<{ direction: "prev" | "next" }>();
</script>

<style scoped>
.button-controls {
  align-items: center;
  background: var(--color-light);
  border: 2px solid var(--color-black);
  border-radius: 50%;
  color: var(--color-black);
  cursor: none;
  display: flex;
  height: 3.25rem;
  justify-content: center;
  outline: none;
  position: relative;
  transition: transform 0.15s ease;
  width: 3.25rem;
}
.button-controls:active { transform: scale(0.93); }
.button-controls svg { width: 1.25rem; }
</style>
